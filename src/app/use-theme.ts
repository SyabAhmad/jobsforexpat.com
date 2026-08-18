"use client";

import { useEffect } from "react";

export function useTheme() {
  useEffect(() => {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      html.classList.add("dark");
    } else if (savedTheme === "light") {
      html.classList.remove("dark");
    } else {
      // Check prefers-color-scheme if no saved preference
      if (window.matchMedia) {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        if (mq.matches) {
          html.classList.add("dark");
        }
      }
    }

    const onChange = (e: MediaQueryList) => {
      if (e.matches) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
}