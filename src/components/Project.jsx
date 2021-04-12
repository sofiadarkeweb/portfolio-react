import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";

function Project(props) {
	return (
		<div className="project-container">
			<a href={props.url}>
				<img className="project-image" src={props.img} alt={props.imgalt} />
			</a>

			<article>
				<h3>{props.name}</h3>
				<br />
				<p>{props.info}</p>
				<br />
				<p className="tech">{props.info2}</p>
				<br />
				<br />
				<a className="cta-buttons-project" href={props.url}>
					Website
				</a>
				<a className="cta-buttons-project" href={props.repo}>
					Repo
				</a>
				<br />
				<br />
			</article>
		</div>
	);
}

export default Project;
