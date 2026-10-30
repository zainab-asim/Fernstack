"use client";

import React, { useEffect, useState } from "react";

interface ThemeToggleProps {
  variant?: "nav" | "floating";
  className?: string;
}

export default function ThemeToggle({
  variant = "nav",
  className = "",
}: ThemeToggleProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // Read active theme from document element or localStorage
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

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        type="button"
        className={`theme-toggle-btn ${variant} ${className}`}
        aria-label="Toggle theme"
        title="Toggle Light / Dark Mode"
        style={{ opacity: 0.6 }}
      >
        <span className="theme-toggle-icon">🌙</span>
      </button>
    );
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      className={`theme-toggle-btn ${variant} ${isLight ? "is-light" : "is-dark"} ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? "Dark" : "Light"} Mode`}
      title={`Switch to ${isLight ? "Dark" : "Light"} Mode`}
    >
      <span className="theme-toggle-slider" aria-hidden="true">
        <span className="theme-toggle-thumb">
          {isLight ? (
            // Sun Icon for Light Mode
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sun-svg"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            // Moon Icon for Dark Mode
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="moon-svg"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </span>
      </span>
      <span className="theme-toggle-label">
        {isLight ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}
