import React from "react";
import { Container } from "reactstrap";
import { withRouter } from "react-router-dom";
import { Row, Col, InputGroup, InputGroupAddon, InputGroupText, Input, Button } from "reactstrap";
import LandingNavbar from "components/Navbars/LandingNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

// import logo from "../img/covidImage.jpg";

function Contact() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    return (
        <>
        <LandingNavbar></LandingNavbar>
        <div className="wrapper">
            <LandingPageHeader />
            <div className="section section-contact-us text-center">
                <Container>
                    <h2 className="title">Contact Us</h2>
                    <p className="description">Please let us know if you have any questions for us</p>
                    <Row>
                    <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                        <InputGroup
                        className={
                            "input-lg" + (firstFocus ? " input-group-focus" : "")
                        }
                        >
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="First Name..."
                            type="text"
                            onFocus={() => setFirstFocus(true)}
                            onBlur={() => setFirstFocus(false)}
                        ></Input>
                        </InputGroup>
                        <InputGroup
                        className={
                            "input-lg" + (lastFocus ? " input-group-focus" : "")
                        }
                        >
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85"></i>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Email..."
                            type="text"
                            onFocus={() => setLastFocus(true)}
                            onBlur={() => setLastFocus(false)}
                        ></Input>
                        </InputGroup>
                        <div className="textarea-container">
                        <Input
                            cols="80"
                            name="name"
                            placeholder="Type a message..."
                            rows="4"
                            type="textarea"
                        ></Input>
                        </div>
                        <div className="send-button">
                        <Button
                            block
                            className="btn-round"
                            color="info"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            size="lg"
                        >
                            Send Message
                        </Button>
                        </div>
                    </Col>
                    </Row>
                </Container>
            </div>
            <DefaultFooter />
        </div>
        </>
    );
}

export default withRouter(Contact);
