import { Meta, StoryObj } from "@storybook/react";

import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: "Heading",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Heading>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Hello, world!",
  },
};
