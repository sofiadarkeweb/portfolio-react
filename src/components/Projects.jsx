import React from "react";
import projectData from "./projectdata";
import Project from "./Project";

function createProject(props) {
	return (
		<Project
			key={props.id}
			name={props.title}
			img={props.img}
			info={props.info}
			info2={props.info2}
			imgalt={props.imgalt}
			url={props.url}
			repo={props.repo}
		/>
	);
}

const Projects = (props) => {
	return (
		<section id="project-list" className="projects element">
			<h2 className="section-titles">Projects</h2>
			{projectData.map(createProject)}
		</section>
	);
};

export default Projects;
