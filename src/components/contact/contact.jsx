/* function Contact() {
  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-start bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mt-60">Contact Me</h1>
      <p className="mt-4 text-lg">Feel free to reach out to me using the form below.</p>
      <form className="w-full max-w-lg mt-10" onSubmit={handleFormSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-800" id="name" type="text" name="name" required />
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-800" id="email" type="email" name="email" required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-800" id="message" name="message" rows="5" required></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );

  async function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email.');
    }
  }
}

export default Contact;
 */

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
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Use the public key here
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

