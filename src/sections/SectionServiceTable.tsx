

export default function SectionServiceTable() {
    return (
        <section className="section bg-white" id="service-table">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                    <div className="flex-fill">
                        <h3 className="fw-semibold mb-0">主日服事表</h3>

                    </div>
                </div>
                <div className="row">
                    <div className="table-responsive">
                        <table className="table text-nowrap">
                            <thead className="table-primary">
                                <tr>
                                    <th scope="col" className="fs-6">周次</th>
                                    <th scope="col" className="fs-6">講員</th>
                                    <th scope="col" className="fs-6">詩歌主領</th>
                                    <th scope="col" className="fs-6">司會</th>
                                    <th scope="col" className="fs-6">招待&司獻</th>
                                    <th scope="col" className="fs-6">兒童主日學</th>
                                    <th scope="col" className="fs-6">點收奉獻</th>
                                    <th scope="col" className="fs-6">主餐服事</th>
                                    <th scope="col" className="fs-6">愛宴清潔</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className="fs-6">本周</th>
                                    <td className="fw-normal fs-6">林牧師</td>
                                    <td className="fs-6">楊中玉</td>
                                    <td className="fs-6">劉志慶</td>
                                    <td className="fs-6">春明 & 蕭雄</td>
                                    <td className="fs-6">小嵥 & 詩盈</td>
                                    <td className="fs-6">中玉 & 麗芬</td>
                                    <td className="fs-6">-</td>
                                    <td className="fs-6">-</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="fs-6">下周</th>
                                    <td className="fs-6">林牧師</td>
                                    <td className="fs-6">蕭麗芬</td>
                                    <td className="fs-6">張瑞文</td>
                                    <td className="fs-6">湛英 & 恩慶<br/>綺珮</td>
                                    <td className="fs-6">師母</td>
                                    <td className="fs-6">瑞文 & 湛英</td>
                                    <td className="fs-6">中玉 & 瑞文</td>
                                    <td className="fs-6">喜樂&基石</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

    )
}