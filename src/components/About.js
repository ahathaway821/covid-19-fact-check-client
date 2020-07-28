import React from "react";
import { Container } from "reactstrap";
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";

class About extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

    render() {
        return (
            <>
            <div className="wrapper" id="about-section">

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
                                                    src={require("assets/img/team/angel.jpg")}
                                                    >
                                                </img>
                                                <h4 className="title" style={{paddingTop: "30px"}}>Angel Chen</h4>
                                                <p className="category text-info">Software Engineer</p>
                                                <p className="text-muted text-justify" style={{height: "265px"}}>
                                                Angel works as a Software Engineer at Apple’s Cloud Services organization where she develops and maintains data ETL pipelines and analytics platform backed by Spark.
                                                {" "}
                                                </p>
                                                <Button
                                                className="btn-icon btn-round"
                                                color="info"
                                                href="http://linkedin.com/in/chenanqi/"
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
                                                src={require("assets/img/team/anup.png")}
                                                ></img>
                                                <h4 className="title">Anup Jha</h4>
                                                <p className="category text-info">Product Development Director </p>
                                                <p className="text-muted" style={{height: "240px"}}>
                                                Anup works as a Product Development Director at Oracle SaaS application group. His focus is on applications using in-memory and autonomous database for Hybrid analytical and transactional processing loads.{" "}
                                                </p>

                                                <Button
                                                className="btn-icon btn-round"
                                                color="info"
                                                href="www.linkedin.com/in/anup-jha"
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
                                                src={require("assets/img/team/sartaj.jpg")}
                                                ></img>
                                                <h4 className="title">Sartaj Baveja</h4>
                                                <p className="category text-info">Software Engineer</p>
                                                <p className="text-muted text-justify" style={{height: "265px"}}>
                                                Sartaj is currently working as a Software Engineer at 
                                                the Lawrence Berkeley National Lab where he works
                                                on building tools for a high-performance national 
                                                network {" "}
                                                <a href="http://es.net/about">
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
                                                <p className="category text-info" >Solution Architect</p>
                                                <p className="text-muted text-justify" style={{height: "265px"}}>
                                                Xander works as a Solution Architect with Slalom Build where he designs and builds a variety of cloud-based custom software solutions.{" "}
                                                </p>
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
            </div>
            </>
        );
    }
}

export default withRouter(About);
