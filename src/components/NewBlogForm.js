// components/NewBlogForm.js
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const NewBlogForm = ({ onPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data (you can add more validation logic)

    // Create a new blog post object
    const newBlogPost = {
      title,
      content,
      // Add any other properties as needed (e.g., date, author, etc.)
    };

    // Call the onPost function to handle the submission
    onPost(newBlogPost);

    // Clear the form fields
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Content:
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <br />
      <button type="submit">Post Blog</button>

      {/* Display a preview of the Markdown content */}
      <div>
        <h2>Content Preview</h2>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </form>
  );
};

export default NewBlogForm;

