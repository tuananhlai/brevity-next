import { Global } from "@emotion/react";
import { ComponentProps } from "react";
import { RouterProvider } from "react-aria-components";
import { globalStyles } from "@/styles/globalStyles";

export interface ProviderProps {
  navigate: ComponentProps<typeof RouterProvider>["navigate"];
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = (props) => {
  const { children, navigate } = props;

  return (
    <>
      <Global styles={globalStyles} />
      <RouterProvider navigate={navigate}>{children}</RouterProvider>
    </>
  );
};
