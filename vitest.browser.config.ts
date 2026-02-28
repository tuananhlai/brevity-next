import { playwright } from "@vitest/browser-playwright";
import { defineConfig, mergeConfig } from "vitest/config";
import baseConfig from "./vite.config";

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      browser: {
        enabled: true,
        provider: playwright(),
        // https://vitest.dev/config/browser/playwright
        instances: [{ browser: "chromium" }],
      },
      setupFiles: ["./vitest.setup.ts"],
    },
  }),
);
