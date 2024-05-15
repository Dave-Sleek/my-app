import { PropsWithChildren, useState } from "react";
import { ContextType, ThemeContext } from "./ThemeProvider";


export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
    const [theme, setTheme] = useState<ContextType["theme"]>("");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
