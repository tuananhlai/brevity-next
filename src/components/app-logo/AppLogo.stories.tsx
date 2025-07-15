import { Meta, StoryObj } from "@storybook/nextjs";
import { AppLogo } from "./AppLogo";

const meta: Meta<typeof AppLogo> = {
  component: AppLogo,
  title: "AppLogo",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof AppLogo>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {},
};
