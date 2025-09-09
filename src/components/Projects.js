import React from 'react';
import './style.css';

const Project = () => {
  // Assuming you have some data for the project
  const projectData = {
    title: 'My Projects',
    images: [
      { src: './Screenshot1.png', alt: 'Modern Dashboard', title: 'Dashboard App', link: 'https://gregarious-brigadeiros-edcc74.netlify.app' },
      { src: './Screenshot2.png', alt: 'E-commerce Platform', title: 'E-commerce Site', link: 'https://eclectic-gumption-1d4c5d.netlify.app' },
      { src: './Screenshot3.png', alt: 'Portfolio Website', title: 'Creative Portfolio', link: 'https://melodious-cajeta-bad382.netlify.app' },
    ],
    projectLink: 'https://melodious-cajeta-bad382.netlify.app',
  };

  return (
    <div>
      <h2>{projectData.title}</h2>

      <div className="projects-grid">
        {projectData.images.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.src} alt={project.alt} />
            </a>
            <p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Live Project →
              </a>
            </p>
          </div>
        ))}
      </div>

      <section>
        <h3>Featured Project</h3>
        <p>
          Check out my latest project{' '}
          <a href={projectData.projectLink} target="_blank" rel="noopener noreferrer">
            here
          </a>
          . This project showcases modern web development techniques and responsive design principles.
        </p>
      </section>
    </div>
  );
};

export default Project;

