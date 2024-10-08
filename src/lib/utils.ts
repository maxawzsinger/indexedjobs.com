import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const generate10KIncrements = ([start, end]: [
  number,
  number
]): string[] => {
  const increment = 10000;
  const result: number[] = [];

  // Find the nearest multiple of 10k lower than or equal to the start number
  let current = Math.floor(start / increment) * increment;

  for (let i = current; i <= end; i += increment) {
    result.push(i);
  }

  // Ensure the last value is the end number if it's not already included
  if (result[result.length - 1] !== end) {
    result.push(end);
  }

  return result.map((el) => el.toString());
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

export const getMidnightUnixTimestampDaysAgo = (daysAgo: number) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(0, 0, 0, 0); // Set to midnight
  return Math.floor(date.getTime() / 1000); // Convert to Unix timestamp
};
