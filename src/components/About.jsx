import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const techStack = [
	"TypeScript", "React", "Next.js", "Node.js", "Tanstack Router",
	"Dotnet", "C#", "PostgreSQL", "Google Cloud Platform", "Svelte",
	"Express.js", "Redux", "Redux Tool Kit", "Gatsby", "Contentful",
	"Figma", "Git", "Github", "MySQL", "MongoDB", "Mongoose", "Vercel", "GraphQL"
];

const About = () => {
	useEffect(() => {
		Aos.init({ duration: 1000, once: true });
	}, []);

	return (
		<section id="about-section" className="about">
			<div className="about-content">
				<div className="about-header" data-aos="fade-up">
					<span className="section-label">(ABOUT)</span>
					<h2 className="about-statement">
						I BUILD DIGITAL EXPERIENCES THAT CONNECT PEOPLE WITH PURPOSE.
					</h2>
				</div>
				
				<div className="about-description" data-aos="fade-up" data-aos-delay="100">
					<p>
						Fullstack developer based in Stockholm, crafting modern web applications 
						with clean code and thoughtful design. I believe in building products 
						that are both beautiful and functional.
					</p>
				</div>

				<div className="tech-section" data-aos="fade-up" data-aos-delay="200">
					<span className="tech-label">TECH STACK</span>
					<div className="tech-grid">
						{techStack.map((tech, index) => (
							<span key={index} className="tech-item">→ {tech}</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
