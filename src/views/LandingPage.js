import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import LandingNavbar from "components/Navbars/LandingNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

import Home from "components/Home.js";
import Model from "../components/Model";
import About from "../components/About";
import Contact from "../components/Contact";

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  
  return (
    <>
      <LandingNavbar></LandingNavbar>
      <div className="wrapper">
        <LandingPageHeader />
        <br />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Evaluate a COVID-19 Claim</h2>
              <p>Pick a manually fact-checked claim from the dropdown or type in a custom claim for our algorithm to evaluate </p>
              {/* <h5 className="description">
                <i>Either select a previously fact-checked claim or a new one</i>
              </h5> */}
              <Home/>
            </Col>
          </Row>
          <div className="separator separator-primary"></div>

          </Container>
       <About />
       <Model />
       <Contact />
      </div>
    </>
  );
}

export default LandingPage;
