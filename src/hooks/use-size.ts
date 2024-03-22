import { useEffect, useRef } from "react";

interface ISize {
  width: number;
  height: number;
}

function useSize<T extends HTMLDivElement>(
  onChange: ({ width, height }: ISize) => void
) {
  const ref = useRef<T>(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (!ref) {
      mounted.current = true;
    }
  }, [ref.current]);

  useEffect(() => {
    const onResize = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.width && rect.height) {
          const { width, height } = rect;
          onChange({ width: width, height: height });
        }
      }
    };
    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return { ref };
}

export default useSize;
