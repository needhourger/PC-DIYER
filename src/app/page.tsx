import CPUForm from "@/components/cpuForm";
import Description from "@/components/description";
import PageHeader from "@/components/pageHeader";
import { Button, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout className="w-full">
      <PageHeader />
      <div className="p-10 bg-black">
        <Description />
      </div>
      <div className="px-10 bg-black h-50">
        <h1>DIY</h1>
        <CPUForm />
      </div>
    </Layout>
  );
}
