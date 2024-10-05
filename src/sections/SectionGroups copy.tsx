import SvgComputer from "../icons/SvgComputer";
import GroupCard from "./group/GroupCard";


export default function SectionGroups() {
    return (
        <section className="section bg-white">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                    <div className="flex-fill">
                        <h3 className="fw-semibold mb-0">教會小組介紹</h3>
                        <p className="text-muted mb-0 fs-6">邀請您參加小組，建立肢體關係</p>
                    </div>
                </div>
                <div className="row text-start">
                    <div className="col-12 col-md-4 col-xl-2">
                        <GroupCard
                            title='喜樂小組'
                            color="primary"
                            svg={<SvgComputer />}
                            target="弟兄"
                            time='每週三上午10:00'
                        />
                    </div>
                    <div className="col-12 col-md-4 col-xl-2">
                        <div className="card custom-card">
                            <div className="card-body rounded">
                                <div className="main-card-icon secondary mb-3">
                                    <div
                                        className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                                        <div className="avatar avatar-sm svg-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                                                viewBox="0 0 24 24">
                                                <path fill="#fff"
                                                    d="M13.5,11h2c0.3,0,0.5-0.2,0.5-0.5S15.8,10,15.5,10h-2c-0.3,0-0.5,0.2-0.5,0.5S13.2,11,13.5,11z M21.5,21H20V2.5c0,0,0,0,0,0C20,2.2,19.8,2,19.5,2h-15c0,0,0,0,0,0C4.2,2,4,2.2,4,2.5V21H2.5C2.2,21,2,21.2,2,21.5S2.2,22,2.5,22h2h10h0h5c0,0,0,0,0,0h2c0.3,0,0.5-0.2,0.5-0.5S21.8,21,21.5,21z M14,21h-4v-6h4V21z M19,21h-4v-6.5c0,0,0,0,0,0c0-0.3-0.2-0.5-0.5-0.5h-5c0,0,0,0,0,0C9.2,14,9,14.2,9,14.5V21H5V3h14V21z M13.5,7h2C15.8,7,16,6.8,16,6.5S15.8,6,15.5,6h-2C13.2,6,13,6.2,13,6.5S13.2,7,13.5,7z M8.5,11h2c0.3,0,0.5-0.2,0.5-0.5S10.8,10,10.5,10h-2C8.2,10,8,10.2,8,10.5S8.2,11,8.5,11z M8.5,7h2C10.8,7,11,6.8,11,6.5S10.8,6,10.5,6h-2C8.2,6,8,6.2,8,6.5S8.2,7,8.5,7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <h5 className="fw-semibold mb-0">Real Estate</h5>
                                </a>
                                <p className="mb-2"><span className="text-default fw-semibold">370 Items</span> available</p>
                                <a className="text-primary fw-semibold" href="#">Explore items<i
                                    className="ri-arrow-right-s-line align-middle ms-1 d-inline-block rtl-rotate"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-xl-2">
                        <div className="card custom-card">
                            <div className="card-body rounded">
                                <div className="main-card-icon success mb-3">
                                    <div
                                        className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                                        <div className="avatar avatar-sm svg-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                                                viewBox="0 0 24 24">
                                                <path fill="#fff"
                                                    d="M12.0273438,2c-5.5153198-0.0075684-9.9924927,4.4573975-10,9.9726562c-0.0075684,5.5153198,4.4573364,9.9924316,9.9726562,10c5.5164795-0.0024414,9.9899902-4.4698486,10-9.9863281C22,6.4763794,17.5372925,2.0075073,12.0273438,2z M19.7203369,7.3937378c0.5223999,0.873291,0.9055786,1.8382568,1.1077271,2.8707886c-2.5644531-1.1419678-5.4962158-1.1601562-8.0891113-0.0310059c-1.0733032-0.6255493-1.9924927-1.4520264-2.7106323-2.4307251C12.9094238,5.8284302,16.6688232,5.6482544,19.7203369,7.3937378z M12,3c2.5098267,0.0009155,4.7774658,1.0311279,6.4098511,2.6888428c-2.9771118-1.0254517-6.2954712-0.5690918-8.9274292,1.2686768C8.9244995,5.984314,8.5501099,4.9064941,8.3884277,3.7670288C9.4939575,3.2786255,10.7139282,3.0019531,12,3z M5.1325073,6.2125244c0.6550293-0.7798462,1.4425659-1.4415283,2.3244629-1.9621582c0.5299072,2.9873047,2.3894043,5.5726318,5.0749512,7.0166626c-0.0556641,1.444397-0.4543457,2.8141479-1.1296387,4.0280762c-3.7288818-1.1880493-6.2895508-4.6509399-6.2909546-8.5949097C5.1113281,6.5350342,5.1223145,6.3737183,5.1325073,6.2125244z M3.0273438,12c-0.0024414-1.5870361,0.4102783-3.0761719,1.130249-4.3712769c0.3629761,3.9086304,2.9852905,7.258606,6.7095947,8.5444336c-0.9956055,1.3901978-2.3933716,2.484375-4.0525513,3.133728C4.5292969,17.6807861,3.0319214,15.0185547,3.0273438,12z M12.0366821,20.972168c-0.0031738,0-0.0061646,0.0004883-0.0093384,0.0004883c-1.5032959,0.0023193-2.9181519-0.3693848-4.1643066-1.0200806c3.4238892-1.6411133,5.6628418-5.098938,5.692627-8.9564819v-0.0006104c0-0.0040283-0.0021362-0.0073853-0.0021973-0.0114136c0.9124756-0.3455811,1.8617554-0.5383301,2.8184814-0.578064c0.2655029,0.8537598,0.4077759,1.7414551,0.4054565,2.6369629C16.7880249,16.3646851,14.9569702,19.4077759,12.0366821,20.972168z M14.2400513,20.6833496c2.2203369-1.8760986,3.5465698-4.65802,3.5373535-7.6403809c0.0025024-0.8865356-0.1193848-1.7671509-0.354126-2.6196899c1.2271118,0.0922852,2.4342651,0.4334106,3.548584,1.024292C20.9828491,11.62677,20.9996338,11.8044434,21,11.9863281C21,16.178833,18.1245117,19.6912842,14.2400513,20.6833496z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <h5 className="fw-semibold mb-0">Sports</h5>
                                </a>
                                <p className="mb-2"><span className="text-default fw-semibold">370 Items</span> available</p>
                                <a className="text-primary fw-semibold" href="#">Explore items<i
                                    className="ri-arrow-right-s-line align-middle ms-1 d-inline-block rtl-rotate"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-xl-2">
                        <div className="card custom-card">
                            <div className="card-body rounded">
                                <div className="main-card-icon orange mb-3">
                                    <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                                        <div className="avatar avatar-sm svg-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                                                viewBox="0 0 24 24">
                                                <path fill="#fff"
                                                    d="M9,18c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C11,18.8954468,10.1045532,18,9,18z M9,21c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C10,20.5523071,9.5523071,21,9,21z M17,18c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C19,18.8954468,18.1045532,18,17,18z M17,21c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C18,20.5523071,17.5523071,21,17,21z M19.4985352,12.0502319l1.9848633-7.4213257c0.0111694-0.0419312,0.0167847-0.085083,0.0167847-0.128479C21.5002441,4.2241211,21.2763062,4.000061,21,4H5.9198608L5.4835205,2.371582C5.4249268,2.1530151,5.2268677,2.0009766,5.0005493,2.0009766H3.5048218C3.5031128,2.0009766,3.501709,2,3.5,2C3.223877,2,3,2.223877,3,2.5S3.223877,3,3.5,3v0.0009766L4.6162109,3l2.579834,9.6288452C7.2546387,12.8477783,7.453064,13,7.6796875,13H11h6.8603516H19c0.8284302,0,1.5,0.6715698,1.5,1.5S19.8284302,16,19,16H5c-0.276123,0-0.5,0.223877-0.5,0.5S4.723877,17,5,17h14c1.3807373,0,2.5-1.1192627,2.5-2.5C21.5,13.2900391,20.6403809,12.2813721,19.4985352,12.0502319z M18.4761963,12h-0.6158447H11H8.0634766L6.1878052,5h14.1608276L18.4761963,12z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <h5 className="fw-semibold mb-0">Shopping</h5>
                                </a>
                                <p className="mb-2"><span className="text-default fw-semibold">370 Items</span> available</p>
                                <a className="text-primary fw-semibold" href="#">Explore items<i
                                    className="ri-arrow-right-s-line align-middle ms-1 d-inline-block rtl-rotate"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-xl-2">
                        <div className="card custom-card">
                            <div className="card-body rounded">
                                <div className="main-card-icon info mb-3">
                                    <div className="avatar avatar-lg bg-info-transparent border border-info border-opacity-10">
                                        <div className="avatar avatar-sm svg-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                                                viewBox="0 0 24 24">
                                                <path fill="#fff"
                                                    d="M19.5,6H16V5c-0.0014038-1.1040039-0.8959961-1.9985962-2-2h-4C8.8959961,3.0014038,8.0014038,3.8959961,8,5v1H4.5C3.119812,6.0012817,2.0012817,7.119812,2,8.5v10c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5h15c1.380188-0.0012817,2.4987183-1.119812,2.5-2.5v-10C21.9987183,7.119812,20.880188,6.0012817,19.5,6z M9,5c0.0003662-0.552124,0.447876-0.9996338,1-1h4c0.552124,0.0003662,0.9996338,0.447876,1,1v1H9V5z M21,18.5c-0.0009155,0.828064-0.671936,1.4990845-1.5,1.5h-15c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5v-6.4726562l5.8417969,1.9472656C8.8928833,13.991333,8.9462891,13.999939,9,14h6c0.053772-0.000061,0.1071777-0.008667,0.1582642-0.0253906L21,12.0273438V18.5z M21,11.0059204c-0.0525513,0-0.1055908,0.0019531-0.1581421,0.0194702L14.9190063,13H9.0810547l-5.9228516-1.9746094C3.1056519,11.0078735,3.0525513,11.0059204,3,11.0059204V8.5C3.0009155,7.671936,3.671936,7.0009155,4.5,7h15c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5V11.0059204z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <h5 className="fw-semibold mb-0">Jobs</h5>
                                </a>
                                <p className="mb-2"><span className="text-default fw-semibold">120 Items</span> available</p>
                                <a className="text-primary fw-semibold" href="#">Explore items<i
                                    className="ri-arrow-right-s-line align-middle ms-1 d-inline-block rtl-rotate"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-xl-2">
                        <div className="card custom-card">
                            <div className="card-body rounded">
                                <div className="main-card-icon warning mb-3">
                                    <div
                                        className="avatar avatar-lg bg-warning-transparent border border-warning border-opacity-10">
                                        <div className="avatar avatar-sm svg-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                                                viewBox="0 0 24 24">
                                                <path fill="#fff"
                                                    d="M7.0009766,13c-0.8284302,0-1.5,0.6715698-1.5,1.5s0.6715698,1.5,1.5,1.5c0.828064-0.0009155,1.4991455-0.671936,1.5-1.5C8.5009766,13.6715698,7.8294067,13,7.0009766,13z M7.0009766,15c-0.276123,0-0.5-0.223877-0.5-0.5s0.223877-0.5,0.5-0.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5C7.5009766,14.776123,7.2771606,15,7.0009766,15z M13.5,14h-3c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h3c0.276123,0,0.5-0.223877,0.5-0.5S13.776123,14,13.5,14z M20.1950684,10.25177l-1.5505371-4.8230591C18.1824341,3.9794922,16.8345947,2.9967651,15.3135376,3H8.6865234C7.1654053,2.9967041,5.8175659,3.9794312,5.3554688,5.4286499L3.8049316,10.25177C2.7443848,10.7144775,2.0013428,11.7692261,2,13v3c0.0016479,1.4848633,1.083252,2.7087402,2.5,2.9490967V20.5c0,0.0001831,0,0.0003662,0,0.0005493C4.5001831,20.7765503,4.723999,21.0001831,5,21c0.0001831,0,0.0003662,0,0.0006104,0C5.2765503,20.9998169,5.5001831,20.776001,5.5,20.5V19h13v1.5c0,0.0001831,0,0.0003662,0,0.0005493C18.5001831,20.7765503,18.723999,21.0001831,19,21c0.0001831,0,0.0003662,0,0.0006104,0c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5v-1.5509033C20.916748,18.7087402,21.9983521,17.4848633,22,16v-3C21.9986572,11.7692261,21.2556152,10.7144775,20.1950684,10.25177z M6.3066406,5.7353516C6.6368408,4.6999512,7.5997314,3.9978638,8.6864624,4h6.6270142c1.086792-0.0021973,2.0496826,0.6999512,2.3798828,1.7353516L19.0644531,10H19H5H4.9355469L6.3066406,5.7353516z M21,16c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H5c-1.1040039-0.0014038-1.9985962-0.8959961-2-2v-3c0.0014038-1.1040039,0.8959961-1.9985962,2-2h14c1.1040039,0.0014038,1.9985962,0.8959961,2,2V16z M17.0009766,13c-0.8284302,0-1.5,0.6715698-1.5,1.5s0.6715698,1.5,1.5,1.5c0.828064-0.0009155,1.4991455-0.671936,1.5-1.5C18.5009766,13.6715698,17.8294067,13,17.0009766,13z M17.0009766,15c-0.276123,0-0.5-0.223877-0.5-0.5s0.223877-0.5,0.5-0.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5C17.5009766,14.776123,17.2771606,15,17.0009766,15z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <h5 className="fw-semibold mb-0">Vehicles</h5>
                                </a>
                                <p className="mb-2"><span className="text-default fw-semibold">370 Items</span> available</p>
                                <a className="text-primary fw-semibold" href="#">Explore items<i
                                    className="ri-arrow-right-s-line align-middle ms-1 d-inline-block rtl-rotate"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}