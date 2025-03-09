import { Meta, StoryObj } from "@storybook/react";
import { ToggleColorSchemeButton } from "./ToggleColorSchemeButton";

const meta: Meta<typeof ToggleColorSchemeButton> = {
  component: ToggleColorSchemeButton,
  title: "ToggleColorSchemeButton",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ToggleColorSchemeButton>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    // Add arguments.
  },
};
