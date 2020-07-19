import React from "react";
import { Container } from "reactstrap";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import LandingNavbar from "components/Navbars/LandingNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

// import logo from "../img/covidImage.jpg";

class About extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

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
                            <h2 className="title">About CovidFact</h2>
                            <h5 className="text-justify text-muted">
                                Misinformation regarding COVID-19 can be dangerous for communities if it causes people to act against the best interests of the community at large, and can cause unnecessary transmission of the disease, fear rooted in misunderstanding, and potentially avoidable deaths.
                                We see in the literature that posting corrections, or identifying misinformation can be slow and have limited effectiveness given that the information has already spread. We believe that through this software, we can limit the amount of research required by an average individual to feel confident in a behavior or stance. 
                            </h5>
                            <h5 className="text-justify text-muted">
                                Through CovidFact, our aim is to combat the spread of misinformation regarding COVID-19. Specifically, we are using automated fact checking to help verify information related to COVID-19.
                            </h5>
                        </Col>
                        </Row>
                        <div className="separator separator-primary"></div>
                        <div>
                            <Container>
                                <Row>
                                <Col className="ml-auto mr-auto text-center" md="8">
                                    <h2 className="title">Who are we?</h2>
                                    <h5 className="text-justify text-muted">
                                    We are a team of UC Berkeley Master of Information and Data Science (MIDS) students. 
                                    Our goal is to use automated fact checking to help verify information related to COVID-19 by 
                                    making it easy to evaluate coronavirus claims against previously fact checked claims and published research.
                                    </h5>
                                </Col>
                                </Row>
                                <div className="separator separator-primary"></div>
                            </Container>
                        </div>
                        <div className="section section-team text-center">
                            <Container>
                                <h2 className="title">Here is our team</h2>
                                <div className="team">
                                    <Row>
                                        <Col md="3">
                                            <div className="team-player">
                                                <img
                                                    alt="..."
                                                    className="rounded-circle img-fluid img-raised"
                                                    src={require("assets/img/julie.jpg")}
                                                    >
                                                </img>
                                                <h4 className="title">Angel Chen</h4>
                                                <p className="category text-info">Software Engineer</p>
                                                <p className="text-muted">
                                                You can write here details about one of your team members.
                                                You can give more details about what they do. Feel free to
                                                add some{" "}
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    links
                                                </a>{" "}
                                                for people to be able to follow them outside the site.
                                                </p>
                                                <Button
                                                className="btn-icon btn-round"
                                                color="info"
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                                >
                                                <i className="fab fa-twitter"></i>
                                                </Button>
                                                <Button
                                                className="btn-icon btn-round"
                                                color="info"
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                                >
                                                <i className="fab fa-linkedin"></i>
                                                </Button>
                                            </div>
                                        </Col>
                                        <Col md="3">
                                            <div className="team-player">
                                                <img
                                                alt="..."
                                                className="rounded-circle img-fluid img-raised"
                                                src={require("assets/img/ryan.jpg")}
                                                ></img>
                                                <h4 className="title">Anup Jha</h4>
                                                <p className="category text-info">Software Engineer</p>
                                                <p className="text-muted">
                                                You can write here details about one of your team members.
                                                You can give more details about what they do. Feel free to
                                                add some{" "}
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    links
                                                </a>{" "}
                                                for people to be able to follow them outside the site.
                                                </p>
                                                <Button
                                                className="btn-icon btn-round"
                                                color="info"
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                                >
                                                <i className="fab fa-google-plus"></i>
                                                </Button>
                                                <Button
                                                className="btn-icon btn-round"
                                                color="info"
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                                >
                                                <i className="fab fa-youtube"></i>
                                                </Button>
                                                <Button
                                                className="btn-icon btn-round"
                                                color="info"
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                                >
                                                <i className="fab fa-twitter"></i>
                                                </Button>
                                            </div>
                                        </Col>
                                        <Col md="3">
                                            <div className="team-player">
                                                <img
                                                alt="..."
                                                className="rounded-circle img-fluid img-raised"
                                                src={require("assets/img/team/sartaj.jpg")}
                                                ></img>
                                                <h4 className="title">Sartaj Baveja</h4>
                                                <p className="category text-info">Software Engineer</p>
                                                <p className="text-muted text-justify">
                                                Sartaj is currently working as a Software Engineer at 
                                                the Lawrence Berkeley National Lab where he works
                                                on building tools for a high-performance national 
                                                network {" "}
                                                <a href="http://es.net/about" target="_blank">
                                                    ESnet
                                                </a>{" "}
                                                that supports scientific research.{" "}
                                                </p>
                                                <Button
                                                className="btn-icon btn-round"
                                                color="info"
                                                href="https://www.linkedin.com/in/sartajsinghbaveja/"
                                                >
                                                <i className="fab fa-linkedin"></i>
                                                </Button>
                                            </div>
                                        </Col>
                                        <Col md="3">
                                            <div className="team-player">
                                                <img
                                                alt="..."
                                                className="rounded-circle img-fluid img-raised"
                                                src={require("assets/img/team/xander.jpg")}
                                                ></img>
                                                <h4 className="title" style={{paddingTop: "35px"}}>Xander Hathaway</h4>
                                                <p className="category text-info">Software Engineer</p>
                                                <p className="text-muted text-justify">
                                                Xander works as a Solution Architect with Slalom Build where he designs and builds a variety of cloud-based custom software solutions.{" "}
                                                </p>
                                                <br /><br /><br /><br />
                                                <Button
                                                className="btn-icon btn-round"
                                                color="info"
                                                href="https://www.linkedin.com/in/xander-hathaway-88591688/"
                                                >
                                                <i className="fab fa-linkedin"></i>
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                        </div>
                    </Container>
                </div>
                <DefaultFooter />
            </div>
            </>
        );
    }
}

export default withRouter(About);
