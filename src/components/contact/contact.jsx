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

/* import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_1tpllji', 
      'template_h11lyoj', 
      form.current, 
      'kzUIZNBLdSoa2gXG0'
    )
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-start bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mt-60">Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="mt-4 text-lg flex flex-col items-center">
        <label className="text-xl mb-2">Name</label>
        <input 
          type="text" 
          name="user_name" 
          className="p-2 mb-2 border rounded" 
          required 
        />
        <label className="text-xl mb-2">Email</label>
        <input 
          type="email" 
          name="user_email" 
          className="p-2 mb-2 border rounded" 
          required 
        />
        <label className="text-xl mb-2">Message</label>
        <textarea 
          name="message" 
          className="p-2 mb-2 border rounded" 
          required 
        />
        <input 
          type="submit" 
          value="Send" 
          className="p-2 bg-blue-500 rounded text-white hover:bg-blue-700" 
        />
      </form>
    </div>
  );
};

export default Contact; */


/* import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_1tpllji', 
      'template_h11lyoj', 
      form.current, 
      'kzUIZNBLdSoa2gXG0'
    )
    .then(
      () => {
        console.log('SUCCESS!');
        alert('Email sent successfully!');
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send email.');
      }
    );
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-start bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mt-60">Contact Me</h1>
      <p className="mt-4 text-lg">Feel free to reach out to me using the form below.</p>
      <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg mt-10">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="user_name">
              Name
            </label>
            <input 
              className="appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-800" 
              id="user_name" 
              type="text" 
              name="user_name" 
              required 
            />
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="user_email">
              Email
            </label>
            <input 
              className="appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-800" 
              id="user_email" 
              type="email" 
              name="user_email" 
              required 
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea 
              className="appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-800" 
              id="message" 
              name="message" 
              rows="5" 
              required 
            ></textarea>
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
};

export default Contact; */

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_1tpllji', 
      'template_h11lyoj', 
      form.current, 
      'kzUIZNBLdSoa2gXG0'
    )
    .then(
      () => {
        console.log('SUCCESS!');
        setIsSubmitted(true);
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-start bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mt-60">Contact Me</h1>
      {isSubmitted ? (
        <div className="mt-4 text-lg text-center">
          <p>Thank you for your message!</p>
          <p>I will get back to you as soon as possible.</p>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="mt-4 text-lg flex flex-col items-center w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6 w-full">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input 
                className="appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-800" 
                id="name" 
                type="text" 
                name="user_name" 
                required 
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input 
                className="appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-800" 
                id="email" 
                type="email" 
                name="user_email" 
                required 
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 w-full">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea 
                className="appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-800" 
                id="message" 
                name="message" 
                rows="5" 
                required
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;

/* import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_1tpllji', 
      'template_h11lyoj', 
      form.current, 
      'kzUIZNBLdSoa2gXG0'
    )
    .then(
      () => {
        console.log('SUCCESS! Email sent.');
        setIsSubmitted(true);
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
        }, 5000); 
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-start bg- text-white">
      <h1 className="text-4xl font-bold mt-60">Contact Me</h1>
      {isSubmitted ? (
        <div className="mt-4 text-lg text-center relative" style={{ width: '100%', height: '100%' }}>
          {showConfetti && <Confetti width={width} height={height} numberOfPieces={500} />}
          <p>Thank you for your message!</p>
          <p>We will get back to you as soon as possible.</p>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="mt-4 text-lg flex flex-col items-center w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6 w-full">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input 
                className="appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-800" 
                id="name" 
                type="text" 
                name="user_name" 
                required 
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input 
                className="appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-800" 
                id="email" 
                type="email" 
                name="user_email" 
                required 
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 w-full">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea 
                className="appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-800" 
                id="message" 
                name="message" 
                rows="5" 
                required
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact; */









