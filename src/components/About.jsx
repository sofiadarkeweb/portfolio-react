import React from "react";

const About = () => {
	return (
		<section id="about-section" className="about">
			{/* <h2 className="section-titles">About</h2> */}
			<br />
			<article className="about-texts">
				<p className="about-text">
					My name is Sofia, I'm a curious developer with a background in visual
					design. Currently (as in spring 2022) I'm on my internship, the final
					module in my Hyper Island program. React and Svelte are two of my
					favorite frameworks so far. The focus in my studies are mainly
					frontend but I can see myself going into a more fullstack position
					eventually. Coding is amazing.
				</p>
				<br />
				<br />
				<p className="tech-text">
					<u>TECH-STACK</u>
					<br />
					React
					<br /> Next.js
					<br /> Svelte
					<br /> Express.js
					<br /> Node.js
					<br /> Redux
					<br /> Gatsby
					<br /> Contentful
					<br /> Figma
					<br /> Git
					<br /> Github
					<br /> MySQL
					<br /> MongoDB
					<br /> Vercel
					<br />
				</p>
			</article>
		</section>
	);
};

export default About;
