import React from "react";
import { Container } from "reactstrap";

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
