import { Meta, StoryObj } from "@storybook/nextjs";
import { AccountMenu } from "./AccountMenu";

const meta: Meta<typeof AccountMenu> = {
  component: AccountMenu,
  title: "AccountMenu",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof AccountMenu>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    // Add arguments.
  },
};
