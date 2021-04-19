import React from "react";

const About = () => {
	return (
		<section id="about-section" className="about">
			<h2 className="section-titles">About</h2>
			<br />
			<article className="about-texts">
				<p className="about-text">
					My name is Sofia, I'm a curious frontend developer with a background
					as a visual designer. Right now I'm on the lookout for an internship
					far the fall 2021. React is one of my favourite framworks so far. The
					focus in my studies are mainly frontend but I can see myself going
					into a more fullstack position eventually. Coding is amazing.
				</p>
				<br />
				<br />
				<p className="tech-text">
					<u>TECH-STACK</u>
					<br />
					React
					<br /> Express.js
					<br /> Node.js
					<br /> Gatsby
					<br /> Figma
					<br /> Git
					<br /> Github
					<br /> SASS
					<br /> MySQL
					<br /> Netlify
					<br />
				</p>
				<p className="tech-text">
					<u>And learning...</u>
					<br />
					Typescript
					<br /> Tailwind
					<br /> Vue
					<br /> Headless CMS
					<br /> And so on... <br />
				</p>
			</article>
		</section>
	);
};

export default About;
