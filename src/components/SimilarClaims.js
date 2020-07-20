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

    viewSimilarClaim(claim) {
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
                    return (
                        <div key={item.claim}>
                            <Card>
                                <CardBody>
                                    <CardTitle>
                                        <h4>{item.claim}</h4>
                                    </CardTitle>
                                    <CardText>
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
                                    </CardText>
                                    <CardText>
                                        <b>Fact Check Date</b> : {item.date}
                                    </CardText>
                                    <CardText>
                                        <b>Fact Check URL</b> : <CardLink href={item.fact_check_url} target="_blank">{item.fact_check_url}</CardLink>
                                    </CardText>
                                    <CardText>
                                        <b>Fact Checked by</b> : {item.source}
                                    </CardText>
                                    <CardText>
                                        <b>Source of Claim</b> : {item.claim_source}
                                    </CardText>
                                    {item.label.includes('false') ? (
                                        <CardText>
                                            <b>Rating</b> : <Badge color="danger">{item.label.charAt(0).toUpperCase() + item.label.slice(1)}</Badge>
                                        </CardText>
                                    ) : (
                                        <CardText>
                                            <b>Rating</b> : <Badge color="success">{item.label.charAt(0).toUpperCase() + item.label.slice(1)}</Badge>
                                        </CardText>
                                    )}
                                     <CardText>
                                         <CardLink href="" onClick={() => this.viewSimilarClaim(item.claim)}>
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
                            <Spinner>
                                {/* <span className="sr-only">Loading...</span> */}
                            </Spinner>
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
