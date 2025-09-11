import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewProjectForm from '../NewProjectForm';

describe('NewProjectForm', () => {
  test('renders form elements correctly', () => {
    render(<NewProjectForm />);
    
    expect(screen.getByLabelText(/project title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/technologies used/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project category/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit project/i })).toBeInTheDocument();
  });

  test('clears form after successful submission with onSubmit prop', async () => {
    const mockOnSubmit = jest.fn();
    render(<NewProjectForm onSubmit={mockOnSubmit} />);
    
    // Fill out form
    fireEvent.change(screen.getByLabelText(/project title/i), {
      target: { value: 'Test Project' }
    });
    fireEvent.change(screen.getByLabelText(/project description/i), {
      target: { value: 'Test Description' }
    });
    fireEvent.change(screen.getByLabelText(/technologies used/i), {
      target: { value: 'React, Jest' }
    });
    fireEvent.change(screen.getByLabelText(/project category/i), {
      target: { value: 'web-app' }
    });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /submit project/i }));

    // Wait for submission to complete
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        title: 'Test Project',
        description: 'Test Description',
        technologies: 'React, Jest',
        projectUrl: '',
        githubUrl: '',
        category: 'web-app',
        imageUrl: ''
      });
    });

    // Check that form is cleared
    await waitFor(() => {
      expect(screen.getByLabelText(/project title/i)).toHaveValue('');
      expect(screen.getByLabelText(/project description/i)).toHaveValue('');
      expect(screen.getByLabelText(/technologies used/i)).toHaveValue('');
      expect(screen.getByLabelText(/project category/i)).toHaveValue('');
    });

    // Check success message is displayed
    expect(screen.getByText(/project submitted successfully/i)).toBeInTheDocument();
  });

  test('calls onSubmit with form data when submitted', async () => {
    const mockOnSubmit = jest.fn();
    render(<NewProjectForm onSubmit={mockOnSubmit} />);
    
    // Fill required fields
    fireEvent.change(screen.getByLabelText(/project title/i), {
      target: { value: 'Test Project' }
    });
    fireEvent.change(screen.getByLabelText(/project description/i), {
      target: { value: 'Test Description' }
    });
    fireEvent.change(screen.getByLabelText(/technologies used/i), {
      target: { value: 'React' }
    });
    fireEvent.change(screen.getByLabelText(/project category/i), {
      target: { value: 'web-app' }
    });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /submit project/i }));

    // Check that onSubmit was called with correct data
    expect(mockOnSubmit).toHaveBeenCalledWith({
      title: 'Test Project',
      description: 'Test Description',
      technologies: 'React',
      projectUrl: '',
      githubUrl: '',
      category: 'web-app',
      imageUrl: ''
    });
  });
});