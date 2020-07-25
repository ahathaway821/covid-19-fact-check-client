import React from "react";
import { Container } from "reactstrap";

function LandingPageHeader() {
	let pageHeader = React.createRef();

	React.useEffect(() => {
		if (window.innerWidth > 991) {
			const updateScroll = () => {
				let windowScrollTop = window.pageYOffset / 3;
				pageHeader.current.style.transform =
					"translate3d(0," + windowScrollTop + "px,0)";
			};
			window.addEventListener("scroll", updateScroll);
			return function cleanup() {
				window.removeEventListener("scroll", updateScroll);
			};
		}
	});
	return (
		<>
			<div className="page-header page-header-small">
				<div
					className="page-header-image"
					style={{
						backgroundImage: "url(" + require("assets/img/covid/covidImage4.jpg") + ")",
					}}
					ref={pageHeader}
				></div>
				<div className="content-center">
					<Container>
						<h1 className="title">Help stop the spread of <br /> COVID-19 Misinformation</h1>
						<h5 className="description" style={{color: "white", fontWeight: "normal"}}>
							We have collected over 10,000 claims from fact-checking organizations such as Poynter and Politifact as well as common FAQ’s from World Health Organization (WHO) and Centers for Disease Control and Prevention (CDC).
						</h5>
					</Container>
				</div>
			</div>
		</>
	);
}

export default LandingPageHeader;
