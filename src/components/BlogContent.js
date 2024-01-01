import React from 'react';
import Blog from './Blog';  // Update the path accordingly

const BlogContent = () => {
  const blogPost = {
    title: "How Web Development Has Helped Humanity",
    author: "Your Name",
    date: "2023-01-01",
    content: `
      <p>
        The advent of web development has transformed the way we live and interact with the world. In this blog post, we explore the positive impact of web development on humanity and how it has contributed to various aspects of our lives.
      </p>
      <p>
        From enhancing communication to providing valuable resources and services, web development has played a crucial role in shaping the digital landscape. We'll delve into specific examples and discuss the future possibilities that web development brings to the table.
      </p>
    `,
    tags: ["React", "Web Development"],
    comments: [
      { id: 1, author: 'Alice', content: 'Great post!' },
      { id: 2, author: 'Bob', content: 'I learned a lot from this.' },
    ],
    relatedPosts: [
      { id: 101, title: 'Advanced React Techniques' },
      { id: 102, title: 'The Future of JavaScript' },
    ],
  };

  return (
    <Blog
      title={blogPost.title}
      author={blogPost.author}
      date={blogPost.date}
      content={blogPost.content}
      tags={blogPost.tags}
      comments={blogPost.comments}
      relatedPosts={blogPost.relatedPosts}
    />
  );
};

export default BlogContent;
