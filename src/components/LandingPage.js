import React from "react";
import {
	Container,
	Row,
	Col,
} from "reactstrap";

import LandingNavbar from "components/LandingNavbar.js";
import LandingPageHeader from "components/LandingPageHeader.js";
import DefaultFooter from "components/DefaultFooter.js";
import Home from "components/Home.js";

function LandingPage() {
	React.useEffect(() => {
		document.body.classList.add("landing-page");
		document.body.classList.add("sidebar-collapse");
		document.documentElement.classList.remove("nav-open");
		window.scrollTo(0, 0);
		document.body.scrollTop = 0;
		return function cleanup() {
			document.body.classList.remove("landing-page");
			document.body.classList.remove("sidebar-collapse");
		};
	}, []);
	
	return (
		<>
			<LandingNavbar></LandingNavbar>
			<div className="wrapper">
				<LandingPageHeader />
				<br />
				<Container>
					<Row>
						<Col className="ml-auto mr-auto text-center" md="8">
							<h2 className="title">Evaluate a COVID-19 Claim</h2>
							{/* <h5 className="description">
								<i>Either select a previously fact-checked claim or a new one</i>
							</h5> */}
							<Home/>
						</Col>
					</Row>
					<div className="separator separator-primary"></div>
					</Container>
			 <DefaultFooter />
			</div>
		</>
	);
}

export default LandingPage;
