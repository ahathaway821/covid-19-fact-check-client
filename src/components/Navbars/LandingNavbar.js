import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function LandingNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [textColor, setTextColor] = React.useState("");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
        setTextColor("text-muted");
      } else if (
        document.documentElement.scrollTop < 499 ||
        document.body.scrollTop < 499
      ) {
        setNavbarColor("navbar-transparent");
        setTextColor("");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg">
        <Container>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              {/* <NavItem>
                <NavLink to="/evaluate" tag={Link}>
                  <p className={textColor}>
                    Evaluate Claims
                  </p>
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink to="/" tag={Link}>
                  <p className={textColor}>
                    Home
                  </p>
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink to="/data" tag={Link}>
                  <p className={textColor}>
                    Model
                  </p>
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink to="/about" tag={Link}>
                  <p className={textColor}>
                    About
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/model" tag={Link}>
                  <p className={textColor}>
                    Our Model
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" tag={Link}>
                  <p className={textColor}>
                    Contact Us
                  </p>
                </NavLink>
              </NavItem>
           </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default LandingNavbar;
