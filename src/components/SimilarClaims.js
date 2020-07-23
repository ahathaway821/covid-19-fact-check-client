import React from "react";
import axios from 'axios';
import { Card, CardTitle, CardBody, CardText, Spinner, Badge, CardLink } from "reactstrap";
import { withRouter } from "react-router-dom";
import ShowMoreText from 'react-show-more-text';

import searchClaims from 'shared/searchClaims';

class SimilarClaims extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
            error: null
        };
    }

    componentDidMount() {
        this.getSimilarClaims(this.props.claim);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.claim !== this.props.claim) {
            this.getSimilarClaims(this.props.claim);
        }
    }

    viewSimilarClaim(claim, e) {
        e.preventDefault();
        // console.log("viewSimilarClaim claim ", claim);
        searchClaims(claim)
            .then(val => {
                console.log('result')
                if (!val || !val[0]) {
                    return;
                }
                console.log('past')
        
                const selectedClaim = val[0].claim;

                this.props.history.push({
                    pathname: '/evaluate',
                    state: { claimIndexResult: val, claim: selectedClaim, isValidatedClaim: true }
                })
                window.scrollTo(0, 0)
                window.location.reload();
            })
    }

    getSimilarClaims(claim) {
        if (!claim) return;

        this.setState({
            isLoaded: false,
            items: [],
            error: null
        });
        
        // eslint-disable-next-line no-useless-escape
        const s1 = claim.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        const cleanClaim = s1.replace(/\s{2,}/g," ");

        axios.get(`https://88rrgid4rl.execute-api.us-west-2.amazonaws.com/similar-claims?claim=${cleanClaim}`)
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                    console.log('Closest result: ' + result.data.similar_claims[0].cosine_dist)
                },
                (error) => {
                    console.log("error is ", error);
                    this.setState({
                        isLoaded: true,
                        error
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

    render() {
        let similarClaims;
        if (this.state.error !== null) {
            similarClaims = (
                <div>
                    <br/>
                    <p> Sorry, there was an error fetching the results. Please refresh the page to try again. </p>
                </div>
            )
        } else {
            if (this.state.isLoaded) {
                this.state.items.similar_claims.sort((a, b) => (a.cosine_dist > b.cosine_dist) ? 1 : -1)
                similarClaims = this.state.items.similar_claims.slice(1,).map((item, key) => {
                    let claimSource = item.claim_source.trim();
                    let factSource = item.source;
                    let factSourceURL = false;
                    let claimSourceURL = false;
                    let regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
                    
                    if (claimSource !== "") {
                        if(regexp.test(claimSource)) 
                        {
                            claimSourceURL = true;
                        }
                    } else {
                        claimSource = '';
                    }

                    if (factSource !== "") {
                        if(regexp.test(factSource)) 
                        {
                            factSourceURL = true;
                        }
                    } else {
                        factSource = '';
                    }

                    let ratingColor;
                    if (item.label === "false" || item.label === "partly false") {
                        ratingColor = "danger";
                    } else if (item.label === "true" || item.label === "partly true") {
                        ratingColor = "success";
                    } else {
                        ratingColor = "warning";
                    }

                    return (
                        <div key={item.claim}>
                            <Card>
                                <CardBody>
                                    <CardTitle>
                                        <h4>{item.claim}</h4>
                                    </CardTitle>
                                    <CardText>
                                        {item.explanation.trim() !== "" ? (
                                            <div>
                                                <b>Explanation: </b>
                                                <ShowMoreText
                                                    lines={3}
                                                    more='Show more'
                                                    less='Show less'
                                                    anchorClass=''
                                                    onClick={this.executeOnClick}
                                                    expanded={false}
                                                >
                                                    {item.explanation}
                                                </ShowMoreText>
                                            </div>
                                        ): ""}
                                    </CardText>
                                    <CardText>
                                        {item.date !== "1970-01-01" && item.date.trim() !== "" ? (
                                            <div>
                                                <b>Fact Check Date: </b> {item.date}
                                            </div>
                                        ): ""}
                                    </CardText>
                                    <CardText>
                                        {item.fact_check_url ? (
                                            <div>
                                                <b>Fact Check URL: </b>
                                                <a href={item.fact_check_url}>{item.fact_check_url}</a>
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
                                    {/* <CardText>
                                        <b>Fact Checked by</b> : {item.source}
                                    </CardText> */}
                                    <CardText>
                                        {claimSource !== "" ? (
                                            <div>
                                                <b>Source of Claim: </b>
                                                {claimSourceURL ? <a href={claimSource}>{claimSource}</a> : claimSource}
                                            </div>
                                        ): ""}
                                    </CardText>
                                    {/* <CardText>
                                        <b>Source of Claim</b> : {item.claim_source}
                                    </CardText> */}
                                    <CardText>
                                        <b>Rating</b> : <Badge color={ratingColor}>{item.label.charAt(0).toUpperCase() + item.label.slice(1)}</Badge>
                                    </CardText>
                                    {/* {item.label.includes('false') ? (
                                        <CardText>
                                            <b>Rating</b> : <Badge color="danger">{item.label.charAt(0).toUpperCase() + item.label.slice(1)}</Badge>
                                        </CardText>
                                    ) : (
                                        <CardText>
                                            <b>Rating</b> : <Badge color="success">{item.label.charAt(0).toUpperCase() + item.label.slice(1)}</Badge>
                                        </CardText>
                                    )} */}
                                     <CardText>
                                         <CardLink href="/evaluate" onClick={(e) => this.viewSimilarClaim(item.claim, e)}>
                                        Learn more
                                        </CardLink>
                                    </CardText>
                                    {/* <Card.Text>
                                        <i>Cosine Distance, Sentiment</i> : {item.cosine_dist}, {item.sentiments}
                                    </Card.Text> */}
                                </CardBody>
                            </Card>
                            <br />
                        </div>
                )})
            } else {
                similarClaims = (
                    <div>
                        <br />
                        <center>
                            <Spinner/>
                        </center>
                    </div>
                );
            }
        }

        return (
            <div>
                {similarClaims}
            </div>
        );
    }
}

export default withRouter(SimilarClaims);
