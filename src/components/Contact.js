import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to the Netlify Function endpoint
            const response = await axios.post('./netlify/functions/sendEmail', formData);

            // Check the response and handle accordingly
            if (response.status === 200) {
                setSubmissionStatus('success');
                // Optionally, you can reset the form after a successful submission
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmissionStatus('error');
        }
    };

    return (
        <div>
            <h2>Contact Me</h2>

            <section>
                <form onSubmit={handleSubmit} >

                    {/* Name input */}
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    {/* Email input */}
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    {/* Message textarea */}
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                    ></textarea>

                    {/* Submit button */}
                    <button type="submit">Submit</button>

                    {/* Submission status message */}
                    {submissionStatus === 'success' && (
                        <div className="success-message">Form submitted successfully!</div>
                    )}
                    {submissionStatus === 'error' && (
                        <div className="error-message">Error submitting form. Please try again later.</div>
                    )}
                </form>
            </section>
        </div>
    );
};

export default Contact;

