import { useState, useCallback } from "react";
import SLIDE from "../constants/slideDirections";

export function useSlide(initialDirection = SLIDE.LEFT) {
  const [direction, setDirection] = useState(initialDirection);
  const [isIn, setIsIn] = useState(true);
  const [enabled, setEnabled] = useState(true);

  const slideIn = useCallback(
    (dir = direction) => {
      if (!enabled) return;
      setDirection(dir);
      setIsIn(true);
    },
    [direction, enabled]
  );

  const slideOut = useCallback(
    (dir = direction) => {
      if (!enabled) return;
      setDirection(dir);
      setIsIn(false);
    },
    [direction, enabled]
  );

  const disable = useCallback(() => {
    setEnabled(false);
  }, []);

  const className = enabled
    ? `slide ${isIn ? `slide-in-${direction}` : `slide-out-${direction}`}`
    : "";

  return {
    className,
    slideIn,
    slideOut,
    disable,
  };
}
