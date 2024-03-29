import React from "react";

export default function Testimonials() {
  return (
    <div className="container mx-auto">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
        Reviews
      </div>
      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Definitely be only going to you for detailing and waxing.
            </h3>
            <p className="my-4">
              &quot;Car looks great was really impressed at how good of a job
              you did.&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <span className="space-y-0.5 font-medium dark:text-white text-left">
              - Josh
            </span>
          </figcaption>
          <figcaption className="flex items-center justify-center space-x-3">
            <span className="space-y-0.5 font-medium text-gray-400 text-left">
              2023 Acura Integra
            </span>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              I showed my neighbor my car today.
            </h3>
            <p className="my-4">
              &quot;I&apos;m going to give him your card. I just loaded up my
              golf clubs. I hate to mess up the inside! It is soooooo
              clean!!&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <span className="space-y-0.5 font-medium dark:text-white text-left">
              - Patricia
            </span>
          </figcaption>
          <figcaption className="flex items-center justify-center space-x-3">
            <span className="space-y-0.5 font-medium text-gray-400 text-left">
              2019 Toyota RAV4
            </span>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Thanks again for your hard work.
            </h3>
            <p className="my-4">
              &quot;Car looks great was really impressed at how good of a job
              you did. The car looks so nice. I really admire your
              entrepreneurship.&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <span className="space-y-0.5 font-medium dark:text-white text-left">
              - Kathy
            </span>
          </figcaption>
          <figcaption className="flex items-center justify-center space-x-3">
            <span className="space-y-0.5 font-medium text-gray-400 text-left">
              2018 Toyota RAV4
            </span>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              My Friend&apos;s Car Shines Like Never Before
            </h3>
            <p className="my-4">
              &quot;Thank you for the exceptional job you did detailing my
              vehicle! I am extremely satisfied with the outcome and would
              highly recommend your services to others.&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <span className="space-y-0.5 font-medium dark:text-white text-left">
              - Jevin
            </span>
          </figcaption>
          <figcaption className="flex items-center justify-center space-x-3">
            <span className="space-y-0.5 font-medium text-gray-400 text-left">
              2020 Volkswagen Golf GTI
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
