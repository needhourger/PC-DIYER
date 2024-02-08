export interface MotherBoardData {
  manufacturer: string;
  socket: string;
  model: string;
  price: number;
  cpus: CPUForm[];
}

export interface CPUData {
  manufacturer: string;
  model: string;
  price: number;
}
