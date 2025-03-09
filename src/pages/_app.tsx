import type { AppProps } from "next/app";
import { AppProviders } from "@/app/AppProviders";
import "@/styles/globals.scss";
import "@/styles/tokens.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  );
}
