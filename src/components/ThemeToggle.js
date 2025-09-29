import React from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-gray-200 text-gray-800 transition duration-300 hover:scale-105 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-light-blue dark:bg-slate-800 dark:text-gray-100 dark:hover:bg-slate-700 ${className}`}
      aria-label={`Activate ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <BsSunFill className="h-5 w-5" /> : <BsMoonStarsFill className="h-5 w-5" />}
    </button>
  );
};

export default ThemeToggle;

