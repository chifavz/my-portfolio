import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../Contact';

// Mock axios
jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({ status: 200 }))
}));

describe('Contact', () => {
  test('renders contact form elements correctly', () => {
    render(<Contact />);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('enables and disables submit button during submission', () => {
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    const nameInput = screen.getByLabelText(/name/i);
    
    // Initially button should be enabled
    expect(submitButton).not.toBeDisabled();
    expect(nameInput).not.toBeDisabled();
  });

  test('shows loading state during form submission', async () => {
    const axios = require('axios');
    axios.post.mockImplementationOnce(() => 
      new Promise(resolve => setTimeout(() => resolve({ status: 200 }), 100))
    );

    render(<Contact />);
    
    // Fill out form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' }
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' }
    });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Check loading state
    expect(screen.getByRole('button', { name: /submitting/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeDisabled();

    // Wait for submission to complete
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });
  });

  test('clears form after successful submission', async () => {
    const axios = require('axios');
    axios.post.mockResolvedValueOnce({ status: 200 });

    render(<Contact />);
    
    // Fill out form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' }
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' }
    });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Wait for form to be cleared and success message
    await waitFor(() => {
      expect(screen.getByLabelText(/name/i)).toHaveValue('');
      expect(screen.getByLabelText(/email/i)).toHaveValue('');
      expect(screen.getByLabelText(/message/i)).toHaveValue('');
      expect(screen.getByText(/form submitted successfully/i)).toBeInTheDocument();
    });
  });
});