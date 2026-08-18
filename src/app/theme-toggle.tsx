"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
  };

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-background/90 backdrop-blur-sm transition-colors hover:bg-opacity-100"
      aria-label="Toggle dark/light theme"
    >
      {isDark ? (
        <svg
          className="h-6 w-6 text-zinc-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.365 5.09A9.92 9.92 0 0 0 15.194 0C8.71 0 3.36 5.56 1.11 12.09 0.6 15.78 2.23 17.7 4.39 19.06l2.456.862c.57.16.96.55 1.16.99.31.55.39.87.24 1.23a11.95 11.95 0 0 1-5.038 1.988l-.313.178c-.57.33-.95.79-1.13 1.33-.31.73-.5.98-.63 1.33-.15.45-.26.76-.43 1.04l1.605 1.605a13.96 13.96 0 0 1-1.928 2.258l.179.313a11.92 11.92 0 0 1-1.95 5.04c-.18.57-.42.95-.71 1.13a16.06 16.06 0 0 1-2.028 1.118l-.178-.313c-.57-.33-1.03-.8-1.28-1.33a12.03 12.03 0 0 0-1.068-1.068l-.313.178a13.98 13.98 0 0 1-2.258 1.928l.178.313c.57.33.99.71 1.17 1.16.31.55.31.96.09 1.23a9.95 9.95 0 0 0 1.988 5.038l.178-.313c.33-.57.8-.95 1.13-1.13.54-.31.87-.63 1.04-1.04l1.605-1.605c.57-.56.59-1.31.09-1.98a11.96 11.96 0 0 0-5.04-1.988l-.313-.178c-.33-.57-.8-.95-1.33-1.13-.73-.31-1.13-.5-.99-1.16-.16-.57-.09-1.06.09-1.63l.313-.178zM12 1L3 5v6l4 3v12l8-5v3l8-5V16l-8-3V5l-4 3V5L12 1z" />
        </svg>
      ) : (
        <svg
          className="h-6 w-6 text-zinc-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L2 7v10l10 5 10-5-10-5V7l-10 5V2zM2 17v5h20v-5H2zM2 12v5h20v-5H2v5H2V12z" />
        </svg>
      )}
    </button>
  );
}