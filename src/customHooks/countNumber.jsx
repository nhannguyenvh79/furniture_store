import { useEffect, useRef, useState } from "react";

export default function useCountNumber(start, end) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const [state, setState] = useState(start);
  const ref = useRef();
  const timer = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (
          ref.current.getBoundingClientRect().top >=
          0.9 * window.innerHeight
        ) {
          setIsOnScreen(false);
        } else {
          setIsOnScreen(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const count = () => {
      timer.current = setInterval(() => {
        if (state < end) {
          setState((prev) => prev + 1);
        } else if (state >= end) {
          clearInterval(timer.current);
        }
      }, 20);
    };
    isOnScreen && count();
    return () => {
      clearInterval(timer.current);
    };
  }, [isOnScreen, state]);

  useEffect(() => {
    !isOnScreen && setState(start);
  }, [isOnScreen]);
  return [state, ref];
}

//[number, ref] = usecountbumber(start,end)
