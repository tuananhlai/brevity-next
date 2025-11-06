import { Meta, StoryObj } from "@storybook/nextjs";
import { Calendar } from "./Calendar";

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: "ui/Calendar",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Calendar>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    // Add arguments.
  },
};
