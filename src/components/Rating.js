import React from "react";
import { Row, Col, Card, CardHeader, CardSubtitle, CardTitle, CardBody, Container, CardText } from "reactstrap";
import { withRouter } from "react-router-dom";
import OurRating from './OurRating';
import ReactSpeedometer from "react-d3-speedometer"

class Rating extends React.Component {
    render() {
        // If claim is pre-checked or not
        if (this.props.isValidatedClaim === true) {
            console.log("this.props", this.props.claimIndexResult);
            const { claim_source, date, explanation, label, source, source_label, fact_check_url } = this.props.claimIndexResult[0];

            let value;
            if (label === "true") {
                value = 90;
            } else {
                value = 10;
            }

            return (
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ height: '20rem' }}>
                                <CardBody>
                                    <CardTitle><h3>Claim</h3></CardTitle>
                                    <CardText><h5>{this.props.claim}</h5></CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ height: '20rem' }}>
                                <CardBody>
                                    <CardTitle><h3>Rating</h3></CardTitle>
                                    <CardText><i>This claim was fact-checked by {source}</i></CardText> {/* TODO - conditionally show source */}
                                    <center>
                                        <ReactSpeedometer
                                            height={250}
                                            minValue={0}
                                            maxValue={100}
                                            needleHeightRatio={0.6}
                                            value={value}
                                            customSegmentStops={[0, 25, 75, 100]}
                                            segmentColors={["#dc3545", "#ffc107", "#28a745"]}
                                            currentValueText="Rating"
                                            customSegmentLabels={[
                                            {
                                                text: "False",
                                                position: "OUTSIDE",
                                                color: "#000000",
                                            },
                                            {
                                                text: "Not enough evidence",
                                                position: "OUTSIDE",
                                                color: "#000000",
                                            },
                                            {
                                                text: "True",
                                                position: "OUTSIDE",
                                                color: "#000000",
                                            },
                                            ]}
                                            ringWidth={25}
                                            needleTransitionDuration={3333}
                                            needleTransition="easeElastic"
                                            needleColor={"#a7ff83"}
                                            textColor={"#000000"}
                                            labelFontSize={"13"}
                                        />
                                    </center>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <CardTitle>
                                        <h3>More Details</h3>
                                    </CardTitle>
                                    <CardText>
                                        <b>Explanation: </b>
                                        <br />
                                        {explanation ? explanation : "-"}
                                    </CardText>
                                    <CardText>
                                        <b>Fact Check Date: </b>
                                        <br />
                                        {date !== "1970-01-01" ? date : "-"}
                                    </CardText>
                                    <CardText>
                                        <b>Fact Check URL: </b>
                                        <br />
                                        {fact_check_url ? <a href={fact_check_url}>{fact_check_url}</a> : "-"}
                                    </CardText>
                                    <CardText>
                                        <b>Fact Check Organization: </b>
                                        <br />
                                        {source ? <a href={source}>{source}</a> : "-"}
                                    </CardText>
                                    <CardText>
                                        <b>Source of Claim: </b>
                                        <br />
                                        {claim_source.trim() ? <a href={claim_source}>{claim_source}</a> : "-"}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row> 
                </Container>      
            );
        } else {
            return (
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ height: '20rem' }}>
                                <CardBody>
                                    <CardTitle><h3>Claim</h3></CardTitle>
                                    <CardText><h5>{this.props.claim}</h5></CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <OurRating claim={this.props.claim}/>
                        </Col>
                    </Row>         
                </Container>
            );
        }
    }
}

export default withRouter(Rating);
