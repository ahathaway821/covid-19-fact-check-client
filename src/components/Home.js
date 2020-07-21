import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Image, Button, Container } from "reactstrap";
import ShowMoreText from 'react-show-more-text';

import ClaimSearch from "./ClaimSearch";
import PopularClaims from "./PopularClaims";

import { submitFeedback, feedbackTypes } from "../shared/submitFeedback";

import 'react-bootstrap-typeahead/css/Typeahead.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isValidatedClaim: false,
            isButtonDisabled: true,
        }
        this.handlePredict = this.handlePredict.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleSelectedValue = this.handleSelectedValue.bind(this);
        // this.handleEnter = this.handleEnter.bind(this);
        this.myRef = React.createRef();
    }

    handleChangeValue(val) {
        this.myRef = val;
    }

    handleSelectedValue(val) {
        const selectedClaim = val[0].claim;
        submitFeedback(selectedClaim, true, feedbackTypes.userQuery)

        this.setState({ value: selectedClaim, isValidatedClaim: true });
        this.props.history.push({
            pathname: '/evaluate',
            state: { claimIndexResult: val, claim: selectedClaim, isValidatedClaim: true }
        })
    }

    handlePredict() {
        if(this.myRef.current !== null) {
            submitFeedback(this.myRef, false, feedbackTypes.userQuery);

            this.props.history.push({
                pathname: '/evaluate',
                state: { 
                    claim: this.myRef,
                    isValidatedClaim: false,
                }
            })
        }
    }

    render() {
        return (
            <div>              
                {/* <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Image src={logo} width={350} height={350} rounded />
                    </Col>
                </Row> */}
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col md={{ size: 10, offset: 0 }}>
                            <ClaimSearch 
                                onSelectedValue={this.handleSelectedValue} 
                                onChangeValue={this.handleChangeValue}
                                onEnter={this.handlePredict}
                                placeHolder={"Search for a COVID-19 Claim"}
                            />
                        </Col>
                        <Col md="2">
                            <Button  
                                className="btn-round"
                                color="info" 
                                onClick={this.handlePredict}>Evaluate</Button>
                        </Col>
                    </Row>
                </Container>
                {/* <ClaimSearch 
                    onSelectedValue={this.handleSelectedValue} 
                    onChangeValue={this.handleChangeValue}
                    onEnter={this.handlePredict}
                    placeHolder={"Search for a COVID-19 Claim"}
                />
                <br />
                <div className="text-center">
                    <Button
                        color="info" 
                        onClick={this.handlePredict}>Evaluate</Button>
                </div> */}
                <br />
                <PopularClaims />
                <br />
                <div style={{ textAlign: 'left'}}>
                    <blockquote className="blockquote">
                        <i className="now-ui-icons ui-1_bell-53"></i>
                        <b>  Disclaimer</b>
                        <ShowMoreText
                            lines={3}
                            more='Show more'
                            less='Show less'
                            anchorClass=''
                            onClick={this.executeOnClick}
                            expanded={false}
                        >
                            The information contained herein should NOT be used as a substitute for the advice of an appropriately qualified and licensed physician or other health care provider. The tool is not a substitute for the care provided by licensed healthcare practitioners and consumers are urged to consult with their healthcare practitioner in all instances. Although we attempt to provide accurate and up-to-date information, no guarantee is made to that effect. This tool does not endorse any medications, diagnose patients, or recommend therapy. 
                        </ShowMoreText>
                    </blockquote>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);