import { Col, Form, Input, InputNumber, Row, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { cpuManufacturer } from "@/libs/data";
import { MotherBoardData } from "@/types";
import { useEffect, useState } from "react";

interface Props {
  data: MotherBoardData;
  onChange: Function;
}

export default function MotherBoardForm(props: Props) {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  const handleChange = (e: any) => {
    if (e.target === undefined) return;
    const { name, value } = e.target;
    let newVal = { ...data, [name]: value };
    setData(newVal);
    props.onChange(newVal);
  };

  const handleManufacturerChange = (value: string) => {
    let newVal = { ...data, manufacturer: value };
    setData(newVal);
    props.onChange(newVal);
  };

  const handleSocketChange = (value: string) => {
    let newVal = { ...data, socket: value };
    setData(newVal);
    props.onChange(newVal);
  };

  const handleChipsetChange = (value: string) => {
    let newVal = { ...data, chipset: value };
    setData(newVal);
    props.onChange(newVal);
  };

  const handlePriceChange = (value: any) => {
    let newVal = { ...data, price: value };
    setData(newVal);
    props.onChange(newVal);
  };

  return (
    <div className="p-3 border-b-2 border-dotted mb-3">
      <h1 className="py-3 text-lg font-bold">Mother Board</h1>
      <Form labelCol={{ span: 6 }}>
        <Row gutter={0}>
          <Col span={6}>
            <FormItem label="Manufacturer" name="manufacturer">
              <Select
                options={cpuManufacturer}
                style={{ width: "100%" }}
                value={data.manufacturer}
                onChange={handleManufacturerChange}></Select>
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="Socket" name="socket">
              <Select
                options={[]}
                mode="tags"
                maxCount={1}
                value={data.socket}
                onChange={handleSocketChange}></Select>
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="Chipset" name="chipset">
              <Select
                options={[]}
                mode="tags"
                maxCount={1}
                value={data.chipset}
                onChange={handleChipsetChange}></Select>
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="Price" name="price">
              <InputNumber
                min={0}
                addonBefore="$"
                value={data.price}
                onChange={handlePriceChange}
              />
            </FormItem>
          </Col>
          <Col span={18}>
            <FormItem label="Model" name="model" labelCol={{ span: 2 }}>
              <Input value={data.model} onChange={handleChange} />
            </FormItem>
          </Col>
          <Col span={18}>
            <FormItem label="Remark" name="remark" labelCol={{ span: 2 }}>
              <Input value={data.remark} onChange={handleChange} />
            </FormItem>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
