import { useState, useEffect } from "react";

export default function useAnimation(ref) {
  const [isOnScreen, setIsOnScreen] = useState(false);
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
  }, [isOnScreen, ref]);

  const fadeInAnimation = () => {
    if (isOnScreen) {
      return "fade-in-animation";
    } else {
      return "no-animation";
    }
  };
  const rightAnimation = () => {
    if (isOnScreen) {
      return "right-to-left-animation";
    } else {
      return "no-animation";
    }
  };
  const bottomAnimation = () => {
    if (isOnScreen) {
      return "bottom-to-top-animation";
    } else {
      return "no-animation";
    }
  };
  const leftAnimation = () => {
    if (isOnScreen) {
      return "left-to-right-animation";
    } else {
      return "no-animation";
    }
  };
  useEffect(() => {
    fadeInAnimation();
    rightAnimation();
    bottomAnimation();
    leftAnimation();
  }, [isOnScreen, ref]);

  return [
    fadeInAnimation(),
    rightAnimation(),
    bottomAnimation(),
    leftAnimation(),
  ];
}

///should add in element
