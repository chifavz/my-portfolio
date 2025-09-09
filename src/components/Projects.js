import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Projects = () => {
  // Sample project data - in a real app this would come from an API or state management
  const [projects] = useState([
    {
      id: 1,
      title: 'Sample Project',
      description: 'A sample portfolio project showcasing web development skills',
      technologies: 'React, JavaScript, CSS',
      category: 'web-app',
      images: [
        { src: './Screenshot1.png', alt: 'Screenshot 1', link: 'https://gregarious-brigadeiros-edcc74.netlify.app' },
        { src: './Screenshot2.png', alt: 'Screenshot 2', link: 'https://eclectic-gumption-1d4c5d.netlify.app' },
        { src: './Screenshot3.png', alt: 'Screenshot 3', link: 'https://melodious-cajeta-bad382.netlify.app' },
      ],
      projectUrl: 'https://melodious-cajeta-bad382.netlify.app',
      githubUrl: 'https://github.com/chifavz/sample-project'
    }
  ]);

  return (
    <div>
      <div className="projects-header">
        <h1>My Projects</h1>
        <Link to="/projects/new" className="add-project-btn">
          + Add New Project
        </Link>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            
            {project.description && (
              <p className="project-description">{project.description}</p>
            )}
            
            {project.technologies && (
              <div className="project-technologies">
                <strong>Technologies:</strong> {project.technologies}
              </div>
            )}
            
            {project.category && (
              <div className="project-category">
                <strong>Category:</strong> {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </div>
            )}

            {/* Display project images */}
            {project.images && project.images.length > 0 && (
              <div className="project-images">
                {project.images.map((image, index) => (
                  <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
                    <img src={image.src} alt={`${project.title} - ${index + 1}`} />
                  </a>
                ))}
              </div>
            )}

            {/* Project links */}
            <div className="project-links">
              {project.projectUrl && (
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Live Project
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="no-projects">
          <p>No projects yet. <Link to="/projects/new">Add your first project!</Link></p>
        </div>
      )}
    </div>
  );
};

export default Projects;

