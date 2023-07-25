"use client";

import { useEffect, useState } from "react";

export const Button = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const r: HTMLDivElement | null = document.querySelector(":root");

    if (theme === "dark") {
      r?.style.setProperty("--foreground-rgb", "255, 255, 255");
      r?.style.setProperty("--background-rgb", "0, 0, 0");
    } else {
      r?.style.setProperty("--foreground-rgb", "0, 0, 0");
      r?.style.setProperty("--background-rgb", "255, 255, 255");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={changeTheme}
      className="py-3 px-5 rounded-md hover:opacity-75"
    >
      Change Theme
    </button>
  );
};
