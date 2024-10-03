import Footer from "./footer/Footer"
import Header from "./header/Header"
import Banner from "./sections/Banner"
import Section1 from "./sections/Section1"
import Section2 from "./sections/Section2"
import Section4 from "./sections/Section4"
import SectionMain from "./sections/SectionMain"

function App() {
	return (
		<>
			<Header />

			<div className="main-content landing-main px-0">
				<div className="landing-banner ad-search-container">
					<Banner />



					<section className="section bg-white">
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


					<section className="section bg-light">
						<div className="container">
							<div className="heading-section mb-5">
								<p className="fs-12 fw-semibold mb-1">
									<span className="landing-section-heading text-gradient fs-5">Sunday Service</span>
								</p>
								<h3 className="fw-semibold mb-2">主日資訊</h3>
							</div>
							<div className="row gy-2">
								<div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
									<div className="card custom-card fs-6">
										<div className="card-header">
											<div className="card-title fs-5">主日崇拜程序 2024.9.29</div>
										</div>
										<div className="card-body">
											<ol className="list-group list-group-numbered">
												<li className="list-group-item d-sm-flex justify-content-between align-items-start">
													<div className="ms-2 me-auto text-muted">
														<div className="fw-medium fs-6 text-default">敬拜讚美</div>
														在你沒有難成的事 <br />
														我已得自由 <br />
														深深地敬拜 <br />
														你愛的大能
													</div>
													<span className="badge bg-primary-transparent fs-6">敬拜小組</span>
												</li>
												<li className="list-group-item d-sm-flex justify-content-between align-items-start">
													<div className="ms-2 me-auto text-muted">
														<div className="fw-medium fs-6 text-default">證道</div>
													</div>
													<span className="badge bg-secondary-transparent fs-6">林文欽牧師</span>
												</li>
												<li className="list-group-item d-sm-flex justify-content-between align-items-start">
													<div className="ms-2 me-auto text-muted">
														<div className="fw-medium fs-6 text-default">主餐</div>
													</div>
												</li>
												<li className="list-group-item d-sm-flex justify-content-between align-items-start">
													<div className="ms-2 me-auto text-muted">
														<div className="fw-medium fs-6 text-default">奉獻</div>
													</div>
													<span className="badge bg-success-transparent fs-6">司會人員</span>
												</li>
												<li className="list-group-item d-sm-flex justify-content-between align-items-start">
													<div className="ms-2 me-auto text-muted">
														<div className="fw-medium fs-6 text-default">報告</div>
													</div>
													<span className="badge bg-success-transparent fs-6">司會人員</span>
												</li>
												<li className="list-group-item d-sm-flex justify-content-between align-items-start">
													<div className="ms-2 me-auto text-muted">
														<div className="fw-medium fs-6 text-default">頌榮</div>
													</div>
													<span className="badge bg-success-transparent fs-6">司會人員</span>
												</li>
												<li className="list-group-item d-sm-flex justify-content-between align-items-start">
													<div className="ms-2 me-auto text-muted">
														<div className="fw-medium fs-6 text-default">祝禱</div>
													</div>
													<span className="badge bg-secondary-transparent fs-6">林文欽牧師</span>
												</li>
											</ol>
										</div>
									</div>
								</div>
								<div className="col-xl-9 col-lg-9 col-md-6 col-sm-12">
									<div className="card custom-card fs-6">
										<div className="card-header">
											<div className="card-title fs-5">本周主日信息</div>
										</div>
										<div className="card-body">
											<h5 className="fw-semibold mb-3">愛的大能</h5>
											<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
												<h6 className="card-title fw-medium">經文：哥林多前書13:1-13</h6>
												<h6 className="card-title fw-medium">林文欽牧師</h6>
											</div>
											<p className="card-text mt-2 fs-6">
												保羅看見哥林多教會有各樣的屬靈恩賜，說方​言、翻方言、講道、捐助貧窮人等等，信徒們熱​心事奉，但是教會卻是紛爭分裂，信徒的道德敗​壞，沒有基督的愛與生命，所以教導他們一切事​奉的動機是愛，否則所做的事奉是沒有益處的，​愛是堅忍的、仁慈的、永恆的，活出愛的生命，​看見愛的大能彰顯，榮耀主名。
											</p>

											<ol>
												<li>
													事奉動機是愛(V1-3)
													<p className="card-text mt-2 mb-4 fs-6">
														我們的話語裏沒有愛的動機，就是聲音的傳達​而已。<br />
														我們的信息分享及大有信心卻沒有愛，就沒有​影響力。<br />
														我們的捐助給窮苦人甚至犧牲自己而沒有愛，​是無益的。<br />
													</p>
												</li>
												<li>
													愛是堅忍永恆(V4-10)
													<p className="card-text mt-2 mb-4 fs-6">
														愛是堅忍的，仁慈的。<br />
														愛是不嫉妒，不自誇，不驕傲，不做鹵莽的​事，不自私，不輕易動怒，不記住別人的過錯，​不喜歡不義，只喜愛真理。<br />
														愛能包容一切，對一切有信心，對一切有盼​望，能忍受一切。<br />
														愛是永恆的。那完全的一到，有限的就會消失​了。
													</p>
												</li>
												<li>
													基督愛裏成長(V11-13)
													<p className="card-text mt-2 mb-4 fs-6">
														生命扎根在基督裏得著基督的愛與生命成長成​熟認識上帝的真道明白主的旨意與聖靈同行<br />
														信心、盼望、愛這三樣是永存的，而其中最重​要的是愛。
													</p>
												</li>
											</ol>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* <SectionMain /> */}
					<Section1 />
					{/* <Section2 /> */}
					<Section4 />

				</div>
			</div>



			<Footer />



		</>
	)
}

export default App
