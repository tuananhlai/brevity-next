import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import React from "react";
import "@/styles/globals.scss";
import "@/styles/tokens.css";
import { AppProviders } from "../src/app/AppProviders";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
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
