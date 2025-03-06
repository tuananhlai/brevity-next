import { ComponentProps } from "react";
import { RouterProvider } from "react-aria-components";

export interface ProviderProps {
  navigate: ComponentProps<typeof RouterProvider>["navigate"];
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = (props) => {
  const { children, navigate } = props;

  return <RouterProvider navigate={navigate}>{children}</RouterProvider>;
};
