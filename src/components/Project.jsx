import React from "react";

export const Project = (props) => {
	return (
		<article className="project-item" data-aos="fade-up">
			<a 
				href={props.url} 
				target="_blank" 
				rel="noopener noreferrer"
				className="project-link"
			>
				<div className="project-image-wrapper">
					<img 
						className="project-image" 
						src={props.img} 
						alt={props.imgalt} 
					/>
					<div className="project-overlay">
						<h3 className="project-title">{props.name}</h3>
						<p className="project-description">{props.info}</p>
						<p className="project-tech">{props.info2}</p>
						<div className="project-actions">
							<span className="project-action">VIEW PROJECT →</span>
						</div>
					</div>
				</div>
			</a>
			{props.repo && (
				<a 
					href={props.repo} 
					target="_blank" 
					rel="noopener noreferrer"
					className="project-repo-link"
				>
					REPO →
				</a>
			)}
		</article>
	);
};
