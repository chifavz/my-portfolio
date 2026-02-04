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
    
    // Check that project links are displayed (using getAllByText since we now have multiple projects)
    const projectLinks = screen.getAllByText(/view live project/i);
    expect(projectLinks.length).toBeGreaterThan(0);
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

  test('renders Geo-map project card', () => {
    render(<Showcase />);
    
    // Check that Geo-map project is displayed
    expect(screen.getByRole('heading', { level: 2, name: /geo-map/i })).toBeInTheDocument();
    expect(screen.getByText(/users grouped by location/i)).toBeInTheDocument();
    expect(screen.getByText(/leaflet/i)).toBeInTheDocument();
  });
});