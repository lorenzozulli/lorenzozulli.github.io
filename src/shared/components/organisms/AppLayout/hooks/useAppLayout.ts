import { useLocation } from "@tanstack/react-router";
import { useState } from "react";

export const useAppLayout = () => {
  const location = useLocation();
  const [isAnimationEnded, setIsAnimationEnded] = useState(false);
  const pathname = location.pathname;

  return {
    isAnimationEnded,
    setIsAnimationEnded,
    pathname,
  }
}
