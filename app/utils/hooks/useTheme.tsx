import { useEffect, useState } from "react";

export default function (initialTheme: "dark" | "light" = "light") {
  const [theme, set] = useState<"dark" | "light">(initialTheme);

  const setDarkTheme = () => set("dark");

  const setLightTheme = () => set("light");

  const toggleTheme = () => (theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.classList.remove("dark");
    document.body.classList.remove("light");
    document.body.classList.add(theme);
  }, [theme]);

  // @TODO: el initialTheme debería aplicarse de prime instancia en este hook.
  // @TODO: no debería haber una inicialización del tema en root.

  return { theme, setDarkTheme, setLightTheme, toggleTheme };
}
