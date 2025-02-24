import { Global, css } from "@emotion/react";
import { Inter } from "next/font/google";
import { NextRouter, useRouter } from "next/router";
import { RouterProvider } from "react-aria-components";

import { globalStyles } from "@/styles/globalStyles";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<NextRouter["push"]>[2]>;
  }
}

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <>
      <Global styles={globalStyles} />
      <Global styles={globalFont} />
      <RouterProvider
        navigate={(href, opts) => router.push(href, undefined, opts)}
      >
        {children}
      </RouterProvider>
    </>
  );
};

const inter = Inter({
  subsets: ["latin"],
});
const globalFont = css`
  :root {
    font-family:
      ${inter.style.fontFamily}, ui-sans-serif, system-ui, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
  }
`;
