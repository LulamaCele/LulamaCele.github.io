import React from "react";
//import usestate
import { useState } from "react";
//import emailjs
import emailjs from '@emailjs/browser';

export const Contact = () => {
  //declare states for the form input/s
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //Send email containing data in the form when button send clicked
  const handleSubmit = (e) => {
    e.preventDefault();

    // Emailjs service ID, template ID, and Public Key
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    // Create a new object that contains dynamic template params

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    //send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('Email sent successfully!', response);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
  }

  return (
    <div className="bg-[#11235A]" id="contact">
        <div className="flex flex-col px-6 md:grid md:grid-cols-2 md:items-center">
          <div className="flex flex-col items-center">
            <div className="py-3 font-medium text-2xl text-white">Contact</div>
            <p className="pb-3 text-gray-200 text-center">
              Please feel free to contact me if you would like to work with me.
            </p>
          </div>
          <div
            className="bg-[#11235A] shadow-lg shadow-blue-400/20
           flex flex-col justify-center items-center my-6 rounded p-3"
          >
            <form  onSubmit={handleSubmit} name="contact" netlify>
              <input
                type="text"
                placeholder="Enter your name..."
                className="mb-3 h-10 w-full rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Enter your email address..."
                name=""
                id=""
                className="mb-3 h-10 w-full rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name=""
                id=""
                rows="10"
                placeholder="Message..."
                className="w-full rounded"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                className="w-full bg-cyan-400 hover:bg-cyan-500
             text-center text-white font-medium text-2xl py-3 
             px-12 rounded"
              >
                Send
              </button>
            </form>
          </div>
        </div>
    </div>
  );
};
