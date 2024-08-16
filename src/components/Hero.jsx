import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import NavBar from "./NavBar";
import smiley from "../media/smiley.svg";
import { useEffect } from "react";

const Hero = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<header className="hero" id="hero-section">
			<NavBar />
			<img className="smiley" id="rotate" src={smiley} alt="smiley-animation" />
			<div className="hero-text">
				<h2 className="intro-text" data-aos="fade-up">
					<div>sofia darke</div>
					<div>fullstack developer</div>
					<div>stockholm - SE</div>
				</h2>

				<div className="ctas">
					<a
						className="cta-buttons"
						href="https://github.com/sofiadarkeweb"
						target="blank"
					>
						GitHub
					</a>
					<a
						className="cta-buttons"
						href="https://www.linkedin.com/in/sofia-darke-1177932b/"
						target="blank"
					>
						LinkedIn
					</a>
				</div>
			</div>
		</header>
	);
};

export default Hero;
