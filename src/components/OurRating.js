import React from "react";
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardBody, CardText, Spinner } from "reactstrap";
import ReactSpeedometer from "react-d3-speedometer"

import getSimilarClaims from 'shared/getSimilarClaims';

const modelVersions = {
    'bert-cnn': 'bert-cnn',
    'bert-cnn-with-summarizer': 'bert-cnn-summ',
    'bert-cnn-similar': 'bert-cnn-similar'
}

const minCosineDistance = .5;

class OurRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            score: 0,
            isSimilarScoreLoaded: false,
            closestSimilarClaimScore: 0
        };

        this.threshold = .5;
    }

    getConfidenceLevel = (score, threshold) => {
        const truthfulPercentage = +(score * 100).toFixed(2);
        if (score > threshold) {
            return truthfulPercentage
        }
        else {
            return 100 - truthfulPercentage;
        }
    }

    getRatingLabel = (score, threshold) => {
        return score > threshold ? "True" : "False";
    }

    getProgressBarVariant = (score, threshold) => {
        return score > threshold ? "success" : "danger";
    }

    componentDidUpdate(prevProps) {
        if (prevProps.claim !== this.props.claim) {
            this.getPredictionRating(this.props.claim);
        }
    }

    getPredictionRating(claim) {
        this.setState({isLoaded: false, error: null, similarScoreLoaded: false, closestSimilarClaimScore: 0})
        axios.get(`https://eqx0uj4n69.execute-api.us-west-2.amazonaws.com/dev/${modelVersions["bert-cnn-similar"]}?claim=${this.props.claim}`)
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        score: result.data
                    });
                }
            )
            .catch(error => {
                console.log(error.response);
                this.setState({
                    isLoaded: true,
                    error
                });
            });
        
        getSimilarClaims(claim)
            .then(
                result => {
                    this.setState({
                        isSimilarScoreLoaded: true,
                        closestSimilarClaimScore: result.data.similar_claims[0].cosine_dist
                    })
                }
            )
    }

    componentDidMount() {
        this.getPredictionRating(this.props.claim)
    }

    render() {
        if (this.state.isLoaded === true && this.state.isSimilarScoreLoaded) {

            if (this.state.closestSimilarClaimScore > minCosineDistance) {
                return (
                    <Card style={{ height: '20rem' }} initiallyExpanded={false}>
                    <CardBody>
                        <CardHeader 
                            showExpandableButton={true}
                            actAsExpander={true}/>
                        <CardTitle><h3>Rating</h3></CardTitle>
                        <CardText>Our algorithm does not have enough relevant evidence to evaluate your claim at this time.</CardText>
                    </CardBody>
                </Card>)
            }

            let progressBarPercentage = this.getConfidenceLevel(this.state.score, this.threshold)
            const ratingLabel = this.getRatingLabel(this.state.score, this.threshold);

            let value;
            if(ratingLabel === "False") {
                value = 100 - progressBarPercentage
            } else {
                value = progressBarPercentage
            }
            return (
                <Card style={{ height: '20rem' }}>
                    <CardBody>
                        <CardTitle><h3>Rating</h3></CardTitle>
                        <CardText><i>This rating was predicted by <b style={{fontWeight: "bold"}}>our algorithm</b></i></CardText>
                        <center>
                            <ReactSpeedometer
                                height={250}
                                minValue={0}
                                maxValue={100}
                                needleHeightRatio={0.6}
                                value={value}
                                customSegmentStops={[0, 15, 30, 70, 85, 100]}
                                segmentColors={["#dc3545", "#f06767", "#ffc107", "#9bd25c", "#28a745"]}
                                currentValueText="COVIDFact Rating"
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
            );
        }

        return  (
            <div>
                <br />
                <center>
                    <Spinner animation="border" variant="secondary"/>
                </center>
            </div>
        );
    }    
}


export default OurRating;
