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
		<Navbar color="dark" expand="lg" className="sticky-top">
			<Container className="justify-content-end">
				<Nav navbar>
					<NavItem>
						<NavLink to="/" tag={Link}>
							<p className="">
								Home
							</p>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/" tag={Link}>
							<p className="">
								About
							</p>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/" tag={Link}>
							<p className="">
								How it works
							</p>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/" tag={Link}>
							<p className="">
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