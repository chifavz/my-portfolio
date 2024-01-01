// Blog.js
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ title, content, author, date, slug }) => {
  const renderTags = tags => (
    <div>
      <strong>Tags: </strong>
      {tags.map((tag, index) => (
        <span key={index}>
          {tag}
          {index < tags.length - 1 ? ', ' : ''}
        </span>
      ))}
    </div>
  );

  const renderComments = comments => (
    <div>
      <h2>Comments</h2>
      {comments.map(comment => (
        <div key={comment.id}>
          <strong>{comment.author}:</strong> {comment.content}
        </div>
      ))}
    </div>
  );

  const renderRelatedPosts = relatedPosts => (
    <div>
      <h2>Related Posts</h2>
      <ul>
        {relatedPosts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="blog-post">
      <h1>{title}</h1>
      <p>
        By {author} on {date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: content }} />

      {renderTags(['React', 'JavaScript'])}

      {/* Add a Link to navigate to the full blog post */}
      <p>
        Read the full post <Link to={`/blog/${slug}`}>here</Link>.
      </p>

      {renderComments([
        { id: 1, author: 'Alice', content: 'Great post!' },
        { id: 2, author: 'Bob', content: 'I learned a lot from this.' },
      ])}

      {renderRelatedPosts([
        { id: 101, title: 'Advanced React Techniques' },
        { id: 102, title: 'The Future of JavaScript' },
      ])}
    </div>
  );
};

export default Blog;
