import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/nextjs";
import React from "react";
import "@/styles/globals.scss";
import "@/styles/tokens.scss";
import { AppProviders } from "../src/components/AppProviders";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Disable Chromatic snapshotting behavior by default
    // to save on Chromatic credits. It should be enabled
    // manually for stories that need it.
    chromatic: {
      disableSnapshot: true,
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-mode",
    }),
    (storyFn) => <AppProviders>{storyFn()}</AppProviders>,
  ],
};

export default preview;
