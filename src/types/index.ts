export interface VirtualMachine {
  id: string;
  state: boolean;
  hostServer: string;
  cpuValue: number;
  cpu: number;
  memoryValue: number;
  memory: number;
  memoryUnit: string;
  createdAt: string;
  alerts: {
    critical: number;
    important: number;
    moderate: number;
  };
}