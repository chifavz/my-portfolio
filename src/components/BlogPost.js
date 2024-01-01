// components/BlogPost.js
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const components = {
  // You can define custom components to be used in MDX here
  // For example, if you want to use a custom "Code" component:
  // Code: CustomCode,
};

const BlogPost = ({ title, content, author, date }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        By {author} on {date}
      </p>
      <MDXProvider components={components}>
        {/* Use the content directly in the MDXProvider */}
        {content}
      </MDXProvider>
    </div>
  );
};

export default BlogPost;
