import { useRef } from "react";

export default function useLongPress(onLongPress, delay = 500) {
  const timeRef = useRef(null);

  const start = () => {
    timeRef.current = setTimeout(() => {
      if (navigator.vibrate) {
        navigator.vibrate(25);
      }
      onLongPress();
    }, delay);
  };

  const clear = () => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
      timeRef.current = null;
    }
  };

  return {
    onTouchStart: start,
    onTouchEnd: clear,
    onTouchMove: clear,
    onMouseDown: start,
    onMouseUp: clear,
    onMouseLeave: clear,
  };
}
