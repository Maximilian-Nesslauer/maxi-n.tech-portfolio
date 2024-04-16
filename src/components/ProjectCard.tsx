import React, { useEffect, useState } from "react";
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
  status?: string;
  statusColor?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubLink,
  imageSrc,
  imageAlt,
  videoSrc,
  additionalLinks,
  status,
  statusColor
}) => {
  const [lastCommit, setLastCommit] = useState<string | null>(null);

  useEffect(() => {
    const fetchLastCommit = async () => {
      if (githubLink) {
        try {
          // Extract the repo name from the GitHub link
          const repo = new URL(githubLink).pathname.substring(1);  // Assumes URL is like "https://github.com/user/repo"
          const response = await fetch(`/api/github/lastCommit?repo=${repo}`);
          const data = await response.json();
          if (response.ok) {
            setLastCommit(data.date);
          } else {
            console.error('Failed to fetch last commit:', data.error);
          }
        } catch (error) {
          console.error('Error fetching last commit data:', error);
        }
      }
    };

    fetchLastCommit();
  }, [githubLink]);  // Dependency array to re-fetch when githubLink changes

  return (
    <div className="project-card">
      <h3 className="text-xl font-bold">{title}</h3>
      {status && (
        <div className="status-indicator">
          <span className="status-dot" style={{ backgroundColor: statusColor }}></span>
          {status}
        </div>
      )}
      {lastCommit && (
        <div className="last-commit">
          Last commit: {lastCommit}
        </div>
      )}
      <p>{description}</p>
      {imageSrc && <img src={imageSrc} alt={imageAlt || 'Project Image'} />}
      {videoSrc && <video src={videoSrc} controls />}
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-links fab fa-github text-center text-2xl fond-bold" title="GitHub Link">
        </a>
      )}
      {additionalLinks && additionalLinks.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="project-links">
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default ProjectCard;
