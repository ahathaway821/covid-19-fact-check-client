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

const scrollToSection = (event, sectionId) => {
	const anchor = document.querySelector(sectionId)
	anchor.scrollIntoView({ behavior: 'smooth' })
	event.preventDefault()
}

function LandingNavbar() {
	const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
	const [navbarColor2, setNavbarColor2] = React.useState("transparent");
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
				setNavbarColor2("light");
			} else if (
				document.documentElement.scrollTop < 499 ||
				document.body.scrollTop < 499
			) {
				setNavbarColor("navbar-transparent");
				setTextColor("text-light");
				setNavbarColor2("transparent");
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
			<Navbar color={navbarColor2} className={"fixed-top " + navbarColor} expand="lg" >
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
								<NavLink tag={Link} to="/" onClick={(e) => scrollToSection(e, "#home-section")}>
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
								<NavLink tag={Link} to="/about" onClick={(e) => scrollToSection(e, "#about-section")}>
									<p className={textColor}>
										About
									</p>
								</NavLink>
							</NavItem>
							<NavItem>
							<NavLink tag={Link} to="/model" onClick={(e) => scrollToSection(e, "#model-section")}>
									<p className={textColor}>
										How it works
									</p>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={Link} to="/contact" onClick={(e) => scrollToSection(e, "#contact-section")}>
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