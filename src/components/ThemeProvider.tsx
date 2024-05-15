
import { createContext, useContext } from "react";
//import { PropsWithChildren, createContext, useState } from "react";

export type ContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};
export const ThemeContext = createContext<ContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used inside the ThemeProvider");
  }

  return context;
};