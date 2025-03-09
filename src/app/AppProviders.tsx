import { Inter } from "next/font/google";
import { NextRouter, useRouter } from "next/router";
import { Provider } from "@/components/ui/provider";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<NextRouter["push"]>[2]>;
  }
}

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <>
      <style jsx global>{`
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
      `}</style>
      <Provider navigate={(href, opts) => router.push(href, undefined, opts)}>
        {children}
      </Provider>
    </>
  );
};

const inter = Inter({
  subsets: ["latin"],
});
