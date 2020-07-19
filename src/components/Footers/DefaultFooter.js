/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()} CovidFact All Rights Reserved.

            
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
