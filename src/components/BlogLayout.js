import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './style.css';

// Sample affiliate marketing blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Web Development Tools for 2024 - Boost Your Productivity',
    slug: 'top-web-development-tools-2024',
    excerpt: 'Discover the best web development tools that can significantly improve your coding workflow and productivity in 2024.',
    date: '2024-01-15',
    author: 'Chifavz',
    category: 'Tools & Resources',
    readTime: '8 min read',
    content: `# Top 10 Web Development Tools for 2024

As a professional web developer, having the right tools can make the difference between a frustrating coding experience and a productive, enjoyable one. Here are the top 10 web development tools I recommend for 2024:

## 1. Visual Studio Code
The ultimate code editor with powerful extensions and built-in Git support. Perfect for any web development project.

## 2. Figma
Essential for UI/UX design collaboration. The free tier offers excellent features for small projects.

## 3. React Developer Tools
Chrome extension that makes debugging React applications a breeze.

## 4. Postman
API development and testing made easy. Essential for backend integration.

## 5. Chrome DevTools
Built-in browser debugging tools that every developer should master.

## 6. GitHub
Version control and collaboration platform that's become industry standard.

## 7. Netlify
Simple deployment and hosting solution for modern web projects.

## 8. Tailwind CSS
Utility-first CSS framework that speeds up development significantly.

## 9. npm/Yarn
Package managers for Node.js that streamline dependency management.

## 10. Lighthouse
Google's tool for auditing web performance and accessibility.

*Note: Some links in this article are affiliate links. If you purchase through these links, I may earn a small commission at no extra cost to you.*`
  },
  {
    id: 2,
    title: 'Best React Libraries for Modern Web Development - 2024 Guide',
    slug: 'best-react-libraries-2024',
    excerpt: 'Explore the most useful React libraries that can accelerate your development process and enhance your applications.',
    date: '2024-01-10',
    author: 'Chifavz',
    category: 'React',
    readTime: '6 min read',
    content: `# Best React Libraries for Modern Web Development

React's ecosystem is vast and constantly evolving. Here are the essential libraries that will make your React development more efficient in 2024:

## UI Component Libraries

### Material-UI (MUI)
A comprehensive React component library implementing Google's Material Design.

### Ant Design
Enterprise-class UI design system with high-quality React components.

### Chakra UI
Modular and accessible component library for React applications.

## State Management

### Redux Toolkit
The official, modern way to use Redux with less boilerplate.

### Zustand
Lightweight state management solution for React.

## Routing

### React Router
The standard routing library for React applications.

## Form Handling

### React Hook Form
Performant, flexible forms with easy validation.

### Formik
Build forms without tears - popular form library for React.

## Animation

### Framer Motion
Production-ready motion library for React applications.

### React Spring
Spring-physics based animations for React.

## Styling

### Styled Components
CSS-in-JS library for styling React components.

### Emotion
Performant and flexible CSS-in-JS library.

*Affiliate disclosure: This post contains affiliate links to recommended tools and services.*`
  },
  {
    id: 3,
    title: 'Web Hosting Comparison 2024 - Find the Perfect Host for Your Project',
    slug: 'web-hosting-comparison-2024',
    excerpt: 'Compare the best web hosting services for different needs and budgets. Make an informed decision for your next project.',
    date: '2024-01-05',
    author: 'Chifavz',
    category: 'Hosting',
    readTime: '10 min read',
    content: `# Web Hosting Comparison 2024

Choosing the right web hosting provider is crucial for your website's success. Here's a comprehensive comparison of the top hosting services in 2024:

## Shared Hosting

### Bluehost
- **Price**: $2.95/month
- **Best for**: WordPress websites
- **Pros**: One-click WordPress install, 24/7 support
- **Cons**: Higher renewal rates

### HostGator
- **Price**: $2.75/month
- **Best for**: Beginners
- **Pros**: Unlimited bandwidth, easy website builder
- **Cons**: Limited advanced features

## VPS Hosting

### DigitalOcean
- **Price**: $5/month
- **Best for**: Developers
- **Pros**: SSD storage, excellent performance
- **Cons**: Requires technical knowledge

### Linode
- **Price**: $5/month
- **Best for**: High-performance applications
- **Pros**: Excellent customer support
- **Cons**: Steeper learning curve

## Cloud Hosting

### AWS
- **Price**: Pay-as-you-go
- **Best for**: Enterprise applications
- **Pros**: Scalable, comprehensive services
- **Cons**: Complex pricing

### Netlify
- **Price**: Free tier available
- **Best for**: Static sites and JAMstack
- **Pros**: Automatic deployments, CDN included
- **Cons**: Limited database options

## Key Factors to Consider

1. **Performance**: Look for SSD storage and CDN
2. **Support**: 24/7 customer support is essential
3. **Scalability**: Choose a host that can grow with your needs
4. **Security**: SSL certificates and regular backups
5. **Price**: Consider long-term costs, not just introductory offers

*Disclaimer: This post contains affiliate links. I may earn a commission if you purchase hosting through these links.*`
  }
];

const BlogLayout = () => {
  return (
    <div className="blog-layout">
      <Routes>
        <Route path="/" element={<BlogList posts={blogPosts} />} />
        <Route path="/:slug" element={<BlogPost posts={blogPosts} />} />
      </Routes>
    </div>
  );
};

const BlogList = ({ posts }) => {
  return (
    <div className="blog-list">
      <div className="blog-header">
        <h1>Affiliate Marketing Blog</h1>
        <p>Reviews, tutorials, and guides for web developers and entrepreneurs</p>
      </div>
      
      <div className="blog-posts">
        {posts.map(post => (
          <article key={post.id} className="blog-post-preview">
            <div className="post-meta">
              <span className="post-category">{post.category}</span>
              <span className="post-date">{post.date}</span>
              <span className="post-read-time">{post.readTime}</span>
            </div>
            <h2>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <div className="post-footer">
              <span className="post-author">By {post.author}</span>
              <Link to={`/blog/${post.slug}`} className="read-more">
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

const BlogPost = ({ posts }) => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="blog-post-not-found">
        <h1>Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    );
  }
  
  return (
    <div className="blog-post">
      <div className="post-header">
        <Link to="/blog" className="back-link">← Back to Blog</Link>
        <div className="post-meta">
          <span className="post-category">{post.category}</span>
          <span className="post-date">{post.date}</span>
          <span className="post-read-time">{post.readTime}</span>
        </div>
        <h1>{post.title}</h1>
        <p className="post-author">By {post.author}</p>
      </div>
      
      <div className="post-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      
      <div className="post-footer">
        <div className="affiliate-disclaimer">
          <p><strong>Affiliate Disclosure:</strong> This post contains affiliate links. 
          If you make a purchase through these links, I may earn a commission at no extra cost to you. 
          I only recommend products and services I personally use and believe will add value to my readers.</p>
        </div>
        
        <div className="post-navigation">
          <Link to="/blog" className="back-to-blog">← Back to All Posts</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;

