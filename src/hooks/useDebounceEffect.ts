import debounce from "just-debounce-it";
import { useEffect } from "react";

export interface IUseDebounceParams {
  callback: () => void;
  debounceTime?: number;
  condition?: boolean; // This condition should be true to allow execute the callback
}

const useDebounceEffect = ({
  callback,
  debounceTime = 500,
  condition = false,
}: IUseDebounceParams) => {
  useEffect(() => {
    let mounted = true;

    const functionDebounced = debounce(() => {
      if (mounted && condition) {
        callback();
      }
    }, debounceTime);

    functionDebounced();

    return () => {
      mounted = false;
    };
  }, [condition, debounceTime, callback]);
};
export default useDebounceEffect;
