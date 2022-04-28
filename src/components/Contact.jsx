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

			<h2 className="contact-text">If you wanna talk, send me an email!</h2>

			<a className="cta-buttons" href="mailto:sofia.darke@hyperisland.se">
				Say Hi!
			</a>
		</section>
	);
};

export default Contact;
