import Footer from "./footer/Footer"
import Header from "./header/Header"
import Banner from "./sections/Banner"
import SectionServiceTable from "./sections/SectionServiceTable"
import SectionPrayer from "./sections/SectionPrayer"
import SectionWelcome from "./sections/SectionWelcome"
import SectionSundayService from "./sections/SectionSundayService"

function App() {
	return (
		<>
			<Header />

			<div className="main-content landing-main px-0">
				<div className="landing-banner ad-search-container">
					<Banner />
					<SectionWelcome />
					<SectionSundayService />
					<SectionServiceTable />
					<SectionPrayer />
					{/* <SectionMain /> */}
					{/* <Section2 /> */}
				</div>
			</div>
			<Footer />
		</>
	)
}

export default App
