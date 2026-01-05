import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use instant to avoid smooth scroll lag on nav
    });
  }, [pathname]);

  return null;
}
