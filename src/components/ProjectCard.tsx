import React from "react";
import "../styles/projects.css";

interface Link {
  url: string;
  label: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  additionalLinks?: Link[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubLink,
  imageSrc,
  imageAlt,
  videoSrc,
  additionalLinks
}) => (
  <div className="project-card">
    <h3 className="text-xl font-bold">{title}</h3>
    <p>{description}</p>
    {imageSrc && <img src={imageSrc} alt={imageAlt || 'Project Image'} />}
    {videoSrc && <video src={videoSrc} controls />}
    {githubLink && (
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-links fab fa-github text-center text-2xl fond-bold">
      </a>
    )}
    {additionalLinks && additionalLinks.map((link, index) => (
      <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="project-links text-center">
        {link.label}
      </a>
    ))}
  </div>
);

export default ProjectCard;
