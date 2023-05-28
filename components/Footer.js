import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-950">
      <div className="mx-auto w-full max-w-screen-xl p-2 py-6 lg:py-4">
        <div className="md:flex md:justify-between items-center">
          <div className="flex flex-col md:justify-between gap-x-4 items-center">
            <Link href="/" className="text-xl text-gray-300 hover:underline">
              Granato&apos;s Auto Detailing
            </Link>
            <span className="text-gray-300 text-xl">630-512-1295</span>
            <span className="text-gray-300 text-xl">granatoauto@gmail.com</span>
          </div>
          <div className="flex mt-4 space-x-6 justify-center sm:mt-0 hover:fill-indigo-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/granatoautodetailing/"
            >
              <svg
                className="hover:fill-indigo-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200"
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:granatoauto@gmail.com"
            >
              <svg
                className="hover:fill-indigo-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200"
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/micael.granato.3"
            >
              <svg
                className="hover:fill-indigo-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200"
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/micael.granato.3"
            >
              <svg
                className="hover:fill-indigo-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200"
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
