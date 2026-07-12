import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateDelay(
  index: number,
  base: number = 100,
  factor: number = 100,
) {
  const maxIndex = Math.min(index, 10);
  return `${maxIndex * factor + base}ms`;
}
