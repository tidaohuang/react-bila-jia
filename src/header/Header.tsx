import { useState } from "react";
import { GOOGLE_SHEET_URL } from "../helper/constants";


export default function Header() {

    const [clicked, setClicked] = useState(false);

    const headerUrls: { url: string, name: string, openNewTab?: boolean }[] = [
        {
            name: '聚會時間',
            url: '#welcome'
        },
        {
            name: '主日資訊',
            url: '#sunday-service'
        },
        {
            name: '服事表',
            url: '#service-table'
        },
        {
            name: '小組資訊',
            url: '#groups'
        },
        {
            name: '代禱事項',
            url: '#prayer'
        },
        {
            name: '奉獻資訊',
            url: GOOGLE_SHEET_URL,
            openNewTab: true
        },
    ]

    return (
        <>
            <div className="landing-main-footer py-3 bg-white" id="my-header">
                <div className="container">
                    <div className="row">
                        {/* col-xl-6 col-lg-6 col-md-6 col-sm-12 */}
                        <div className="col-lg-3 col-sm-12">
                            <img src="assets/images/brand-logos/toggle-logo.svg" alt="logo"
                                style={{ height: '55px' }} />
                        </div>
                        <div className="col-lg-9 col-sm-12 text-lg-end text-center fs-5 mt-3">
                            <ul className="list-unstyled fw-normal landing-footer-list">
                                {headerUrls.map((obj) => {
                                    if (obj.openNewTab) {
                                        return (
                                            <li key={obj.name}>
                                                <a href={obj.url} target="_blank"
                                                    className="text-fixed-black">{obj.name}</a>
                                            </li>
                                        )
                                    }
                                    return (
                                        <li key={obj.name}>
                                            <a href={obj.url} className="text-fixed-black">{obj.name}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div >

            {/* header for mobile */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="my-header-mobile">
                <a className="navbar-brand" href="/">
                    <img src="assets/images/brand-logos/toggle-logo.svg" alt="logo"
                        style={{ height: '55px' }} />
                </a>
                <button className="navbar-toggler" type="button"
                    onClick={(_) => setClicked(!clicked)}
                >
                    <span className="pe-3">
                        <svg fill="#000000" width="30px" height="30px" viewBox="0 0 52 52" data-name="Layer 1"
                            id="Layer_1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50,12.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z" />
                            <path d="M50,28H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z" />
                            <path d="M50,43.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z" />
                        </svg>
                    </span>
                </button>
                <div className={`collapse navbar-collapse ${clicked ? 'show' : ''}`}>
                    <ul className="navbar-nav">
                        {headerUrls.map((obj) => {
                            if (obj.openNewTab) {
                                return (
                                    <li key={obj.name} className="nav-item fs-5 mb-1">
                                        <a href={obj.url} target="_blank"
                                            className="nav-link">{obj.name}</a>
                                    </li>
                                )
                            }
                            return (
                                <li key={obj.name} className="nav-item fs-5 mb-1">
                                    <a href={obj.url} className="nav-link">{obj.name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </>
    )
}