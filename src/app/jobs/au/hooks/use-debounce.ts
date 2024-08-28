import { useEffect, useMemo, useRef } from "react";
import { debounce } from "@/lib/utils";

export const useDebounce = <T extends (...args: any[]) => any>({
  callback,
  delayMS,
}: {
  callback: T;
  delayMS: number;
}) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = (...args: Parameters<T>) => {
      if (ref.current) {
        return ref.current(...args);
      }
    };
    return debounce(func, delayMS);
  }, []);

  return debouncedCallback;
};
