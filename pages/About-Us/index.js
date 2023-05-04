import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title="home">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-start gap-3">
          <div className="flex p-5 ring ring-gray-50 rounded-lg lg:flex-row lg:items-end gap-3 flex-col">
            <h1 className="py-2 overflow-visible text-2xl lg:text-5xl font-bold ease-in-out duration-700 text-transparent bg-clip-text bg-gradient-to-tr from-indigo-500 to-pink-500">
              Granato&apos;s Auto Detailing
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
