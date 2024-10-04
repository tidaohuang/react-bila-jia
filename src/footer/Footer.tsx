
import { GOOGLE_SHEET_URL } from '../helper/constants';
import './footer.css';


export default function Footer() {
    return (
        <div className="landing-main-footer py-3">
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className='my-footer-info'>
                        <div className="text-lg-start text-center">
                            <div className="text-fixed-white op-7 fs-6">
                                教會地址：新竹市公園路218號2樓之一
                            </div>
                            <div className="text-fixed-white op-7 fs-6">
                                教會統編 : 41172603
                            </div>
                            <div className="text-fixed-white op-7 fs-6">
                                牧師：林文欽牧師
                            </div>
                            <div className="text-fixed-white op-7 fs-6">
                                電話：03-5257677
                            </div>
                        </div>
                        <div className="text-lg-start text-center">
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
                    <div className="col-lg-6 text-lg-start text-center">
                        <span className="text-fixed-white op-7 fs-14"> © Copyright <span id="year">2024</span> <a
                            href="#" className="text-primary fs-15 fw-semibold">Bila Jia Church</a>
                        </span>
                    </div>
                    <div className="col-lg-6 text-lg-end text-center">
                        <ul className="list-unstyled fw-normal landing-footer-list mb-0">
                            <li>
                                <a className="text-fixed-white op-8">Privacy</a>
                            </li>
                            <li>
                                <a href={GOOGLE_SHEET_URL} target='_blank' className="text-fixed-white op-8">Donate</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}