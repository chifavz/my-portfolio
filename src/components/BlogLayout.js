import React, { useEffect } from 'react';
import './style.css';

const BlogLayout = () => {
  // External blog URL - update this to your actual blog site URL
  const EXTERNAL_BLOG_URL = 'https://your-blog-site.com';
  
  useEffect(() => {
    // Redirect to external blog
    window.location.href = EXTERNAL_BLOG_URL;
  }, []);

  return (
    <div>
      <h1>Redirecting to Blog...</h1>
      <p>
        If you are not redirected automatically, please{' '}
        <a href={EXTERNAL_BLOG_URL} target="_blank" rel="noopener noreferrer">
          click here to visit our blog
        </a>
      </p>
    </div>
  );
};

export default BlogLayout;

