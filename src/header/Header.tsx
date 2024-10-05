import { GOOGLE_SHEET_URL } from "../helper/constants";


export default function Header() {
    return (
        <div className="landing-main-footer py-3" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div className="row">
                    {/* col-xl-6 col-lg-6 col-md-6 col-sm-12 */}
                    <div className="col-lg-3 col-sm-12 text-lg-start text-center">
                        <div className="header-logo mt-2">
                            <img src="assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                        </div>
                    </div>
                    <div className="col-lg-9 col-sm-12 text-lg-end text-center fs-5 mt-3">
                        <ul className="list-unstyled fw-normal landing-footer-list">
                            <li>
                                <a href="#welcome" className="text-fixed-black">聚會時間</a>
                            </li>
                            <li>
                                <a href="#sunday-service" className="text-fixed-black">主日信息</a>
                            </li>
                            <li>
                                <a href="#service-table" className="text-fixed-black">服事表</a>
                            </li>
                            <li>
                                <a href="#groups" className="text-fixed-black">小組資訊</a>
                            </li>                            
                            <li>
                                <a href="#prayer" className="text-fixed-black">代禱事項</a>
                            </li>
                            <li>
                                <a href={GOOGLE_SHEET_URL} className="text-fixed-black" target="_blank">奉獻資訊</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}