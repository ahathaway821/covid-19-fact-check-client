import React from "react";
import { Container } from "reactstrap";
import { withRouter } from "react-router-dom";
import { Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle, CardLink } from "reactstrap";
import LandingNavbar from "components/Navbars/LandingNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

// import logo from "../img/covidImage.jpg";

class Model extends React.Component {
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
                                <h2 className="title">How does this work?</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card style={{ width: "20rem" }}>
                                    <CardBody>
                                        <CardTitle tag="h3">Our Data</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted">
                                        Card subtitle
                                    </CardSubtitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </CardText>
                                    <CardLink href="#pablo" onClick={e => e.preventDefault()}>
                                        Card link
                                    </CardLink>
                                    <CardLink href="#pablo" onClick={e => e.preventDefault()}>
                                        Another link
                                    </CardLink>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: "20rem" }}>
                                    <CardBody>
                                    <CardTitle tag="h3">Our Infrastructure</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted">
                                        Card subtitle
                                    </CardSubtitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </CardText>
                                    <CardLink href="#pablo" onClick={e => e.preventDefault()}>
                                        Card link
                                    </CardLink>
                                    <CardLink href="#pablo" onClick={e => e.preventDefault()}>
                                        Another link
                                    </CardLink>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: "20rem" }}>
                                    <CardBody>
                                    <CardTitle tag="h3">Our Approach</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted">
                                        Card subtitle
                                    </CardSubtitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </CardText>
                                    <CardLink href="#pablo" onClick={e => e.preventDefault()}>
                                        Card link
                                    </CardLink>
                                    <CardLink href="#pablo" onClick={e => e.preventDefault()}>
                                        Another link
                                    </CardLink>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <h5 className="text-justify text-muted">
                                <br />
                                Architecture
                                <hr />
                                <img
                                    alt="..."
                                    className="img-fluid img-raised"
                                    src={require("assets/img/architecture.png")}
                                    >
                                </img>
                            </h5>
                        </Col>
                        </Row>
                    </Container>

                </div>
                <DefaultFooter />
            </div>
            </>
        );
    }
}

export default withRouter(Model);
