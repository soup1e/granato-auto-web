import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="!z-5 relative flex flex-col md:w-96 max-w-screen-2xl">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
          Contact Us
        </div>

        <div className="mb-3">
          <label
            htmlFor="name"
            className="text-sm text-navy-700 dark:text-white block mb-2 font-bold"
          >
            Name
          </label>
          <input
            type="text"
            id="email"
            placeholder="Mike"
            className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="email"
            className="text-sm text-navy-700 dark:text-white block mb-2 font-bold"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="granatoauto@gmail.com"
            className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="phone"
            className="text-sm text-navy-700 dark:text-white block mb-2 font-bold"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            placeholder="630-512-1295"
            className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="text-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            How can we help?
          </label>
          <input
            type="text"
            id="text-input"
            placeholder="Ask us any questions"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
