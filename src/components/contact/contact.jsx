import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      setStatus('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('Failed to send message.');
    }
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-start bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mt-60">Contact Me</h1>
      <form onSubmit={handleSubmit} className="mt-4 text-lg flex flex-col items-center">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-2 mb-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-2 mb-2 border rounded"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="p-2 mb-2 border rounded"
          required
        ></textarea>
        <button type="submit" className="p-2 bg-blue-500 rounded text-white hover:bg-blue-700">
          Send Message
        </button>
        {status && <p className="mt-2">{status}</p>}
      </form>
    </div>
  );
}

export default Contact;
