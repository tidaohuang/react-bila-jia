import './App.css';
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Banner from "./sections/Banner"
import SectionServiceTable from "./sections/SectionServiceTable"
import SectionPrayer from "./sections/SectionPrayer"
import SectionWelcome from "./sections/SectionWelcome"
import SectionSundayService from "./sections/SectionSundayService"
import SectionGroups from "./sections/SectionGroups"
import FooterMobile from './footer/FooterMobile';
import BannerMobile from './sections/BannerMobile';

function App() {
	return (
		<>
			<Header />
			<div className="landing-main px-0">
				<div className="landing-banner ad-search-container">
					<Banner />
					<BannerMobile/>
					<SectionWelcome />
					<SectionSundayService />
					<SectionServiceTable />
					<SectionGroups />
					<SectionPrayer />
				</div>
			</div>
			<Footer />
			<FooterMobile />
		</>
	)
}

export default App
