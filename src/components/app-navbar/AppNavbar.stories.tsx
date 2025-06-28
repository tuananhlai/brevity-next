import { Meta, StoryObj } from "@storybook/nextjs";
import { AppNavbar } from "./AppNavbar";

const meta: Meta<typeof AppNavbar> = {
  component: AppNavbar,
  title: "AppNavbar",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof AppNavbar>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    // Add arguments.
  },
};
