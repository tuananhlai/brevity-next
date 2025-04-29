import { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export type Theme = "dark" | "light";

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  setTheme: () => {},
});

export interface ThemeProviderProps {
  defaultTheme: Theme;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  defaultTheme,
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // Sync the theme with the DOM.
  useEffect(() => {
    document.documentElement.setAttribute("data-mode", theme);
  }, [theme]);

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  return useContext(ThemeContext);
};
