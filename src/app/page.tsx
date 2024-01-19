import PageHeader from "@/components/pageHeader";
import { Button, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout className="w-full">
      <PageHeader />
    </Layout>
  );
}
