import type { Preview } from "@storybook/react-vite";
import { AppProviders } from "../src/components/AppProviders";
import "../src/styles/globals.scss";
import "../src/styles/tokens.scss";

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
    (Story) => (
      <AppProviders>
        <Story />
      </AppProviders>
    ),
  ],
};

export default preview;
