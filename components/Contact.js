import React from "react";

export default function Contact() {
  return (
    <form>
      <div className="flex flex-col justify-center items-center h-ninetyVH">
        <div className="!z-5 relative flex flex-col w-96">
          <div className="relative flex flex-row justify-center">
            <h4 className="text-4xl font-bold text-navy-700 text-white mb-3 ">
              Contact Us
            </h4>
          </div>

          <div className="mb-3">
            <label
              for="name"
              class="text-sm text-navy-700 dark:text-white block mb-2 font-bold"
            >
              Name
            </label>
            <input
              type="text"
              id="email"
              placeholder="Mike"
              class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="mb-3">
            <label
              for="email"
              class="text-sm text-navy-700 dark:text-white block mb-2 font-bold"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="granatoauto@gmail.com"
              class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="mb-3">
            <label
              for="phone"
              class="text-sm text-navy-700 dark:text-white block mb-2 font-bold"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="630-512-1295"
              class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div class="mb-6">
            <label
              for="text-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              How can we help?
            </label>
            <input
              type="text"
              id="text-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
