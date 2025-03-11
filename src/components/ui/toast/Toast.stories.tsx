import { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: "ui/Toast",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Toast>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    // Add arguments.
  },
};
