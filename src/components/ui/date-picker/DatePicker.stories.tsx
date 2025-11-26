import { DateValue } from "@internationalized/date";
import { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
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
    label: "Date of birth",
  },
};

export const Controlled: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    const [date, setDate] = useState<DateValue | null>(null);

    return (
      <div style={{ width: "200px" }}>
        <DatePicker value={date} onChange={setDate} />
        <p>Selected date: {date?.toString()}</p>
      </div>
    );
  },
};
