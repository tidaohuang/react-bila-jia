import { getFullYear } from "../helper/getFullYear";

export default function BannerMobile() {
    return (


        <section className="section" style={{ padding: '2.5rem' }} id="my-banner-mobile">
            <div className="container main-banner-container">
                <div className="row justify-content-center">
                    <div className="col-xxl-9">
                        <div className="">
                            <div className="text-center">
                                <p className="fs-24 op-7 text-fixed-white">
                                    {getFullYear()}年度目標
                                </p>
                                <p className="landing-banner-heading mb-3 text-fixed-white">
                                    愛主愛人活出愛 <br/>
                                    天天親近主<br/>
                                    見證主愛
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}