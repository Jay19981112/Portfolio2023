'use client'

import React, { useRef } from 'react';
import { motion } from "framer-motion";

function ContactForm() {

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("送信中・・・");
    console.log(nameRef.current?.value);

    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log("送信に成功しました");
    });
  };

  return (
    <div id='contact' className='mx-auto container'>
      <div className='flex flex-col justify-center items-center h-screen'>
        <h2 className="flex flex-col justify-center items-center text-3xl sm:text-5xl py-32 font-bol">Contact</h2>
        <div className="mx-auto mt-10 p-4 sm:p-8 bg-white rounded-2xl shadow-md w-8/12 sm:w-8/12 md:w-8/12 lg:w-7/12 xl:w-6/12">
          <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e) }>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                ref={nameRef}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                ref={emailRef}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                ref={messageRef}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
            </div>
            <div className="text-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
