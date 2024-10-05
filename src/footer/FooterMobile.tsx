import { churchBankInfo, churchInfo, GOOGLE_SHEET_URL } from "../helper/constants";
import { getFullYear } from "../helper/getFullYear";

export default function FooterMobile() {
    return (
        <div className="landing-main-footer py-3" id='my-footer-mobile'>
            <div className="container ms-3 mb-3">
                <div className="row mt-5">
                    <div className="text-lg-start text-left mb-5">
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

                    <div className="text-lg-start text-left mb-5">
                        <div className="text-fixed-white op-7 fs-6">
                            奉獻專戶：{churchBankInfo.name}
                        </div>
                        <div className="text-fixed-white op-7 fs-6">
                            銀行：{churchBankInfo.bank}
                        </div>
                        <div className="text-fixed-white op-7 fs-6">
                            帳號：{churchBankInfo.id}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 text-lg-start text-left">
                        <ul className="list-unstyled fw-normal landing-footer-list mb-0">
                            <li style={{ paddingLeft: 0 }}>
                                <a className="text-fixed-white op-8">Privacy</a>
                            </li>
                            <li>
                                <a href={GOOGLE_SHEET_URL} target='_blank' className="text-fixed-white op-8">Donate</a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-lg-6 text-lg-end text-left mb-3">
                        <span className="text-fixed-white op-7 fs-14"> © Copyright <span id="year">{getFullYear()}</span> <a
                            href="#" className="text-primary fs-15 fw-semibold">Bila Jia Church</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}