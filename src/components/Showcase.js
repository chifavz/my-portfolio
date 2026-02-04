import React, { useState } from 'react';
import './style.css';

const Showcase = () => {
  // Sample showcase data - in a real app this would come from an API or state management
  const [projects] = useState([
    {
      id: 1,
      title: 'Project',
      description: 'Personal project showcasing web development skills',
      technologies: 'React, JavaScript, CSS , node,postgre,heroku',
      category: 'web-app',
      images: [
        { src: './Screenshot1.png', alt: 'Screenshot 1', link: 'https://gregarious-brigadeiros-edcc74.netlify.app' },
        { src: './Screenshot2.png', alt: 'Screenshot 2', link: 'https://eclectic-gumption-1d4c5d.netlify.app' },
        { src: './Screenshot3.png', alt: 'Screenshot 3', link: 'https://melodious-cajeta-bad382.netlify.app' },
        { src: './Screenshot (11).png', alt: 'Screenshot (11)', link: 'https://dulcet-heliotrope-268b7a.netlify.app' },
        { src: './Screenshot (12).png', alt: 'Screenshot (12)', link: 'https://precious-cascaron-44dee1.netlify.app' },
        { src: './Screenshot (15).png', alt: 'Screenshot (15)', link: 'https://legendary-dango-395dc3.netlify.app' },
        { src: './Screenshot (17).png', alt: 'Screenshot (18)', link: 'https://spiffy-puffpuff-f1466f.netlify.app/' },
        {src: './Screenshot (15).png', alt: 'Screenshot (15)', link: 'https://legendary-dango-395dc3.netlify.app' },
      ],
      projectUrl: 'https://melodious-cajeta-bad382.netlify.app',
      githubUrl: 'https://github.com/chifavz/sample-project'
    },
    {
      id: 2,
      title: 'Geo-map',
      description: 'Users grouped by location - Interactive mapping application for visualizing user distribution',
      technologies: 'React, Leaflet, OpenStreetMap, JavaScript, Geolocation API',
      category: 'mapping',
      images: [
        { src: './Screenshot (18).png', alt: 'Geo-map Screenshot', link: 'https://geo-map-users.netlify.app' },
      ],
      projectUrl: 'https://geo-map-users.netlify.app',
      githubUrl: 'https://github.com/chifavz/geo-map-project'
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
