// components/Home.js
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Chifavz web solutions</h2>
      {/* Add your introduction and any other content here */}
    
      

<header>
    <h1>Web Developer Portfolio – Creative & Innovative Web Solutions by Chifavz</h1>
    <p>Elevate Your Online Presence with Creative and Innovative Web Solutions</p>
</header>

<section>
    <h2>Our Expertise</h2>
    <ul>
        <li><strong>Responsive Design:</strong> Your website looks amazing on any device.</li>
        <li><strong>Innovative Solutions:</strong> We bring creativity and innovation to every project.</li>
        <li><strong>Performance Optimization:</strong> We ensure a smooth and enjoyable user experience.</li>
        
    </ul>
</section>

<section>
    <h2>Why Choose Us?</h2>
    <ol>
        <li><strong>Experienced Team:</strong> Passionate about turning your ideas into reality.</li>
        <li><strong>Client-Centric Approach:</strong> Open communication and collaboration throughout.</li>
        <li><strong>Affordable Pricing:</strong> Competitive and transparent pricing with no hidden fees.</li>
        
    </ol>
</section>

<footer>
    <p>Contact us today to discuss your project and let's build something extraordinary together.</p>
</footer>


    </div>
  );
};

export default Home;
