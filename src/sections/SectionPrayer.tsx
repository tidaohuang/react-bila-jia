import PrayerCard from "./prayer/PrayerCard"


export default function SectionPrayer() {
    return (
        <section className="section bg-light" id="prayer">
            <div className="container text-center">
                <p className="fs-12 fw-semibold mb-1">
                    <span className="landing-section-heading text-gradient fs-5">9/22-9/28</span>
                </p>
                <h3 className="fw-semibold mb-2">代禱事項</h3>
                <div className="swiper pagination-dynamic text-start mt-5">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="row">
                                <PrayerCard
                                    title="為以色列禱告"
                                    excerpt='以色列軍隊多日空襲黎巴嫩'
                                    children={'以色列軍隊多日空襲黎巴嫩，摧毀真主​黨280個基礎設施，已造成至少51人死亡、​223人受傷。以軍最高指揮官哈勒維向駐守​邊境士兵表示，以色列正為可能的地面進​攻做準備。為中東和平代禱。'}
                                />
                                <PrayerCard
                                    title="為世界國家禱告"
                                    excerpt="日本石川縣日前豪雨侵襲"
                                    children={'日本石川縣日前豪雨侵襲，已11人罹難​者，逾3成的地震臨時住宅(組合屋)位於洪​水高風險區，為政府災後重建順利代禱。'}
                                />
                                <PrayerCard
                                    title="為台灣禱告"
                                    excerpt="為台灣眾教會牧者和信徒們繼續委身為國​家禱告"
                                    children={'為台灣眾教會牧者和信徒們繼續委身為國​家禱告，使台灣能得著上帝的保護平安進​入命定，成為普世華人宣教航空母艦祝福​列國代禱。'}
                                />
                                <PrayerCard
                                    title="為新竹眾教會復興禱告"
                                    excerpt="(新竹247禱告城牆-藝術山頭) "
                                    children={'(新竹247禱告城牆-藝術山頭) 為新竹的藝術文化界能興起基督徒藝人創​作基督愛的文化藝術改善社會貪婪詐騙偶​像崇拜的風氣影響新竹藝術文化界代禱'}
                                />
                                <PrayerCard
                                    title="為宣教士禱告"
                                    excerpt="為緬甸央正義牧師宣教團隊"
                                    children={'為緬甸央正義牧師宣教團隊和家人出入平​安傳福音得人信主代禱。'}
                                />
                                <PrayerCard
                                    title="為肢體禱告"
                                    excerpt="為病痛中、懷孕中的會友禱告"
                                    children={
                                        <ol>
                                            <li className="mb-3">為鄧紹猷身體接受治療得著主醫治大能降​低副作用恢復健康代禱。</li>
                                            <li className="mb-3">為陳峰媚姊妹車禍昏迷得著主醫治大能​能甦醒恢復意識正常代禱。</li>
                                            <li className="mb-3">為陳逸欣懷孕感恩主保守看顧母腹中胎​兒健康成長生產順利代禱。</li>
                                            <li className="mb-3">為林大器傳道癌症治療得著信心經歷主​醫治恩典恢復健康代禱。</li>
                                        </ol>
                                    }
                                />
                                <PrayerCard
                                    isFullWidth={true}
                                    title="為教會及牧者禱告"
                                    excerpt="為教會2024年異象禱告"
                                    children={
                                        <ol>
                                            <li className="mb-3">為教會2024年異象愛主愛人活出愛，天​天親近主見證主愛，懇求聖靈充滿弟兄姊​妹領受主滿滿愛，付出愛的行動成為愛的​天使代禱。</li>
                                            <li className="mb-3">為教會2025年宣教異象目標行動，做在​最小的身上，就是做在主的身上，前往烏​干達服事南蘇丹難民為5個宣教機構禱告奉​獻代禱。</li>
                                            <li className="mb-3">為下半年成全聖徒裝備課程講師預備順​利，參加的學員渴慕追求基督生命活出基​督的愛與盼望，求聖靈充滿每位講師和學​員代禱。</li>
                                            <li className="mb-3">為FUN輕鬆傳福音活動，教會弟兄姊妹繼​續代禱及關心來參加的福音朋友，9月29日​手工皂福音活動，求主打開傳福音門代禱</li>
                                            <li className="mb-3">為10-12月份的兒童美術班順利能關懷服​事許多福音朋友代禱。</li>
                                            <li className="mb-3">為牧者和同工們禱告尋求教會2025年度​異象目標計畫，一起同心建造教會，為主傳福音作見證得著福音朋​友，門訓造就順利代禱。</li>
                                            <li className="mb-3">為10月12日教會秋季旅遊八德鶯歌生態知​性之旅平安順利代禱.</li>
                                            <li className="mb-3">為邱聖霖傳道夫妻在陽明交大新學期的​學生福音行動順利代禱。</li>
                                            <li className="mb-3">為聖誕浸禮主日有慕道友能接受真理教​導明白順利受浸歸主代禱.</li>
                                        </ol>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}