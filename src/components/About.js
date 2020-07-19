import React from "react";
import { Container } from "reactstrap";
import { withRouter } from "react-router-dom";
import { Row, Col } from "reactstrap";
import LandingNavbar from "components/Navbars/LandingNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

// import logo from "../img/covidImage.jpg";

class About extends React.Component {
    render() {
        return (
            <>
            <LandingNavbar></LandingNavbar>
            <div className="wrapper">
                <LandingPageHeader />
                <div className="section section-about-us">
                    <Container>
                        <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <h2 className="title">About Us</h2>
                            <p className="description text-justify">
                                Misinformation regarding COVID-19 can be dangerous for communities if it causes people to act against the best interests of the community at large, and can cause unnecessary transmission of the disease, fear rooted in misunderstanding, and potentially avoidable deaths.
                                We see in the literature that posting corrections, or identifying misinformation can be slow and have limited effectiveness given that the information has already spread. We believe that through this software, we can limit the amount of research required by an average individual to feel confident in a behavior or stance. 
                            </p>
                            <p className="description text-justify">
                                Through CovidFact, our aim is to combat the spread of misinformation regarding COVID-19. Specifically, we are using automated fact checking to help verify information related to COVID-19.
                            </p>
                        </Col>
                        </Row>
                        <div className="separator separator-primary"></div>
                    </Container>
                </div>
                <DefaultFooter />
            </div>
            </>
        );
    }
}

export default withRouter(About);
