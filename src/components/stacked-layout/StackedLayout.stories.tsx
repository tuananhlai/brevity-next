import { Meta, StoryObj } from "@storybook/react";
import { StackedLayout } from "./StackedLayout";

const meta: Meta<typeof StackedLayout> = {
  component: StackedLayout,
  title: "StackedLayout",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof StackedLayout>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Main Content",
  },
};
