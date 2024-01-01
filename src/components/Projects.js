import React from 'react';
import './style.css';

const Project = () => {
  // Assuming you have some data for the project
  const projectData = {
    title: 'Sample Project',
    images: [
      { src: './Screenshot1.png', alt: 'Screenshot 1', link: 'https://mellow-snickerdoodle-01057f.netlify.app' },
      { src: './Screenshot2.png', alt: 'Screenshot 2', link: 'https://eclectic-gumption-1d4c5d.netlify.app' },
      { src: './Screenshot3.png', alt: 'Screenshot 3', link: 'https://melodious-cajeta-bad382.netlify.app' },
    ],
    projectLink: 'https://melodious-cajeta-bad382.netlify.app',
  };

  return (
    <div>
      <h1>{projectData.title}</h1>

      {/* Iterate over images and include them with a link */}
      {projectData.images.map((image, index) => (
        <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
          <img src={image.src} alt={`${projectData.title} - ${index + 1}`} />
        </a>
      ))}

      {/* Provide a link to the project */}
      <p>
        Check out the project <a href={projectData.projectLink} target="_blank" rel="noopener noreferrer">here</a>.
      </p>
    </div>
  );
};

export default Project;

