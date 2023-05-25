import React, { useRef, useState, useEffect } from "react";
import Layout from "@/components/Layout";

export default function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.EMAILJS_USER_ID
      )
      .then(
        (result) => {
          form.current.reset();
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (messageSent) {
      setTimeout(() => {
        setMessageSent(false);
      }, 4000);
    }
  }, [messageSent]);

  return (
    <Layout title="contact">
      {messageSent && (
        <div className="sm:block lg:fixed lg:right-4 lg:top-10 w-full sm:w-auto rounded-lg bg-green-500 p-3 text-white opacity-100">
          Message Sent.
        </div>
      )}
      <div className="main flex flex-col justify-center items-center gap-5 lg:pt-64">
        <div className="h-screen flex flex-col justify-start items-center">
          <div className="ring ring-gray-400 rounded-lg p-4 max-w-screen-xl">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-gray-50">
                  Name
                </label>
                <input
                  type="text"
                  className="border border-gray-400 p-2 w-full bg-transparent focus:border-pink-500"
                  name="user_name"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-gray-50">
                  Email
                </label>
                <input
                  type="email"
                  className="border border-gray-400 p-2 w-full bg-transparent"
                  name="user_email"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-gray-50">
                  Message
                </label>
                <textarea
                  className="border border-gray-50 p-2 w-full bg-transparent"
                  name="message"
                  rows="3"
                />
              </div>
              <button
                type="submit"
                value="Send"
                className="ring ring-violet-500 hover:bg-indigo-900 text-gray-50 font-light py-0.5 px-7 rounded text-md lg:text-base hover:transition-all duration-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
