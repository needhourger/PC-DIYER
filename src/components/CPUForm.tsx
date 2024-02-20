"use client";

import { Form, Input, InputNumber, Select, Row, Col, Button } from "antd";
import FormItem from "antd/es/form/FormItem";
import { cpuManufacturer } from "@/libs/data";
import { CPUData } from "@/types";
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
    if (e.target === undefined) return;
    const { id, value } = e.target;
    let newVal = { ...cpu, [id]: value };
    setCpu(newVal);
    props.onChange(newVal.id - 1, newVal);
  };

  const handleManufacturerChange = (value: string) => {
    let newVal = { ...cpu, manufacturer: value };
    setCpu(newVal);
    props.onChange(newVal.id - 1, newVal);
  };

  const handleSocketChange = (value: string) => {
    let newVal = { ...cpu, socket: value };
    setCpu(newVal);
    props.onChange(newVal.id - 1, newVal);
  };

  const handlePriceChange = (value: any) => {
    let newVal = { ...cpu, price: value };
    setCpu(newVal);
    props.onChange(newVal.id - 1, newVal);
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
                onChange={handleManufacturerChange}></Select>
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="Socket" name="socket">
              <Select
                options={[]}
                mode="tags"
                style={{ width: "100%" }}
                value={cpu.socket}
                onChange={handleSocketChange}
                maxCount={1}></Select>
            </FormItem>
          </Col>
          <Col span={6} offset={6}>
            <FormItem label="Price" name="price">
              <InputNumber
                min={0}
                addonBefore="$"
                value={cpu.price}
                onChange={handlePriceChange}></InputNumber>
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
