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
                                <Card style={{ width: "20rem", height: "30rem" }}>
                                    <CardBody>
                                        <CardTitle tag="h3" className="text-center">Our Data</CardTitle>
                                    {/* <CardSubtitle className="mb-2 text-muted">
                                        Card subtitle
                                    </CardSubtitle> */}
                                    <CardText className="text-justify">
                                        We are combining data from multiple fact checking organizations such as Poynter, Politifact, 
                                        Empirical Studies of Conflict (ESOC) at Princeton as well as websites that include lists of 
                                        common FAQ’s such as the World Health Organization (WHO) and
                                        Centers for Disease Control and Prevention (CDC). 
                                        <br /><br /><br /><br />
                                    </CardText>
                                    <CardLink href="https://www.poynter.org/ifcn-covid-19-misinformation/" target="_blank">
                                        Poynter
                                    </CardLink>
                                    <CardLink href="https://esoc.princeton.edu/publications/esoc-covid-19-disinformation-tracking-report" target="_blank">
                                        ESOC
                                    </CardLink>
                                    <CardLink href="https://www.who.int/csr/disease/coronavirus_infections/faq_dec12/en/" target="_blank">
                                        WHO
                                    </CardLink>
                                    <CardLink href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html" target="_blank">
                                        CDC
                                    </CardLink>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: "20rem", height: "30rem" }}>
                                    <CardBody>
                                    <CardTitle tag="h3" className="text-center">Our Approach</CardTitle>
                                    {/* <CardSubtitle className="mb-2 text-muted">
                                        Card subtitle
                                    </CardSubtitle> */}
                                    <CardText className="text-justify">
                                        We are using a BERT model
                                        to perform classification for our claims. The word embeddings from BERT are passed to
                                        a Convolutional Neural Network which forwards it to a
                                        Feed Forward Deep Neural Network that uses sigmoid activation to predict the output.
                                        For generating semantically similar claims, we are using Google Cloud Platform's 
                                        natural language API.
                                    </CardText>
                                    <CardLink href="https://github.com/google-research/bert" target="_blank">
                                        BERT
                                    </CardLink>
                                    <CardLink href="https://cloud.google.com/natural-language/docs" target="_blank">
                                        Natural Language API
                                    </CardLink>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: "20rem", height: "30rem" }}>
                                    <CardBody>
                                    <CardTitle tag="h3" className="text-center">Our Infrastructure</CardTitle>
                                    {/* <CardSubtitle className="mb-2 text-muted">
                                        Card subtitle
                                    </CardSubtitle> */}
                                    <CardText className="text-justify">
                                        We are using Amazon Web Services extensively for this project. The frontend is a react application
                                        which is being served using AWS-Amplify. There are multiple API endpoints setup using AWS Sagemaker that
                                        fetch similar claims, relevant research papers, run inference on our deployed models as well as serve the typeahead feature.
                                        <br /><br />
                                        Take a look at the diagram below for the entire architecture 
                                    </CardText>
                                   </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="8">
                                <h2 className="title">Architecture</h2>
                            </Col>
                        </Row>
                        <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <img
                                alt="..."
                                className="img-fluid img-raised"
                                src={require("assets/img/architecture.png")}
                                >
                            </img>
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
