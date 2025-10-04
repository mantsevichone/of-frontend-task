import type { VirtualMachine } from "../../types";
import type { Order } from "./types";

export function compare(
  a: VirtualMachine,
  b: VirtualMachine,
  orderBy: keyof VirtualMachine
) {
  let valueA, valueB;

  if (orderBy === "createdAt") {
    valueA = new Date(a[orderBy]).getTime();
    valueB = new Date(b[orderBy]).getTime();
  } else {
    valueA = a[orderBy];
    valueB = b[orderBy];
  }
  if (valueB < valueA) {
    return -1;
  }
  if (valueB > valueA) {
    return 1;
  }
  return 0;
}

export function getComparator(order: Order, orderBy: keyof VirtualMachine) {
  return (a: VirtualMachine, b: VirtualMachine) =>
    order === "desc" ? compare(a, b, orderBy) : -compare(a, b, orderBy);
}

export function formatDuration(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days}:${hours}:${minutes}:${seconds}`;
}