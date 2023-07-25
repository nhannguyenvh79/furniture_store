import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    const handleMouseenter = () => {
      setIsHover(true);
    };
    const handleMouseleave = () => {
      setIsHover(false);
    };
    if (el) {
      el.addEventListener("mouseenter", handleMouseenter);
      el.addEventListener("mouseleave", handleMouseleave);
    }
    return () => {
      el.removeEventListener("mouseenter", handleMouseenter);
      el.removeEventListener("mouseleave", handleMouseleave);
    };
  }, []);
  return [ref, isHover];
}
