import React from 'react';
import Blog from './Blog';  // Update the path accordingly

const BlogContent = () => {
  const blogPost = {
    title: "Technology in Real-World Solutions",
    author: "Chifavz",
    date: "2023-31-12",
    content: `
    <article>


    <section>
      <h2>E-Commerce and Online Retail</h2>
      <p>
        Web technology has transformed the retail industry by enabling the creation of robust e-commerce platforms...
      </p>
    </section>

    <section>
      <h2>Education and E-Learning</h2>
      <p>
        The education sector has witnessed a significant shift with the integration of web technology...
      </p>
    </section>

    <section>
      <h2>Healthcare and Telemedicine</h2>
      <p>
        Web technology has revolutionized healthcare through the implementation of telemedicine solutions...
      </p>
    </section>

    <section>
      <h2>Finance and Fintech</h2>
      <p>
        The financial sector has embraced web technology to enhance banking services and financial transactions...
      </p>
    </section>

    <section>
      <h2>Smart Cities and IoT Integration</h2>
      <p>
        Web technology is a key enabler in the development of smart cities...
      </p>
    </section>

    <section>
      <h2>Entertainment and Streaming Services</h2>
      <p>
        The entertainment industry relies heavily on web technology for content delivery...
      </p>
    </section>

    <section>
      <h2>Conclusion</h2>
      <p>
        Web technology is not just a tool for creating websites; it's a powerful force driving innovation and transforming industries...
      </p>
    </section>
  </article>



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
