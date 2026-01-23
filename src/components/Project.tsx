import type { ProjectProps } from '../types'

export const Project = ({ name, img, imgalt, info, info2, url, repo }: ProjectProps) => {
  return (
    <article className="project-item" data-aos="fade-up">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        <div className="project-image-wrapper">
          <img className="project-image" src={img} alt={imgalt} />
          <div className="project-overlay">
            <h3 className="project-title">{name}</h3>
            <p className="project-description">{info}</p>
            <p className="project-tech">{info2}</p>
            <div className="project-actions">
              <span className="project-action">VIEW PROJECT →</span>
            </div>
          </div>
        </div>
      </a>
      {repo && (
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-repo-link"
        >
          REPO →
        </a>
      )}
    </article>
  )
}
