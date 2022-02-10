import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Project(props) {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<div className="project-container" data-aos="fade-up">
			<div className="image-container">
				<a href={props.url} target="blank">
					<img className="project-image" src={props.img} alt={props.imgalt} />
				</a>
			</div>

			<article className="project-info">
				<h3>{props.name}</h3>
				<p>{props.info}</p>
				<p className="tech">{props.info2}</p>
				<div>
					<a className="cta-buttons-project" href={props.url} target="blank">
						Website
					</a>
					<a className="cta-buttons-project" href={props.repo} target="blank">
						Repo
					</a>
				</div>
			</article>
		</div>
	);
}

export default Project;
