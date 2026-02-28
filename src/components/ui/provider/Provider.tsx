import type { ComponentProps } from "react";
import { RouterProvider } from "react-aria-components";
import { type Theme, ThemeProvider } from "./ThemeProvider";

export interface ProviderProps {
  /**
   * The method to navigate client-size, provided by your routing
   * solution. It will be passed to the design system components so
   * that links will navigate correctly.
   *
   * @example
   * const navigate = useNavigate();
   *
   * <Provider navigate={navigate}>
   *   {children}
   * </Provider>
   */
  navigate: ComponentProps<typeof RouterProvider>["navigate"];
  /**
   * The default theme to be used for the application.
   *
   * @default "light"
   */
  defaultTheme?: Theme;
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = (props) => {
  const { children, navigate, defaultTheme = "light" } = props;

  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      <RouterProvider navigate={navigate}>{children}</RouterProvider>
    </ThemeProvider>
  );
};
