import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Button, Nav, NavItem, NavLink, TabContent, TabPane, Card, CardHeader, CardBody } from "reactstrap";
import { addBackToTop } from 'vanilla-back-to-top'

import DefaultFooter from "components/DefaultFooter";
import Rating from "./Rating";
import ClaimSearch from "./ClaimSearch";
import SimilarClaims from "./SimilarClaims";
import ResearchPapers from "./ResearchPapers";
import SiteNavbar from "components/SiteNavbar";
import Feedback from './Feedback';
import { submitFeedback, feedbackTypes } from "../shared/submitFeedback";

class Predict extends React.Component {
	constructor(props) {
		super(props);
		const defaultClaim = "Handwashing is one of the best ways to protect yourself and your family from getting sick";
		this.state = {
			error: null,
			claim: ((props.location.state || {}).claim || defaultClaim),
			isValidatedClaim: ((props.location.state || {}).isValidatedClaim || false),
			claimIndexResult: ((props.location.state || {}).claimIndexResult || {}),
			pills: ((props.location.state || {}).pills || "1")
		};
		this.handleChangeValue = this.handleChangeValue.bind(this);
		this.handleSelectedValue = this.handleSelectedValue.bind(this);
		this.handlePredict = this.handlePredict.bind(this);
		this.claimInput = React.createRef();
		this.predictButton = React.createRef();
	}

	componentDidMount() {
		console.log("comp did mount predict");
		window.scrollTo(0, 0);
		addBackToTop({
			cornerOffset: 20
		});
	}

	setPills(pillNumber) {
		this.setState({pills: pillNumber})
	}

	handleChangeValue(val) {
		this.claimInput = val;
	}

	handleSelectedValue(val) {
		if (!val[0]) {
				return;
		}

		const selectedClaim = val[0].claim;
		submitFeedback(selectedClaim, true, feedbackTypes.userQuery);
		this.setState({claimIndexResult: val, claim: selectedClaim, isValidatedClaim: true, pills: "1" });
		this.props.history.push({
			pathname: '/evaluate',
			state: { claimIndexResult: val, claim: selectedClaim, isValidatedClaim: true, pills: "1" }
		})
	}

	handlePredict() {
		const newClaim = this.claimInput;
		submitFeedback(newClaim, false, feedbackTypes.userQuery);
		this.setState({ claim: newClaim, isValidatedClaim: false, pills: "1" });
		this.props.history.push({
			pathname: '/evaluate',
			state: { 
				claim: newClaim, 
				isValidatedClaim: false,
				pills: "1"
			}
		})
	}

	render() {
		return (
			<>
			<SiteNavbar></SiteNavbar>
				<div className="wrapper">
					<Container fluid>
						<Row className="justify-content-md-center">
							<Col md={{ size: 6, offset: 0 }}>
								<ClaimSearch 
									onSelectedValue={this.handleSelectedValue}                 
									onChangeValue={this.handleChangeValue}
									placeHolder={"Search for another COVID-19 claim"}
									onEnter={this.handlePredict}
								/>
							</Col>
							<Col md="1">
								<Button
									className="btn-round"
									color="info" 
									onClick={this.handlePredict}>Evaluate</Button>
							</Col>
						</Row>
					</Container>
					<br />
					<Rating 
						claim={this.state.claim} 
						isValidatedClaim={this.state.isValidatedClaim} 
						claimIndexResult={this.state.claimIndexResult} 
					/>
					<Container>
						<Feedback claim={this.state.claim} isValidatedClaim={this.state.isValidatedClaim}/>
					</Container>
					<Container>
						<Card>
							<CardHeader>
								<Nav
									className="justify-content-center"
									role="tablist"
									tabs
								>
									<NavItem>
										<NavLink
											className={this.state.pills === "1" ? "active" : ""}
											href="#pablo"
											onClick={(e) => {
												e.preventDefault();
												this.setPills("1");
											}}
										>
											<i className="now-ui-icons education_paper"></i>
												Relevant Research Papers
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											className={this.state.pills === "2" ? "active" : ""}
											href="#pablo"
											onClick={(e) => {
												e.preventDefault();
												this.setPills("2");
											}}
										>
											<i className="now-ui-icons business_bulb-63"></i>
											Similar Claims
										</NavLink>
									</NavItem>
								</Nav>
							</CardHeader>
							<CardBody>
								<TabContent  
									activeTab={"pills" + this.state.pills}
								>
									<TabPane tabId="pills1">
										<ResearchPapers claim={this.state.claim}/>
									</TabPane>
									<TabPane tabId="pills2">
										<SimilarClaims claim={this.state.claim} />
									</TabPane>
								</TabContent>
							</CardBody>
						</Card>
					</Container>
				</div>
			<DefaultFooter/>
			</>
		);
	}
}

export default withRouter(Predict);
