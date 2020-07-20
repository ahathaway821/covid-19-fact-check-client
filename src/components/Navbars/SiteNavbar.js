import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function SiteNavbar() {
  return (
    <>
      <Navbar color="transparent" expand="lg">
        <Container className="justify-content-end">
            <Nav navbar >
              <NavItem>
                <NavLink to="/" tag={Link}>
                  <p className="text-muted">
                    Home
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" tag={Link}>
                  <p className="text-muted">
                    About
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/model" tag={Link}>
                  <p className="text-muted">
                    How it works
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" tag={Link}>
                  <p className="text-muted">
                    Contact Us
                  </p>
                </NavLink>
              </NavItem>
           </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default SiteNavbar;
