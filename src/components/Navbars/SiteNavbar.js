import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

const textColor="text-muted";

function SiteNavbar() {
  return (
    <>
      <Navbar color="light" expand="lg" className="sticky-top">
        <Container className="justify-content-end">
            <Nav navbar >
              <NavItem>
                <NavLink to="/" tag={Link}>
                  <p className={textColor}>
                    Home
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  <p className={textColor}>
                    About
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  <p className={textColor}>
                    How it works
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  <p className={textColor}>
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
