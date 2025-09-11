// components/NewProjectForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const NewProjectForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    projectUrl: '',
    githubUrl: '',
    category: '',
    imageUrl: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    
    try {
      let success = false;
      
      // If onSubmit prop is provided, use it (for testing or custom handling)
      if (onSubmit) {
        onSubmit(formData);
        success = true;
      } else {
        // Send to Netlify function for processing
        const response = await axios.post('/.netlify/functions/submitProject', formData);
        
        if (response.status === 200) {
          success = true;
          console.log('Project submitted successfully:', response.data);
        }
      }
      
      if (success) {
        setSubmissionStatus('success');
        // Clear form after successful submission
        setFormData({
          title: '',
          description: '',
          technologies: '',
          projectUrl: '',
          githubUrl: '',
          category: '',
          imageUrl: ''
        });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error submitting project:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Submit Your MVP Project</h2>
      
      <section>
        <form onSubmit={handleSubmit}>
          {/* Project Title */}
          <label htmlFor="title">Project Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter your project title"
            disabled={isSubmitting}
          />

          {/* Project Description */}
          <label htmlFor="description">Project Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
            placeholder="Describe your MVP project..."
            disabled={isSubmitting}
          />

          {/* Technologies Used */}
          <label htmlFor="technologies">Technologies Used:</label>
          <input
            type="text"
            id="technologies"
            name="technologies"
            value={formData.technologies}
            onChange={handleChange}
            required
            placeholder="e.g., React, Node.js, MongoDB"
            disabled={isSubmitting}
          />

          {/* Project URL */}
          <label htmlFor="projectUrl">Live Project URL:</label>
          <input
            type="url"
            id="projectUrl"
            name="projectUrl"
            value={formData.projectUrl}
            onChange={handleChange}
            placeholder="https://your-project.com"
            disabled={isSubmitting}
          />

          {/* GitHub URL */}
          <label htmlFor="githubUrl">GitHub Repository:</label>
          <input
            type="url"
            id="githubUrl"
            name="githubUrl"
            value={formData.githubUrl}
            onChange={handleChange}
            placeholder="https://github.com/username/repo"
            disabled={isSubmitting}
          />

          {/* Category */}
          <label htmlFor="category">Project Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          >
            <option value="">Select a category</option>
            <option value="web-app">Web Application</option>
            <option value="mobile-app">Mobile Application</option>
            <option value="desktop-app">Desktop Application</option>
            <option value="api">API/Backend</option>
            <option value="tool">Development Tool</option>
            <option value="game">Game</option>
            <option value="other">Other</option>
          </select>

          {/* Image URL */}
          <label htmlFor="imageUrl">Project Screenshot URL:</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/screenshot.png"
            disabled={isSubmitting}
          />

          {/* Submit Button */}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Project'}
          </button>

          {/* Submission Status Messages */}
          {submissionStatus === 'success' && (
            <div className="success-message">
              Project submitted successfully! Thank you for sharing your MVP project.
            </div>
          )}
          {submissionStatus === 'error' && (
            <div className="error-message">
              Error submitting project. Please check your information and try again.
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default NewProjectForm;