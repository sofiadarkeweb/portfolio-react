import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import projectData from "./projectdata";
import Project from "./Project";

const Projects = () => {
	useEffect(() => {
		Aos.init({ duration: 1000, once: true });
	}, []);

	return (
		<section id="project-list" className="projects">
			<div className="section-header" data-aos="fade-up">
				<span className="section-label">(SELECTED WORK)</span>
				<h2 className="section-title">PROJECTS</h2>
			</div>
			<div className="project-gallery">
				{projectData.map((project) => (
					<Project
						key={project.id}
						name={project.title}
						img={project.img}
						info={project.info}
						info2={project.info2}
						imgalt={project.imgalt}
						url={project.url}
						repo={project.repo}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
