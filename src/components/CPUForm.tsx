"use client";

import { Form, Input, InputNumber, Select, Row, Col, Button } from "antd";
import FormItem from "antd/es/form/FormItem";
import { cpuManufacturer } from "@/libs/data";
import { CPUData } from "@/typs";
import { useEffect, useState } from "react";
interface Props {
  cpu: CPUData;
  onChange: Function;
  onRemove: Function;
}

export default function CPUForm(props: Props) {
  const [cpu, setCpu] = useState(props.cpu);

  useEffect(() => {
    setCpu(props.cpu);
  }, [props.cpu]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCpu({ ...cpu, [name]: value });
    props.onChange(cpu.id - 1, cpu);
  };

  return (
    <div className="p-3 mb-3">
      <Form labelCol={{ span: 6 }} key={cpu.id}>
        <h1 className="py-3 text-lg font-bold">
          CPU{" "}
          <span className="px-2 text-sm rounded-md bg-green-600">{cpu.id}</span>
        </h1>
        <Row gutter={0}>
          <Col span={6}>
            <FormItem label="Manufacturer" name="manufacturer">
              <Select
                options={cpuManufacturer}
                style={{ width: "100%" }}
                value={cpu.manufacturer}
                onChange={handleChange}></Select>
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="Socket" name="socket">
              <Select
                options={[]}
                mode="tags"
                style={{ width: "100%" }}
                value={cpu.socket}
                onChange={handleChange}></Select>
            </FormItem>
          </Col>
          <Col span={6} offset={6}>
            <FormItem label="Price" name="price">
              <InputNumber
                min={0}
                addonBefore="$"
                value={cpu.price}
                onChange={handleChange}></InputNumber>
            </FormItem>
          </Col>
          <Col span={18}>
            <FormItem label="Model" name="model" labelCol={{ span: 2 }}>
              <Input value={cpu.model} onChange={handleChange} />
            </FormItem>
          </Col>
          <Col span={18}>
            <FormItem label="Remark" name="remark" labelCol={{ span: 2 }}>
              <Input value={cpu.remark} onChange={handleChange}></Input>
            </FormItem>
          </Col>
          <Col span={6}>
            <Button
              className=" float-end"
              onClick={() => props.onRemove(cpu.id)}>
              Remove
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
