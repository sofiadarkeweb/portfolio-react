import React from "react";

const Contact = () => {
	return (
		<section id="contact-section" className="contact">
			<img
				className="rainbow"
				id="wiggle"
				src="/media/rainbow.svg"
				alt="rainbow-animation"
			/>
			<h2 className="section-titles">Contact</h2>
			<h2 className="contact-text">
				I am open for work, send me an email and let's talk more
			</h2>
			<br />
			<br />
			<a className="cta-buttons" href="mailto:sofia.darke@hyperisland.se">
				Say Hi!
			</a>
		</section>
	);
};

export default Contact;
