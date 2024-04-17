import React, { useEffect, useState } from 'react';
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
  fetchLastCommit?: boolean;
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
  statusColor,
  fetchLastCommit
}) => {
  const [lastCommit, setLastCommit] = useState<string>('');

  useEffect(() => {
    const fetchCommit = async () => {
      if (githubLink && fetchLastCommit) {
        try {
          const apiUrl = `${githubLink.replace('https://github.com', 'https://api.github.com/repos')}/commits?per_page=1`;
          const response = await fetch(apiUrl, {
            headers: { 'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}` }
          });
          if (!response.ok) throw new Error('Failed to fetch commit data');
          const data = await response.json();
          if (data && data.length > 0) {
            setLastCommit(new Date(data[0].commit.author.date).toLocaleString());
          }
        } catch (error) {
          console.error('Error fetching last commit:', error);
          setLastCommit('Unavailable');
        }
      }
    };
    

    fetchCommit();
  }, [githubLink, fetchLastCommit]);

  return (
    <div className="project-card">
      <h3 className="text-xl font-bold">{title}</h3>
      {status && (
        <div className="status-indicator">
          <span className="status-dot" style={{ backgroundColor: statusColor }}></span>
          {status}
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
      {lastCommit && (
        <div className="last-commit">
          Last Commit: {lastCommit}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
