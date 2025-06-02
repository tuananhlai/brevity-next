import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import { NextRouter, useRouter } from "next/router";
import { AppI18nProvider } from "@/components/app-i18n-provider";
import { ConfirmProvider } from "@/components/confirm-provider";
import { Provider } from "@/components/ui/provider";
import { ToastQueue, ToastRegion } from "@/components/ui/toast";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<NextRouter["push"]>[2]>;
  }
}

const queue = new ToastQueue();
const queryClient = new QueryClient();

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
          <AppI18nProvider>
            <ConfirmProvider>{children}</ConfirmProvider>
          </AppI18nProvider>
        </Provider>
      </QueryClientProvider>
      <ToastRegion queue={queue} />
    </>
  );
};

const inter = Inter({
  subsets: ["latin"],
});
