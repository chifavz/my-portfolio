import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Chifavz studio</h2>

      <header>
        <h1>Creative and Innovative Web Solutions</h1>
      </header>

      {/* Restaurant Finder App Section */}
      <section className="restaurant-finder-section">
        <h2>Restaurant Finder App</h2>

        <a 
          href="https://spiffy-puffpuff-f1466f.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img
            src="./Screenshot (17).png"
            alt="Restaurant Finder App Front Page"
            className="restaurant-finder-image"
          />
        </a>

        <p>
          The <strong>Restaurant Finder App</strong> is a simple and intuitive web application that allows users 
          to find any kind of food place in any location. Whether you're craving pizza, sushi, or coffee, 
          this app helps you discover nearby restaurants quickly and easily.
        </p>

        <p>
          It’s designed to make finding food effortless — users can explore places to eat anywhere in the world, 
          powered by real-time restaurant data and an easy-to-use interface.
        </p>
      </section>

      <section>
        <h2>Our Expertise</h2>
        <ul>
          <li><strong>Responsive Design:</strong> Your website looks amazing on any device.</li>
          <li><strong>Innovative Solutions:</strong> We bring creativity and innovation to every project.</li>
          <li><strong>Performance Optimization:</strong> We ensure a smooth and enjoyable user experience.</li>
        </ul>
      </section>

      <footer>
        <p>Contact us today to discuss your project — let’s build something extraordinary together.</p>
      </footer>
    </div>
  );
};

export default Home;

