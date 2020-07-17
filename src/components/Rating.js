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
                value = 95;
            } else {
                value = 5;
            }

            return (
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ height: '18rem' }}>
                                <CardBody>
                                    <CardTitle><h3>Claim</h3></CardTitle>
                                    <CardSubtitle><h5>{this.props.claim}</h5></CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ height: '18rem' }}>
            
                                <CardBody>
                                <CardTitle>
                                    <h3>Rating</h3>
                                </CardTitle>
                                    <CardText><i>This claim was fact-checked by {source}</i></CardText> {/* TODO - conditionally show source */}
                                    <center>
                                        <ReactSpeedometer
                                            height={150}
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
                    <br />

                    <Row>                
                        <Card>
                            <CardBody>
                            <CardTitle><h3>More Details</h3></CardTitle>

                            <CardSubtitle>Explanation</CardSubtitle>
                            <CardText>{explanation ? explanation : "-"}</CardText>

                                <CardSubtitle>
                                    Fact Check Date
                                </CardSubtitle>
                                <CardText>
                                    {date !== "1970-01-01" ? date : "-"}
                                </CardText>
                                <CardSubtitle>
                                    Fact Check URL
                                </CardSubtitle>
                                <CardText>
                                    {fact_check_url ? <a href={fact_check_url}>{fact_check_url}</a> : "-"}
                                </CardText>
                                <CardSubtitle>
                                    Source of Claim
                                </CardSubtitle>
                                <CardText>
                                    {claim_source.trim() ? <a href={claim_source}>{claim_source}</a> : "-"}
                                </CardText>
                            </CardBody>
                        </Card>
                    </Row> 
                </Container>      
            );
        } else {
            return (
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ height: '18rem' }}>
                                <CardBody>
                                    <CardTitle><h3>Claim</h3></CardTitle>
                                    <CardSubtitle>{this.props.claim}</CardSubtitle>
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
