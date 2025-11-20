import { Meta, StoryObj } from "@storybook/nextjs";
import { DatePicker } from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: "ui/DatePicker",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DatePicker>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    // Add arguments.
  },
};
