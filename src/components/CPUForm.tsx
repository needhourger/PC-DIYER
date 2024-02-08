import { Form, Input, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { cpuManufacturer } from "@/libs/data";

interface Props {
  no: number;
}

export default function CPUForm(props: Props) {
  return (
    <div className="flex items-center">
      <h2 className="me-2">
        CPU <span className=" rounded-sm bg-green-600 px-1">{props.no}</span>
      </h2>
      <Form layout="inline" variant="filled">
        <FormItem label="Manufacturer">
          <Select
            placeholder="Select a manufacturer"
            options={cpuManufacturer}
            style={{ width: 200 }}></Select>
        </FormItem>
        <FormItem label="Model">
          <Input />
        </FormItem>
      </Form>
    </div>
  );
}
