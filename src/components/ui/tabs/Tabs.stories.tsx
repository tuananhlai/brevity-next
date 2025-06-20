import { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "ui/Tabs",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Tabs>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    // Add arguments.
  },
};
