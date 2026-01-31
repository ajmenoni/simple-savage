import { useCallback } from "react";

export function useToggleSelection(setCharacter) {
  return useCallback(
    (field, item) => {
      setCharacter((prev) => {
        const list = Array.isArray(prev[field]) ? prev[field] : [];
        const exists = list.some((i) => i.id === item.id);

        return {
          ...prev,
          [field]: exists
            ? list.filter((i) => i.id !== item.id)
            : [...list, { ...item }],
        };
      });
    },
    [setCharacter]
  );
}
