import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import { NextRouter, useRouter } from "next/router";
import { Provider } from "@/components/ui/provider";
import { ToastQueue, ToastRegion } from "@/components/ui/toast";
import { messages as en } from "@/locales/en";
import { messages as ja } from "@/locales/ja";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<NextRouter["push"]>[2]>;
  }
}

const queue = new ToastQueue();
const queryClient = new QueryClient();

i18n.load({
  en: en,
  ja: ja,
});
i18n.activate("en");

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
      <QueryClientProvider client={queryClient}>
        <Provider navigate={(href, opts) => router.push(href, undefined, opts)}>
          <I18nProvider i18n={i18n}>{children}</I18nProvider>
        </Provider>
      </QueryClientProvider>
      <ToastRegion queue={queue} />
    </>
  );
};

const inter = Inter({
  subsets: ["latin"],
});
