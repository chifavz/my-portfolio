import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';

describe('Home', () => {
  test('renders home page elements correctly', () => {
    render(<Home />);
    
    // Check for main heading
    expect(screen.getByText(/Chifavz web solutions/i)).toBeInTheDocument();
    
    // Check for portfolio heading
    expect(screen.getByText(/Web Developer Portfolio – Creative & Innovative Web Solutions by Chifavz/i)).toBeInTheDocument();
    
    // Check for tagline
    expect(screen.getByText(/Elevate Your Online Presence with Creative and Innovative Web Solutions/i)).toBeInTheDocument();
    
    // Check for expertise section
    expect(screen.getByText(/Our Expertise/i)).toBeInTheDocument();
    expect(screen.getByText(/Responsive Design:/i)).toBeInTheDocument();
    expect(screen.getByText(/Innovative Solutions:/i)).toBeInTheDocument();
    expect(screen.getByText(/Performance Optimization:/i)).toBeInTheDocument();
    
    // Check for why choose us section
    expect(screen.getByText(/Why Choose Us?/i)).toBeInTheDocument();
    expect(screen.getByText(/Experienced Team:/i)).toBeInTheDocument();
    expect(screen.getByText(/Client-Centric Approach:/i)).toBeInTheDocument();
    expect(screen.getByText(/Affordable Pricing:/i)).toBeInTheDocument();
    
    // Check for footer contact message
    expect(screen.getByText(/Contact us today to discuss your project and let's build something extraordinary together./i)).toBeInTheDocument();
  });
});