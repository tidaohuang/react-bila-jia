import { ReactNode, useState } from "react"


interface Props {
    isFullWidth?: boolean,
    title: string,
    excerpt: string,
    children: ReactNode
}



export default function PrayerCard({ title, excerpt, children, isFullWidth }: Props) {

    const [clicked, setClicked] = useState(false)


    return (
        <div style={{ cursor: 'pointer' }}
            className={isFullWidth === true ? 'col-12' : 'col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12'}
            onClick={(_) => setClicked(!clicked)}
        >
            <div className="card custom-card featured-card-1 fs-6">
                <div className="card-body p-4">
                    <div className="mb-2">
                        <p className="mb-0 fw-semibold fs-16 text-primary fs-5">
                            {title}
                        </p>
                    </div>
                    <span>
                        {clicked && children}
                        {!clicked && `${excerpt}...`}
                    </span>
                </div>
            </div>
        </div>
    )
}