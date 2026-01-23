import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { NavBar } from "./NavBar";

export const Hero = () => {
	useEffect(() => {
		Aos.init({ duration: 1500, once: true });
	}, []);

	return (
		<header className="hero" id="hero-section">
			<NavBar />
			<div className="hero-content">
				<h1 className="hero-title" data-aos="fade-up">
					<span className="hero-line" data-aos="fade-up" data-aos-delay="0">SOFIA DARKE</span>
					<span className="hero-line" data-aos="fade-up" data-aos-delay="100">FULLSTACK DEVELOPER</span>
					<span className="hero-line" data-aos="fade-up" data-aos-delay="200">STOCKHOLM — SE</span>
				</h1>

				<div className="hero-footer" data-aos="fade-up" data-aos-delay="400">
					<span className="hero-tagline">BUILDING DIGITAL EXPERIENCES</span>
					<span className="hero-scroll">SCROLL TO VIEW MORE ↓</span>
					<span className="hero-year">©{new Date().getFullYear()}</span>
				</div>
			</div>

			<div className="hero-links" data-aos="fade-up" data-aos-delay="300">
				<a
					className="hero-link"
					href="https://github.com/sofiadarkeweb"
					target="_blank"
					rel="noopener noreferrer"
				>
					GITHUB
				</a>
				<a
					className="hero-link"
					href="https://www.linkedin.com/in/sofia-darke-1177932b/"
					target="_blank"
					rel="noopener noreferrer"
				>
					LINKEDIN
				</a>
			</div>
		</header>
	);
};
