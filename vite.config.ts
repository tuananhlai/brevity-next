import { lingui } from "@lingui/vite-plugin";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react({
      babel: {
        plugins: ["@lingui/babel-plugin-lingui-macro"],
      },
    }),
    lingui(),
  ],
  resolve: {
    alias: {
      // enable absolute imports (i.e "@/components/button"). `tsconfig.app.json`
      // needs to be configured to use the same alias as well so that IDE autocompletion works correctly.
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
