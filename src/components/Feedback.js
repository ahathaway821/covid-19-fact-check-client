import React from "react";
import { 
	Card, 
	CardBody, 
	CardText, 
	Button, 
	Modal, 
	Form, 
	ModalBody, 
	ModalHeader, 
	ModalFooter, 
	FormGroup, 
	Input, 
	Label 
} from "reactstrap";

import { submitFeedback, feedbackTypes } from "../shared/submitFeedback";

class Feedback extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showYes: false,
			showNo: false,
			isLabelCorrect: false,
			isLoaded: false,
			error: null,
			showModal: false
		};
		this.handleShowModal = this.handleShowModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmitFeedback = this.handleSubmitFeedback.bind(this);
	}

	handleShowModal(isLabelCorrect) {
		this.setState({ showModal: true, isLabelCorrect: isLabelCorrect });
	}

	handleCloseModal() {
		this.setState({ showModal: false });
	}

	getLabel() {
		return this.state.isLabelCorrect ? 'Yes' : 'No';
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	  }


	handleSubmitFeedback() {
		this.setState({isLoaded: false, error: null});
		submitFeedback(
			this.props.claim, 
			this.props.isValidatedClaim, 
			feedbackTypes.userFeedback, 
			this.state.reasoning ?? '', 
			this.state.isLabelCorrect)
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
					});
					this.handleCloseModal();
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
        return (
            <>
            <Card>     
                <CardBody>
                    {/* <CardTitle><h3>Feedback</h3></CardTitle> */}
                    <CardText>{'Did you find this page to be helpful?'}{' '}
                    <Button color="info" size="sm" onClick={() => this.handleShowModal(true)}>Yes</Button>{' '}
                    <Button color="info" size="sm" onClick={() => this.handleShowModal(false)}>No</Button>
                    </CardText>
                </CardBody>
            </Card>
            <Modal isOpen={this.state.showModal} toggle={this.handleCloseModal}>
                <ModalHeader closeButton={true}>
                    Thanks for the feedback
                </ModalHeader>
                <ModalBody>
                    Please answer a couple of questions below to tell us more about what you thought of Covid Fact
                    <hr />
                    <Form>
                        <FormGroup controlId="formFeedback">
                            <Label><b>Claim</b></Label>
                            <p>
                                {this.props.claim}
                            </p>
                        </FormGroup>
                        <FormGroup controlId="formFeedback">
                            <Label><b>Was the site helpful?</b></Label>
                            <p>
                                {this.getLabel()}
                            </p>
                        </FormGroup>
                        <FormGroup controlId="formFeedback">
                            <Label><b>Reasoning</b></Label>
                            <Input as="textarea" rows="3" value={this.state.reasoning} onChange={this.handleChange}/>
                            <p className="text-muted" style={{fontSize: "1em"}}>
                                <i>This feedback is anonymous</i>
                            </p>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.handleCloseModal}>
                        Close
                    </Button>
                    <Button color="info" onClick={this.handleSubmitFeedback}>
                        Submit
                    </Button>
                </ModalFooter>
            </Modal>
        </>
        )

	}    
}

export default Feedback;
