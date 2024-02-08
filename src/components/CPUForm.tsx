import { Form, Input, InputNumber, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import { cpuManufacturer } from "@/libs/data";

interface Props {
  no: number;
}

export default function CPUForm(props: Props) {
  return (
    <div>
      <div className="me-3">
        CPU <span className="px-2 rounded-md bg-green-600">{props.no}</span>
      </div>
    </div>
  );
}
