import { Global, css } from "@emotion/react";
import { Inter } from "next/font/google";
import { NextRouter, useRouter } from "next/router";

import { Provider } from "./ui/provider";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<NextRouter["push"]>[2]>;
  }
}

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <>
      <Global styles={globalFont} />
      <Provider navigate={(href, opts) => router.push(href, undefined, opts)}>
        {children}
      </Provider>
    </>
  );
};

const inter = Inter({
  subsets: ["latin"],
});

const globalFont = css`
  :root {
    font-family:
      ${inter.style.fontFamily},
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
