import { ComponentProps } from "react";
import { RouterProvider } from "react-aria-components";
import { Theme, ThemeProvider } from "./ThemeProvider";

export interface ProviderProps {
  /**
   * The function to be used for client-side navigation.
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
   */
  defaultTheme: Theme;
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = (props) => {
  const { children, navigate, defaultTheme } = props;

  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      <RouterProvider navigate={navigate}>{children}</RouterProvider>
    </ThemeProvider>
  );
};
