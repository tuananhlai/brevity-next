import { Global, css } from "@emotion/react";
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

const globalFont = css`
  :root {
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      avenir next,
      avenir,
      segoe ui,
      helvetica neue,
      Cantarell,
      Ubuntu,
      roboto,
      noto,
      helvetica,
      arial,
      sans-serif;
  }
`;
