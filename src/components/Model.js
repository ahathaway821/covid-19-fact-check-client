import React from "react";
import { Container } from "reactstrap";
import { withRouter } from "react-router-dom";
import { Row, Col, Card, CardText, CardBody, CardTitle, CardLink } from "reactstrap";

class Model extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

    render() {
        return (
            <>
            <div className="wrapper" id="model-section">
                <div className="section section-about-us">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="8">
                                <h2 className="title">How does this work?</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card style={{ width: "22rem", height: "31rem" }}>
                                    <CardBody>
                                        <CardTitle tag="h3" className="text-center">Our Data</CardTitle>
                                    <CardText className="text-justify">
                                        We are combining data from multiple fact checking organizations such as Poynter, Politifact, 
                                        Empirical Studies of Conflict (ESOC) at Princeton, as well as reputable health sources with lists of 
                                        common FAQ’s such as the World Health Organization (WHO) and
                                        Centers for Disease Control and Prevention (CDC). Research paper data is retrieved from COVID Scholar which uses datasets like CORD-19 from Semantic Scholar.
                               
                                    </CardText>
                                    <br/>
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
                                    <CardLink href="https://www.semanticscholar.org/cord19" target="_blank">
                                        CORD-19
                                    </CardLink>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: "21rem", height: "31rem" }}>
                                    <CardBody>
                                    <CardTitle tag="h3" className="text-center">Our Approach</CardTitle>
                                    {/* <CardSubtitle className="mb-2 text-muted">
                                        Card subtitle
                                    </CardSubtitle> */}
                                    <CardText className="text-justify">
                                        We are using a BERT model
                                        to perform classification for our claims. The word embeddings from BERT are passed to
                                        a Convolutional Neural Network which forwards it to a
                                        Feed Forward Deep Neural Network that uses sigmoid activation to predict the binary thruthfulness output.
                                        For generating semantically similar claims, we are using Google Cloud Platform's 
                                        natural language API.
                                    </CardText>
                                    <br/><br/>
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
                                <Card style={{ width: "21rem", height: "31rem" }}>
                                    <CardBody>
                                    <CardTitle tag="h3" className="text-center">Our Infrastructure</CardTitle>
                                    {/* <CardSubtitle className="mb-2 text-muted">
                                        Card subtitle
                                    </CardSubtitle> */}
                                    <CardText className="text-justify">
                                        We are using Amazon Web Services extensively for this project. The frontend is a React application
                                        which is being served using AWS-Amplify. Our TensorFlow classification model is trained and deployed using SageMaker,
                                        and there are multiple Lambda API endpoints that fetch similar claims and relevant research papers. Our typeahead is driven by an index served with Elasticsearch.
                                        <br /><br />
                                        Take a look at the diagram below for the entire architecture 
                                    </CardText>
                                   </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{marginTop: "40px"}}>
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="8">
                                <h2 className="title">Cloud Architecture</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="10">
                                <img
                                    alt="..."
                                    className="img-fluid img-raised"
                                    src={require("assets/img/architecture.jpg")}
                                    >
                                </img>
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{marginTop: "40px"}}>
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="8">
                                <h2 className="title">Model Architecture</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="12">
                                <img
                                    alt="..."
                                    className="img-fluid img-raised"
                                    src={require("assets/img/model_architecture.jpg")}
                                    >
                                </img>
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{marginTop: "40px"}}>
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="8">
                                <h2 className="title">How well does this work?</h2>
                            </Col>
                        </Row>
                        <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <Card>
                                <CardBody>
                                <CardTitle tag="h3" className="text-center">Baseline</CardTitle>
                                {/* <CardSubtitle className="mb-2 text-muted">
                                    Card subtitle
                                </CardSubtitle> */}
                                <CardText className="text-justify">
                                    Our dataset is fairly imbalanced with the vast majority of all claims falling into the 'false' category. If our model predicted the most common class regardless of the input, we would see a baseline accuracy of 84%.
                                </CardText>
                                <CardText className="text-justify">
                                    Using a simple, bag of words Naive Bayes model, we reach a 90.4% accuracy in evaluating our test dataset. This is the functional baseline we were interested in improving upon.
                                </CardText>
                                <CardText className="text-justify">
                                    While fact-checking is not a new problem within NLP, the COVID-19 domain represents a unique set of challenges and thus does not have any state-of-the-art baselines for us to compare.
                                </CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                <CardTitle tag="h3" className="text-center">Results</CardTitle>
                                {/* <CardSubtitle className="mb-2 text-muted">
                                    Card subtitle
                                </CardSubtitle> */}
                                <CardText className="text-justify">
                                    Below is the confusion matrix from our final model evaluating our hold-out testing set. Our accuracy reached 96%, passing the Naive Bayes model by around 6%.
                                </CardText>
                                <img
                                    alt="..."
                                    className="img-fluid img-raised"
                                    style={{margin: "20px"}}
                                    src={require("assets/img/confusion_matrix.png")}
                                    >
                                </img>
                                <CardText className="text-justify">
                                    Because our dataset is so imbalanced, we weren't as interested in our accuracy score. We spent more time focusing on the F1 score, as we felt this better captured our attempts to evaluate truthful claims in particular. The Precision-Recall curve below shows the tradeoff we saw between true positive rate and the positive predictive value. 
                                </CardText>
                                <img
                                    alt="..."
                                    className="img-fluid img-raised"
                                    style={{margin: "20px"}}
                                    src={require("assets/img/pr_curve.png")}
                                    >
                                </img>
                                <CardText className="text-justify">
                                    While we felt our evaluation scores were relatively proficient within our testing set, we see that our training dataset is not always representative for the types of claims users are interested in searching on. We believe we have further work to do to better generalize our model findings to various user inputs.
                                </CardText>
                                <CardText className="text-justify">
                                    We additionally recognize that not every claim is true or false, and labels like 'partly-true' are much more applicable for many user claims. In further work we would like to be more specific in our claim label classification to include more of the gray-areas that are present in many of these virus claims.
                                </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        </Row>
                    </Container>

                </div>
            </div>
            </>
        );
    }
}

export default withRouter(Model);
