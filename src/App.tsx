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
import { useEffect, useState } from 'react';

function App() {

	const [scrollToTopButton, showScrollToTopButton] = useState(false);


	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY !== 0) {
				showScrollToTopButton(true);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollToTopButton]);


	return (
		<>
			<Header />
			<div className="landing-main px-0">
				<div className="landing-banner ad-search-container">
					<Banner />
					<BannerMobile />
					<SectionWelcome />
					<SectionSundayService />
					<SectionServiceTable />
					<SectionGroups />
					<SectionPrayer />
				</div>
			</div>
			{scrollToTopButton &&
				<div className="scrollToTop" style={{ display: 'flex', cursor: 'pointer' }}
					onClick={(_) => {
						window.scrollTo(0, 0);
						showScrollToTopButton(false);
					}}
				>
					<span className="arrow"><i className="fs-20">▲</i></span>
				</div>
			}
			<Footer />
			<FooterMobile />
		</>
	)
}

export default App
