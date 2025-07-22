import { getWebInstrumentations, initializeFaro } from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";
import type { AppProps } from "next/app";
import { AppProviders } from "@/components/AppProviders";
import { RootLoader } from "@/components/root-loader";
import "@/styles/globals.scss";
import "@/styles/tokens.scss";

if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
  initializeFaro({
    url: "https://faro-collector-prod-us-east-0.grafana.net/collect/f43577d5e0d5db6867e8f2b828a0c618",
    app: {
      name: "brevity-web",
      version: "0.0.1",
      environment: "production",
    },

    instrumentations: [
      // Mandatory, omits default instrumentations otherwise.
      ...getWebInstrumentations(),

      // Tracing package to get end-to-end visibility for HTTP requests.
      new TracingInstrumentation(),
    ],
  });
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <RootLoader>
        <Component {...pageProps} />
      </RootLoader>
    </AppProviders>
  );
}
