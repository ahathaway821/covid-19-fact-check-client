import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function SiteNavbar() {
  return (
    <>
      <Navbar color="info" expand="lg">
      <Container>
            <Nav navbar >
              <NavItem>
                <NavLink to="/landing-page" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
           </Nav>

        </Container>
        <Container className="justify-content-end">
            <Nav navbar >
              <NavItem>
                <NavLink to="/evaluate" tag={Link}>
                  Evaluate Claims
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/data" tag={Link}>
                  Our Model
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" tag={Link}>
                  About Us
                </NavLink>
              </NavItem>
           </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default SiteNavbar;
