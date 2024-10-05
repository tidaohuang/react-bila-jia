import { churchInfo, GOOGLE_SHEET_URL } from '../helper/constants';
import { getFullYear } from '../helper/getFullYear';

export default function Footer() {
    return (
        <div className="landing-main-footer py-3" id='my-footer'>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className='d-flex justify-content-between flex-wrap'>
                        <div className="text-lg-start text-left">
                            <div className="text-fixed-white op-7 fs-6">
                                教會地址：{churchInfo.address}
                            </div>
                            <div className="text-fixed-white op-7 fs-6">
                                教會統編 : {churchInfo.taxId}
                            </div>
                            <div className="text-fixed-white op-7 fs-6">
                                牧師：{churchInfo.paster}
                            </div>
                            <div className="text-fixed-white op-7 fs-6">
                                電話：{churchInfo.phone}
                            </div>
                        </div>
                        <div className="text-lg-start text-left">
                            <div className="text-fixed-white op-7 fs-6">
                                奉獻專戶：財團法人基督教比拉迦教會
                            </div>
                            <div className="text-fixed-white op-7 fs-6">
                                銀行 : 台灣土地銀行(005)新竹分行
                            </div>
                            <div className="text-fixed-white op-7 fs-6">
                                帳號：016-001-050421
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className='d-flex justify-content-between flex-wrap'>
                        <ul className="list-unstyled fw-normal landing-footer-list mb-0">
                            <li style={{ paddingLeft: 0 }}>
                                <a className="text-fixed-white op-8">Privacy</a>
                            </li>
                            <li>
                                <a href={GOOGLE_SHEET_URL} target='_blank' className="text-fixed-white op-8">Donate</a>
                            </li>
                        </ul>
                        <span className="text-fixed-white op-7 fs-14"> © Copyright <span id="year">{getFullYear()}</span> <a
                            href="#" className="text-primary fs-15 fw-semibold">Bila Jia Church</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}