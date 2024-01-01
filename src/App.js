// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BlogLayout from './components/BlogLayout'; // Adjust the import path
import './components/style.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

            {/* Use Outlet to handle nested routes under /blog */}
            <Route path="/blog/*" element={<BlogLayout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;






