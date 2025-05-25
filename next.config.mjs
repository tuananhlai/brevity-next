import FaroSourceMapUploaderPlugin from "@grafana/faro-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // https://github.com/vercel/next.js/issues/71638#issuecomment-2431137842
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    remotePatterns: [
      {
        hostname: "api.dicebear.com",
      },
    ],
  },
  webpack: (config, { dev }) => {
    if (!dev) {
      // Pushing the application source map to Grafana Faro for debugging production issues.
      config.plugins.push(
        new FaroSourceMapUploaderPlugin({
          appName: "brevity-web",
          endpoint: "https://faro-api-prod-us-east-0.grafana.net/faro/api/v1",
          appId: "2927",
          stackId: "865143",
          // instructions on how to obtain your API key are in the documentation
          // https://grafana.com/docs/grafana-cloud/monitor-applications/frontend-observability/sourcemap-upload-plugins/#obtain-an-api-key
          apiKey: "f43577d5e0d5db6867e8f2b828a0c618",
          gzipContents: true,
        }),
      );
    }
    return config;
  },
};

export default nextConfig;
