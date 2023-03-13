import React from "react";
import rainbow from "../media/rainbow.svg";

const Contact = () => {
	return (
		<section id="contact-section" className="contact">
			<img
				className="rainbow"
				id="wiggle"
				src={rainbow}
				alt="rainbow-animation"
			/>

			<h2 className="contact-text">
				I'm always up for a chat, contact me on{" "}
				<a
					className="cta-link"
					href="https://www.linkedin.com/in/sofia-darke-1177932b"
				>
					LinkedIn
				</a>{" "}
				or {"->"}
				<a className="cta-link" href="mailto:sofia.darke@hyperisland.se">
					here
				</a>
			</h2>
		</section>
	);
};

export default Contact;
