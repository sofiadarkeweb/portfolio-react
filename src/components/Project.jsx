// import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";

function Project(props) {
	return (
		<div className="project-container">
			<div className="image-container">
				<a href={props.url}>
					<img className="project-image" src={props.img} alt={props.imgalt} />
				</a>
			</div>

			<article className="project-info">
				<h3>{props.name}</h3>
				<p>{props.info}</p>
				<p className="tech">{props.info2}</p>
				<div>
					<a className="cta-buttons-project" href={props.url}>
						Website
					</a>
					<a className="cta-buttons-project" href={props.repo}>
						Repo
					</a>
				</div>
			</article>
		</div>
	);
}

export default Project;
