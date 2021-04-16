import React from "react";
import NavBar from "./NavBar";

const Hero = () => {
	return (
		<header className="hero" id="hero-section">
			<NavBar />
			<img
				className="smiley"
				id="rotate"
				src="/media/smiley.svg"
				alt="smiley-animation"
			/>
			<div className="hero-text">
				<h1 className="intro-text">
					Hej, I am Sofia Darke, a web developer from Stockholm currently
					studying at Hyper Island.
				</h1>
				<div className="ctas">
					<a className="cta-buttons" href="https://github.com/sofiadarkeweb">
						GitHub
					</a>
					<a
						className="cta-buttons"
						href="https://www.linkedin.com/in/sofia-darke-1177932b/"
					>
						LinkedIn
					</a>
				</div>
			</div>
		</header>
	);
};

export default Hero;
