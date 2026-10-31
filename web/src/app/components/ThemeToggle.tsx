"use client";

import React, { useEffect, useState } from "react";

interface ThemeToggleProps {
  variant?: "nav" | "floating";
  className?: string;
}

export default function ThemeToggle({
  className = "",
}: ThemeToggleProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const current =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark";
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("fernstack-theme", nextTheme);
    } catch {
      // ignore in restricted environments
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className={`theme-emoji-btn ${className}`}
        aria-label="Toggle theme"
        title="Toggle Theme"
        style={{ opacity: 0.6 }}
      >
        <span className="theme-emoji-glyph">🌙</span>
      </button>
    );
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      className={`theme-emoji-btn ${isLight ? "is-light" : "is-dark"} ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? "Dark" : "Light"} Mode`}
      title={`Switch to ${isLight ? "Dark" : "Light"} Mode`}
    >
      <span className="theme-emoji-glyph" aria-hidden="true">
        {isLight ? "☀️" : "🌙"}
      </span>
    </button>
  );
}
