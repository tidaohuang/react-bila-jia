

export default function SectionWelcome() {
    return (
        <section className="section bg-white" id="welcome">
            <div className="container">
                <div className="heading-section mb-5">
                    <p className="fs-12 fw-semibold mb-1">
                        <span className="landing-section-heading text-gradient fs-5">Welcome</span>
                    </p>
                    <h3 className="fw-semibold mb-2">聚會資訊 & 新朋友</h3>
                </div>
                <div className="row gy-2">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title fs-5">聚會時間表</div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead className="table-primary">
                                            <tr>
                                                <th scope="col" className="fs-6">名稱</th>
                                                <th scope="col" className="fs-6">連絡人</th>
                                                <th scope="col" className="fs-6">時間</th>
                                                <th scope="col" className="fs-6">地點</th>
                                                <th scope="col" className="fs-6">人數</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" className="fs-6">主日崇拜</th>
                                                <td className="fs-6">林牧師</td>
                                                <td className="fs-6">週日上午10:00~11:30</td>
                                                <td className="fs-6">教會大堂</td>
                                                <td className="fs-6">46</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="fs-6">兒童主日學</th>
                                                <td className="fs-6">徐欣蓉</td>
                                                <td className="fs-6">週日上午10:00~11:00</td>
                                                <td className="fs-6">兒主教室</td>
                                                <td className="fs-6">3</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="fs-6">青少年愛子團契</th>
                                                <td className="fs-6">林牧師</td>
                                                <td className="fs-6">週六晚上19:00~21:00</td>
                                                <td className="fs-6">多功能教室</td>
                                                <td className="fs-6">6</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="fs-6">晨禱</th>
                                                <td className="fs-6">林牧師</td>
                                                <td className="fs-6">週二~週五7:00~8:00</td>
                                                <td className="fs-6">多功能教室</td>
                                                <td className="fs-6">7</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="fs-6">週二禱告會</th>
                                                <td className="fs-6">林牧師</td>
                                                <td className="fs-6">週二晚上​19:30~20:30</td>
                                                <td className="fs-6">網路線上</td>
                                                <td className="fs-6">11</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="fs-6">深夜禱告會</th>
                                                <td className="fs-6">林牧師</td>
                                                <td className="fs-6">週五晚22:00~23:30</td>
                                                <td className="fs-6">網路線上</td>
                                                <td className="fs-6">6</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="card custom-card fs-6">
                            <div className="card-header">
                                <div className="card-title fs-5">歡迎新朋友</div>
                            </div>
                            <div className="card-body">
                                <ol>
                                    <li className="mb-3">
                                        歡迎第一次來參加主日崇拜新朋友請起立自我介紹我們歡迎您。
                                    </li>
                                    <li className="mb-3">
                                        教會10月12日週六舉辦秋季旅遊，景點有八德碑​塘生態園區，TINA美食有機蔬菜餐廳，鶯歌陶瓷博​物館，鶯歌老街，報名者請先點午餐的主食，超過​600元以上者要補差額，收費標準自行開車，兒童​150公分以下者100元/人，90公分以下者免費，身​高150公分以上者300元/人，搭乘遊覽車者每人車​資400元，鶯歌陶瓷博物館門票自費，館方有七項​免費優惠，要帶身分證，請填寫報名單註明餐點內​容，開始繳費請交給錦蓉姊妹，10月6日截止。
                                    </li>
                                    <li className="mb-3">
                                        今天主日下午2:00-4:00，舉行繽紛手工皂DIY活​動免費參加，歡迎邀請福音朋友參加。
                                    </li>
                                    <li className="mb-3">
                                        明年2月28日-3月1日的退修會司馬庫斯訂房開始​繳訂金，2人房一千元4人房二千元，請於10月1日前​繳費完畢，請交給碧岑老師。
                                    </li>
                                    <li className="mb-3">
                                        下週主日舉行領主餐及為10月份壽星慶生祝福及​愛宴歡迎參加。
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}