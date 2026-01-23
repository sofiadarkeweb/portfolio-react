import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
	useEffect(() => {
		Aos.init({ duration: 1000, once: true });
	}, []);

	return (
		<section id="contact-section" className="contact">
			<div className="contact-content">
				<h2 className="contact-headline" data-aos="fade-up">
					<span className="contact-line">LET'S BUILD</span>
					<span className="contact-line">SOMETHING</span>
					<span className="contact-line">TOGETHER.</span>
				</h2>

				<div className="contact-links" data-aos="fade-up" data-aos-delay="200">
					<a
						className="contact-link"
						href="mailto:sofia.darke@hyperisland.se"
					>
						EMAIL
					</a>
					<a
						className="contact-link"
						href="https://www.linkedin.com/in/sofia-darke-1177932b"
						target="_blank"
						rel="noopener noreferrer"
					>
						LINKEDIN
					</a>
					<a
						className="contact-link"
						href="https://github.com/sofiadarkeweb"
						target="_blank"
						rel="noopener noreferrer"
					>
						GITHUB
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
