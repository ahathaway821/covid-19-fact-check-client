import React from "react";
import { Row, Col, Card, CardTitle, CardBody, Container, CardText } from "reactstrap";
import { withRouter } from "react-router-dom";
import OurRating from './OurRating';
import ReactSpeedometer from "react-d3-speedometer"

class Rating extends React.Component {
    render() {
        // If claim is pre-checked or not
        if (this.props.isValidatedClaim === true) {
            console.log("this.props", this.props.claimIndexResult);
            const { claim_source, date, explanation, label, source, fact_check_url } = this.props.claimIndexResult[0];

            let value;
            if (label === "true") {
                value = 90;
            } else if (label === "false") {
                value = 10;
            } else if (label === "partly false") {
                value = 30;
            } else if (label === "partly true") {
                value = 70;
            } else {
                value = 50;
            }

            let claimSource = claim_source.trim();
            let factSource = source;
            let factSourceURL = false;
            let claimSourceURL = false;
            let regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
            
            if (claimSource !== "") {
                console.log("claimSource 2 ");
                if(regexp.test(claimSource)) 
                {
                    console.log("claimSource 3");
                    claimSourceURL = true;
                }
            } else {
                claimSource = '';
            }

            if (factSource !== "") {
                console.log("claimSource 2 ");
                if(regexp.test(factSource)) 
                {
                    console.log("claimSource 3");
                    factSourceURL = true;
                }
            } else {
                factSource = '';
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
                                    <CardText><i>This claim was fact-checked by <b style={{fontWeight: "bold"}}>{source}</b></i></CardText> {/* TODO - conditionally show source */}
                                    <center>
                                        <ReactSpeedometer
                                            height={250}
                                            minValue={0}
                                            maxValue={100}
                                            needleHeightRatio={0.6}
                                            value={value}
                                            customSegmentStops={[0, 20, 40, 60, 80, 100]}
                                            segmentColors={["#dc3545", "#f06767", "#ffc107", "#9bd25c", "#28a745"]}
                                            currentValueText="Rating"
                                            customSegmentLabels={[
                                            {
                                                text: "False",
                                                position: "OUTSIDE",
                                                color: "#000000",
                                            },
                                            {
                                                text: "",
                                                position: "OUTSIDE",
                                                color: "#000000",
                                            },
                                            {
                                                text: "Not enough evidence",
                                                position: "OUTSIDE",
                                                color: "#000000",
                                            },
                                            {
                                                text: "",
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
                                            needleTransitionDuration={1000}
                                            // needleTransition="easeElastic"
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
                                        {explanation.trim() !== "" ? (
                                            <div>
                                                <b>Explanation: </b>
                                                {explanation}
                                            </div>
                                        ): ""}
                                    </CardText>
                                    <CardText>
                                        {date !== "1970-01-01" ? (
                                            <div>
                                                <b>Fact Check Date: </b>
                                                {date}
                                            </div>
                                        ): ""}
                                    </CardText>
                                    <CardText>
                                        {fact_check_url ? (
                                            <div>
                                                <b>Fact Check URL: </b>
                                                <a href={fact_check_url}>{fact_check_url}</a>
                                            </div>
                                        ): ""}
                                    </CardText>
                                    <CardText>
                                        {factSource !== "" ? (
                                            <div>
                                                <b>Fact Check Organization: </b>
                                                {factSourceURL ? <a href={factSource}>{factSource}</a> : factSource}
                                            </div>
                                        ): ""}
                                    </CardText>
                                    <CardText>
                                        {claimSource !== "" ? (
                                            <div>
                                                <b>Source of Claim: </b>
                                                {claimSourceURL ? <a href={claimSource}>{claimSource}</a> : claimSource}
                                            </div>
                                        ): ""}
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
