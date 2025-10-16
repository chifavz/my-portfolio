import React from 'react';
import './style.css';

const About = () => {
    return (
        <div className="about-page">
            <h2>About Me</h2>
            
            <section>
                <p>
                    Hello! I'm <strong>Chike.I</strong>, a passionate and results-driven full stack engineer 
                    based in Dallas, TX. I specialize in building <strong>MVP products</strong> from the ground up, 
                    helping ideas come to life with seamless user experiences and scalable backend systems.
                </p>
                <p>
                    My journey in tech started with a fascination for turning ideas into interactive and 
                    user-friendly applications. Over the years, I’ve honed my skills in 
                    <strong> frontend, backend, and database development</strong>, giving me the ability to take 
                    projects from concept to deployment.
                </p>
                <p>
                    What sets me apart is my ability to deliver <strong>end-to-end solutions</strong>—from 
                    intuitive interfaces and optimized APIs to reliable data models. I thrive on challenges, 
                    adapt quickly, and always stay updated with the latest tools and frameworks to build 
                    cutting-edge solutions.
                </p>
            </section>

            <section>
                <h3>Key Skills</h3>
                <ul>
                    <li><strong>Frontend:</strong> React.js, Gatsby.js, Responsive Web Design, Redux.js</li>
                    <li><strong>Backend:</strong> Node.js, Express.js, RESTful API Development</li>
                    <li><strong>Database:</strong> PostgreSQL, MongoDB, SQL Design & Optimization</li>
                    <li><strong>Dev Tools:</strong> Git/GitHub, Deployment (Netlify, Vercel, Heroku)</li>
                </ul>
            </section>

            <section>
                <h3>MVP Development Process</h3>
                <ol>
                    <li><strong>Idea & Discovery:</strong> Understand the core concept, define the problem, and identify the target audience.</li>
                    <li><strong>Design & Prototype:</strong> Create wireframes, mockups, and clickable prototypes to visualize the product.</li>
                    <li><strong>Build & Development:</strong> Implement the frontend, backend, and database with scalability in mind.</li>
                    <li><strong>Test & Iterate:</strong> Validate functionality with real users, fix issues, and refine features.</li>
                    <li><strong>Launch & Scale:</strong> Deploy the MVP, gather feedback, and prepare for future growth and enhancements.</li>
                </ol>
            </section>

            <section>
                <h3>Let's Connect</h3>
                <p>
                    I’m always open to exciting projects and collaborations. Whether you need a 
                    <strong> developer to bring your MVP to life</strong> or a partner to improve your 
                    existing product, let’s connect and build something amazing together!
                </p>
            </section>
        </div>
    );
};

export default About;

