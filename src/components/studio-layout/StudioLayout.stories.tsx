import { Meta, StoryObj } from "@storybook/react";
import { StudioLayout } from "./StudioLayout";

const meta: Meta<typeof StudioLayout> = {
  component: StudioLayout,
  title: "StudioLayout",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof StudioLayout>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    // Add arguments.
  },
};
