import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Showcase from '../Showcase';

describe('Showcase', () => {
  test('renders showcase header correctly', () => {
    render(<Showcase />);
    
    expect(screen.getByText(/my showcase/i)).toBeInTheDocument();
  });

  test('renders featured showcase section', () => {
    render(<Showcase />);
    
    expect(screen.getByText(/featured showcase/i)).toBeInTheDocument();
    expect(screen.getByText(/this showcase demonstrates modern web development techniques/i)).toBeInTheDocument();
  });

  test('renders project cards with showcase content', () => {
    render(<Showcase />);
    
    // Check that project title is displayed (more specific)
    expect(screen.getByRole('heading', { level: 2, name: /project/i })).toBeInTheDocument();
    
    // Check that project links are displayed
    expect(screen.getByText(/view live project/i)).toBeInTheDocument();
    expect(screen.getByText(/view on github/i)).toBeInTheDocument();
  });

  test('renders showcase images', () => {
    render(<Showcase />);
    
    // Check that images are rendered (should have alt text containing project)
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
    
    // Check that at least one image has project-related alt text
    const projectImages = images.filter(img => 
      img.getAttribute('alt')?.toLowerCase().includes('project')
    );
    expect(projectImages.length).toBeGreaterThan(0);
  });
});