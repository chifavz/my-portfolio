// functions/sendEmail.js

import { createTransport } from 'nodemailer';

export async function handler (event, _context) {
  // CORS headers to allow requests from any origin
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse the incoming JSON data
    const data = JSON.parse(event.body);

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields: name, email, message' }),
      };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email configuration missing');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Email service not configured' }),
      };
    }

    // Create a Nodemailer transporter using SMTP settings
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email address from environment variable
        pass: process.env.EMAIL_PASS, // Your Gmail App Password from environment variable
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address from environment variable
      to: process.env.EMAIL_USER, // Send to yourself (the portfolio owner)
      subject: `Portfolio Contact: ${data.name}`,
      text: `New contact form submission from ${data.name} (${data.email}):\n\n${data.message}`,
      replyTo: data.email, // Allow replying directly to the person who submitted the form
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    // Placeholder response (modify as needed)
    const response = {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully', info }),
    };

    return response;
  } catch (error) {
    // Handle errors
    console.error('Error sending email:', error);

    // Error response
    const response = {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };

    return response;
  }
}
