import * as React from "react";
import "../styles/global.css";
import { UseDarkMode } from "../hooks/index";
import { Branding } from "../components/index";

// markup
const IndexPage = () => {
  const [ColorTheme, SetTheme] = UseDarkMode();

  return (
    <main className="dark:bg-primary bg-white h-screen transition-colors duration-300">
      <Branding />
      <h1 className="text-black dark:text-white font-primary text-6xl">
        Startseite
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

export default IndexPage;
