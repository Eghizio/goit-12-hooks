import { useState } from "react";

export const useToggle = (initialyEnabled = true) => {
  const [enabled, setEnabled] = useState(initialyEnabled);

  const toggle = () => setEnabled(prev => !prev);

  return [enabled, toggle] as const;
};