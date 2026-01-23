import React from "react";

export const Footer = () => {
	const thisYear = new Date().getFullYear();
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-logo">SOFIA DARKE</div>
				<div className="footer-info">
					<span className="footer-location">STOCKHOLM</span>
					<span className="footer-copyright">©{thisYear} SOFIA DARKE</span>
				</div>
			</div>
		</footer>
	);
};
