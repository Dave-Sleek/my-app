// components/ThemeSwitch.tsx

import { useThemeContext } from "./context";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useThemeContext();

  return (
    <div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle theme
      </button>
    </div>
  );
};
