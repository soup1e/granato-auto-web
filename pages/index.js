import Contact from "@/components/Contact";
import Layout from "@/components/Layout";
import Pricing from "@/components/Pricing";
import ScrollDownButton from "@/components/ScrollDownSvg";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";
import bgImage from "../public/cars/IMG_6387.JPG";

export default function Home() {
  return (
    <Layout title="home">
      <div
        className="flex flex-col justify-center h-screen items-center bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .90), rgba(0, 0, 0, 0.5)), url(${bgImage.src})`,
          width: "100%",
        }}
      >
        <div className="md:ring ring-gray-50 rounded-lg flex flex-col justify-center items-center ">
          <Image
            src="/logo.png"
            alt="logo"
            width="400"
            height="400"
            className="mb-1"
          />
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-500 to-pink-500 p-5">
            Granato&apos;s Auto Detailing
          </h1>
        </div>
      </div>

      <ScrollDownButton />

      <div className="flex justify-center isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our Promise
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Cleaning is our thing! Customers come for our excellent service
              and leave feeling like part of the Granato family. One thing is
              for sure- your vehicle will never look as good as it does after
              leaving our lot! We never compromise on quality, even if it means
              taking extra time, and we always offer availability that aligns
              with our clients&apos; schedules. Honesty is our foundation for
              providing exceptional customer service, Rest assured, this is our
              commitment to you.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {/* <Link href="/our-work">
                Our Work <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/about">
                About us <span aria-hidden="true">&rarr;</span>
              </Link> */}
              <Link href="/contact">
                Contact <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <Pricing />
      <Contact />
    </Layout>
  );
}
