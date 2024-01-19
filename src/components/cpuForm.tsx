import { Form, Input, Select } from "antd";
import FormItem from "antd/es/form/FormItem";

export default function CPUForm() {
  return (
    <Form layout="vertical" variant="filled">
      <FormItem label="CPU">
        <Input />
        <Select></Select>
      </FormItem>
    </Form>
  );
}
