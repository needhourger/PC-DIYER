"use client";

import CPUForm from "@/components/CPUForm";
import Description from "@/components/Description";
import MotherBoardForm from "@/components/MotherBoardForm";
import PageHeader from "@/components/PageHeader";
import { CPUData, ConfigData } from "@/typs";
import { Button, Layout } from "antd";
import { useState } from "react";

const FormInit: ConfigData = {
  motherboard: {
    manufacturer: "",
    socket: "",
    model: "",
    price: 0,
  },
  cpus: [],
};

export default function Home() {
  const [form, setForm] = useState(FormInit);

  const handleCpuChange = (id: number, newVal: CPUData) => {
    const newList = [...form.cpus];
    newList[id] = newVal;
    setForm({ ...form, cpus: newList });
  };

  const handleAddCpu = () => {
    const cpu: CPUData = {
      id: form.cpus.length + 1,
      manufacturer: "",
      socket: "",
      model: "",
      price: 0,
      remark: "",
    };
    setForm({ ...form, cpus: [...form.cpus, cpu] });
    console.log(form);
  };

  const handleCpuRemove = (id: number) => {
    let newList = [...form.cpus];
    newList = newList.filter((item) => item.id !== id);
    setForm({ ...form, cpus: newList });
  };

  return (
    <Layout className="w-full">
      <PageHeader />
      <div className="p-10 bg-black">
        <Description />
      </div>
      <div className="px-10 bg-black h-50">
        <MotherBoardForm />
        {form.cpus.map((cpu) => (
          <CPUForm
            key={cpu.id}
            cpu={cpu}
            onChange={handleCpuChange}
            onRemove={handleCpuRemove}
          />
        ))}
        <div className="flex justify-center">
          <Button type="primary" onClick={handleAddCpu}>
            Add CPU
          </Button>
        </div>
      </div>
    </Layout>
  );
}
