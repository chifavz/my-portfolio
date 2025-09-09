export async function handler(event, _context) {
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
    if (!data.title || !data.description || !data.technologies || !data.category) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Missing required fields: title, description, technologies, category' 
        }),
      };
    }

    // Check if environment variables are set for email notifications
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email configuration missing - project will be logged only');
    }

    // Log the project submission
    console.log('New MVP Project Submission:', {
      title: data.title,
      description: data.description,
      technologies: data.technologies,
      projectUrl: data.projectUrl,
      githubUrl: data.githubUrl,
      category: data.category,
      imageUrl: data.imageUrl,
      submittedAt: new Date().toISOString(),
    });

    // If email is configured, send notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const { createTransport } = await import('nodemailer');
        
        const transporter = createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: `New MVP Project Submission: ${data.title}`,
          html: `
            <h2>New MVP Project Submitted</h2>
            <p><strong>Title:</strong> ${data.title}</p>
            <p><strong>Description:</strong> ${data.description}</p>
            <p><strong>Technologies:</strong> ${data.technologies}</p>
            <p><strong>Category:</strong> ${data.category}</p>
            ${data.projectUrl ? `<p><strong>Live URL:</strong> <a href="${data.projectUrl}">${data.projectUrl}</a></p>` : ''}
            ${data.githubUrl ? `<p><strong>GitHub:</strong> <a href="${data.githubUrl}">${data.githubUrl}</a></p>` : ''}
            ${data.imageUrl ? `<p><strong>Screenshot:</strong> <a href="${data.imageUrl}">${data.imageUrl}</a></p>` : ''}
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email notification sent successfully');
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Don't fail the whole request if email fails
      }
    }

    // Success response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: 'Project submitted successfully',
        project: {
          title: data.title,
          category: data.category,
          submittedAt: new Date().toISOString(),
        }
      }),
    };

  } catch (error) {
    console.error('Error processing project submission:', error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
}