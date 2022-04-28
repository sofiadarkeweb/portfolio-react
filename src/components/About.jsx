import React from "react";

const About = () => {
	return (
		<section id="about-section" className="about">
			{/* <h2 className="section-titles">About</h2> */}
			<br />
			<article className="about-texts">
				<p className="about-text">
					I'm a curious developer with a long background in visual design. I
					recently finished my education in frontend development at Hyper Island
					and now I'm on my first job as junior fullstack developer at{" "}
					<a
						href="https://www.karma.life/"
						target="blank"
						className="karma-link"
						style={{
							cursor: "pointer",
							textDecoration: "none",
							// zIndex: "1000",
						}}
					>
						KARMA
					</a>
					. I love learning new things, coding is amazing.
				</p>

				<div className="tech-text">
					<u>TECH-STACK</u>
					<br />
					<br />
					React | Next.js | Svelte | Express.js | Node.js | Express | Redux |
					Gatsby | Contentful | Figma | Git | Github | MySQL | MongoDB |
					Mongoose | Vercel | GraphQL
					<br />
				</div>
			</article>
		</section>
	);
};

export default About;
