import { ReactNode, useState } from "react"


export interface GroupProps {
    title: string,
    color: 'success' | 'secondary' | 'primary' | 'orange' | 'info' | 'warning'
    svg: ReactNode,
    target: string,
    time: string,
    location: string,
    leader: string
}


export default function GroupCard({ title, svg, target, time, color, leader, location }: GroupProps) {

    const [clicked, setClicked] = useState(false);

    return (
        <div className="card custom-card" style={{ cursor: 'pointer' }}
            onClick={(_) => setClicked(!clicked)}>
            <div className="card-body rounded">
                <div className="d-flex align-items-center space-around mb-3">
                    <div className={`main-card-icon ${color} `}>
                        <div
                            className={`avatar avatar-lg bg-${color}-transparent border border-secondary border-opacity-10`}>
                            <div className="avatar avatar-sm svg-white">
                                {svg}
                            </div>
                        </div>
                    </div>
                    <span className="fw-semibold fs-5 ms-2">{title}</span>
                </div>



                {clicked === false &&
                    <>
                        <h5 className="fs-6">
                            {time}
                        </h5>
                        <h5 className="fs-6">對象：
                            {target}
                            <span className="fs-5">
                                <i className="ms-2 ri-play-mini-line align-middle d-inline-block rtl-rotate"></i>
                            </span>
                        </h5>
                    </>
                }



                {clicked &&
                    <>
                        <h5 className="fs-6">{time}</h5>
                        <h5 className="fs-6">對象：{target}</h5>
                        <h5 className="fs-6">小組長：{leader}</h5>
                        <h5 className="fs-6">地點：{location}</h5>
                    </>
                }
            </div>
        </div>
    )
}