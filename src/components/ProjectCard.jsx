import React, { memo } from 'react';

const ProjectCard = memo(({ project }) => {
  const hasImage = !!project.image;

  return (
    <div className="project-card">
      {hasImage ? (
        <img
          src={project.image}
          alt={project.title}
          className="project-img"
        />
      ) : (
        <div className={`project-image ${project.className}`}></div>
      )}

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
