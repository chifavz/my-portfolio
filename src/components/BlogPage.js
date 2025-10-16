import React from "react";
import { Link } from "react-router-dom";

const BlogPage = () => (
  <div>
    <h2>Marketing Blog</h2>
    <p>
      Discover the latest tools, tutorials, and resources for creators and entrepreneurs.
      Read detailed reviews and guides on the best software, hosting, and services.
    </p>
    <Link to="/blog" className="btn-blog">
      Visit Our Blog
    </Link>
  </div>
);

export default BlogPage;






