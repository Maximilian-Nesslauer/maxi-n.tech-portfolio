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
    </div>
  );
};

export default ProjectCard;
