import { useEffect, useState } from "react";

export default function UseDarkMode() {
  if (typeof window !== "undefined") {
    const StorageCheck = localStorage.getItem("Theme") || "dark";

    const [Theme, SetTheme] = useState(StorageCheck);
    const ColorTheme = Theme === "light" ? "dark" : "light";
    useEffect(() => {
      localStorage.setItem("Theme", Theme);
      const root = window.document.documentElement;
      root.classList.remove(ColorTheme);
      root.classList.add(Theme);
    }, [Theme]);
    return [ColorTheme, SetTheme];
  }
}
