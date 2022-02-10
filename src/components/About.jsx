import React from "react";

const About = () => {
	return (
		<section id="about-section" className="about">
			{/* <h2 className="section-titles">About</h2> */}
			<br />
			<article className="about-texts">
				<p className="about-text">
					I'm a curious developer with a long background in visual design.
					Currently (as in spring 2022) I'm on my internship, the final module
					on my Hyper Island journey as a developer. The focus in my studies are
					mainly frontend but I can see myself going into a more fullstack
					position eventually. I love learning new things, coding is amazing.
				</p>

				<div className="tech-text">
					<u>TECH-STACK</u>
					<br />
					<br />
					React | Next.js | Svelte | Express.js | Node.js | Express | Redux |
					Gatsby | Contentful | Figma | Git | Github | MySQL | MongoDB | Vercel
					| GraphQL
					<br />
				</div>
			</article>
		</section>
	);
};

export default About;
