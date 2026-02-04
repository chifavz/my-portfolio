import React, { useState } from 'react';
import './style.css';

const Showcase = () => {
  // Sample showcase data - in a real app this would come from an API or state management
  const [projects] = useState([
    {
      id: 1,
      title: 'Restaurant Finder',
      description: 'Find any kind of food place in any location with ease',
      technologies: 'React, JavaScript, CSS, Node, PostgreSQL, Heroku',
      thumbnail: './Screenshot (17).png',
      projectUrl: 'https://melodious-cajeta-bad382.netlify.app',
      githubUrl: 'https://github.com/chifavz/sample-project'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping experience with cart and checkout',
      technologies: 'React, Redux, Node.js, MongoDB, Stripe',
      thumbnail: './Screenshot (11).png',
      projectUrl: 'https://dulcet-heliotrope-268b7a.netlify.app',
      githubUrl: 'https://github.com/chifavz/sample-project'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Organize your work and life with this intuitive task tracker',
      technologies: 'React, TypeScript, Firebase, Material-UI',
      thumbnail: './Screenshot (12).png',
      projectUrl: 'https://precious-cascaron-44dee1.netlify.app',
      githubUrl: 'https://github.com/chifavz/sample-project'
    },
    {
      id: 4,
      title: 'geo-map',
      description: 'Interactive geographic mapping application with advanced visualization features',
      technologies: 'React, Leaflet, OpenStreetMap, JavaScript',
      thumbnail: './Screenshot (15).png',
      projectUrl: 'https://legendary-dango-395dc3.netlify.app',
      githubUrl: 'https://github.com/chifavz/sample-project'
    }
  ]);

  // Project data for featured section
  const projectData = {
    projectLink: 'https://melodious-cajeta-bad382.netlify.app',
  };

  return (
    <div>
      <div className="projects-header">
        <h1>My Showcase</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* 1. Thumbnail - Top Section */}
            {project.thumbnail && (
              <div className="project-thumbnail">
                <img src={project.thumbnail} alt={project.title} />
              </div>
            )}
            
            {/* 2. Title */}
            <h2>{project.title}</h2>
            
            {/* 3. Description */}
            {project.description && (
              <p className="project-description">{project.description}</p>
            )}
            
            {/* 4. Tech Tags */}
            {project.technologies && (
              <div className="project-tech-tags">
                {project.technologies.split(',').map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech.trim()}</span>
                ))}
              </div>
            )}

            {/* 5. Action Buttons */}
            <div className="project-actions">
              {project.projectUrl && (
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  View Live
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <section>
        <h3>Featured Showcase</h3>
        <p>
          Check out my latest showcase{' '}
          <a href={projectData.projectLink} target="_blank" rel="noopener noreferrer">
            here
          </a>
          . This showcase demonstrates modern web development techniques and responsive design principles.
        </p>
      </section>

      {projects.length === 0 && (
        <div className="no-projects">
          <p>No showcase items to display yet.</p>
        </div>
      )}
    </div>
  );
};

export default Showcase;
