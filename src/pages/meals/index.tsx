import * as React from "react";
import "../../styles/global.css";
import { UseDarkMode } from "../../hooks/index";

// markup
const Meals = () => {
  const [ColorTheme, SetTheme] = UseDarkMode();

  return (
    <main className="dark:bg-primary bg-white h-screen">
      <h1 className="text-black dark:text-white font-primary text-6xl">
        Meals
      </h1>
      <button
        onClick={() => {
          SetTheme(ColorTheme === "light" ? "light" : "dark");
        }}
      >
        Switch Theme
      </button>
    </main>
  );
};

export default Meals;
