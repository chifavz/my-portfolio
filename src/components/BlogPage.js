// BlogPage.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IndividualBlog from './IndividualBlog'; // Adjust the import path

const BlogPage = () => (
  <div>
    <h2>Blog Page</h2>
   

    <Routes>
      <Route path="/" element={<div>Select a blog post</div>} />
      <Route path=":slug" element={<IndividualBlog />} />
    </Routes>
    <hr />
    <MDXProvider components={{ wrapper: BlogPost }}>
        <Route path={`${match.path}/:slug`}>
          <BlogPost />
        </Route>
      </MDXProvider>

  </div>
);

export default BlogPage;





