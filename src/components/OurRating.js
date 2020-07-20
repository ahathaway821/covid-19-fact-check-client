import React from "react";
import axios from 'axios';
import { Card, CardTitle, CardBody, CardText, Spinner } from "reactstrap";
import ReactSpeedometer from "react-d3-speedometer"

const modelVersions = {
    'bert-cnn': 'bert-cnn',
    'bert-cnn-with-summarizer': 'bert-cnn-summ'
}

class OurRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            score: 0
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
        this.setState({isLoaded: false, error: null})
        axios.get(`https://eqx0uj4n69.execute-api.us-west-2.amazonaws.com/dev/${modelVersions["bert-cnn-with-summarizer"]}?claim=${this.props.claim}`)
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
    }

    componentDidMount() {
        this.getPredictionRating(this.props.claim)
    }

    render() {
        if (this.state.isLoaded === true) {
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
                        {/* <CardTitle><h3>Rating ({progressBarPercentage}% {ratingLabel})</h3></CardTitle> */}
                        <CardTitle><h3>Rating</h3></CardTitle>
                        <CardText><i>This rating was predicted by <b style={{fontWeight: "bold"}}>our algorithm</b> ({Math.round(progressBarPercentage)}% {ratingLabel})</i></CardText>
                        <center>
                            <ReactSpeedometer
                                height={250}
                                minValue={0}
                                maxValue={100}
                                needleHeightRatio={0.6}
                                value={value}
                                customSegmentStops={[0, 30, 70, 100]}
                                segmentColors={["#dc3545", "#ffc107", "#28a745"]}
                                currentValueText="COVIDFact Rating"
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
