import { CalendarDate } from "@internationalized/date";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import MockDate from "mockdate";
import { RangeCalendar } from "./RangeCalendar";

const meta: Meta<typeof RangeCalendar> = {
  component: RangeCalendar,
  title: "ui/RangeCalendar",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof RangeCalendar>;

const mockToday = new CalendarDate(2025, 10, 10);
MockDate.set(mockToday.toDate("UTC"));

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {},
};

export const VisualTest: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
};
