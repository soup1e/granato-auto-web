import React from "react";
import Layout from "@/components/Layout";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <Layout title="contact">
      <div className="bg-gray-900">
        <Contact />
      </div>
    </Layout>
  );
}
