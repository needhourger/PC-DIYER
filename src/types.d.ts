export interface ConfigData {
  motherboard: MotherBoardData;
  cpus: CPUData[];
}

export interface MotherBoardData {
  manufacturer: string;
  socket: string;
  chipset: string;
  model: string;
  price: number;
  remark: string;
}

export interface CPUData {
  id: number;
  manufacturer: string;
  socket: string;
  model: string;
  price: number;
  remark: string;
}
