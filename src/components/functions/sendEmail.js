// functions/sendEmail.js

const axios = require('axios');

exports.handler = async function (event, context) {
  // CORS headers to allow requests from any origin
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    // Parse the incoming JSON data
    const data = JSON.parse(event.body);

    // Add your email sending logic here
    // For example, you can use a third-party service like SendGrid, Nodemailer, etc.

    // Placeholder response (modify as needed)
    const response = {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully' }),
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
};
