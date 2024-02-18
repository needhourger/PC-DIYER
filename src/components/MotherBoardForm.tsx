import { Col, Form, Input, InputNumber, Row, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import CPUForm from "./CPUForm";
import { cpuManufacturer } from "@/libs/data";

export default function MotherBoardForm() {
  return (
    <div className="p-3 border-b-2 border-dotted mb-3">
      <h1 className="py-3 text-lg font-bold">Mother Board</h1>
      <Form labelCol={{ span: 6 }}>
        <Row gutter={0}>
          <Col span={6}>
            <FormItem label="Manufacturer" name="manufacturer">
              <Select
                options={cpuManufacturer}
                style={{ width: "100%" }}></Select>
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="Socket" name="socket">
              <Select options={[]} mode="tags"></Select>
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="Chipset" name="chipset">
              <Select></Select>
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="Price" name="price">
              <InputNumber min={0} addonBefore="$" />
            </FormItem>
          </Col>
          <Col span={18}>
            <FormItem label="Model" name="model" labelCol={{ span: 2 }}>
              <Input />
            </FormItem>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
