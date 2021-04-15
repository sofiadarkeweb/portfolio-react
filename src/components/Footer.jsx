import React from "react";

const Footer = () => {
	let thisYear = new Date().getFullYear();
	return (
		<footer className="footer">
			<p>By Sofia Darke {thisYear}</p>
		</footer>
	);
};

export default Footer;
