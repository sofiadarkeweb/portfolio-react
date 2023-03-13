import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import NavBar from "./NavBar";
import smiley from "../media/smiley.svg";
import sofia from "../media/sofia.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
	const [portrait, setPortrait] = useState(false);
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<header className="hero" id="hero-section">
			<NavBar />
			<img className="smiley" id="rotate" src={smiley} alt="smiley-animation" />
			<div className="hero-text">
				<h1 className="intro-text" data-aos="fade-up">
					Hej, I am{" "}
					<span
						className="text-hiding-portrait"
						onMouseEnter={() => setPortrait(true)}
						onMouseLeave={() => setPortrait(false)}
					>
						Sofia Darke
					</span>
					, a full-stack developer from Stockholm.
					{portrait && (
						<img className="portrait" alt="Sofia Darke" src={sofia}></img>
					)}
				</h1>

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
