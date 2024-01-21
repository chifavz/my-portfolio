// functions/sendEmail.js

import { createTransport } from 'nodemailer';

export async function handler (event, _context) {
  // CORS headers to allow requests from any origin
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    // Parse the incoming JSON data
    const data = JSON.parse(event.body);

    // Create a Nodemailer transporter using SMTP settings
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: 'chifavz@gmail.com', // Your Gmail email address
        pass: 'Kezie1976@', // Your Gmail password or App Password
      },
    });

    // Email content
    const mailOptions = {
      from: 'chifavz@gmail.com', // Sender address (must be a Gmail address)
      to: data.email, // Recipient's email address
      subject: 'Subject of the email',
      text: `Hello ${data.name},\n\n${data.message}`,
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
