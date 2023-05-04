import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title="home">
      <div className="flex flex-col justify-center items-center h-ninetyVH">
        <div className="ring ring-gray-50 rounded-lg flex flex-col justify-center items-center ">
          <Image
            src="/logo.png"
            alt="logo"
            width={400}
            height={400}
            className="mb-1"
          />
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-500 to-purple-500 text-center p-5">
            Granato&apos;s Auto Detailing
          </h1>
        </div>
      </div>
    </Layout>
  );
}
