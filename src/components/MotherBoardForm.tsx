import { Form, Select } from "antd";
import FormItem from "antd/es/form/FormItem";

export default function MotherBoardForm() {
  return (
    <Form>
      <FormItem label="Socket Type" name="socketType">
        <Select></Select>
      </FormItem>
    </Form>
  );
}
