import { type Meta, type StoryObj } from "@storybook/react-vite";
import { DateRangePicker } from "./DateRangePicker";

const meta: Meta<typeof DateRangePicker> = {
  component: DateRangePicker,
  title: "ui/DateRangePicker",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DateRangePicker>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    // Add arguments.
  },
};
