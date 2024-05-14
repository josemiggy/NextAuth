import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs));
}

export function createQueryString(query: { [key: string]: any }) {
  const params = new URLSearchParams();
  Object.keys(query).map((k) => {
    params.set(k, query[k]);
  });

  return params.toString();
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}