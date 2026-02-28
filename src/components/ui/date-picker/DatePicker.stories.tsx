import { CalendarDate, type DateValue } from "@internationalized/date";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { VisualTestGrid } from "@/styles/storybookTestUtils";
import { DatePicker, type DatePickerProps } from "./DatePicker";

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

export const VisualTest: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
  render: () => {
    const sampleLabel = "Label";
    const sampleDescription = "Description";
    const sampleErrorMessage = "Error message";

    return (
      <VisualTestGrid cellWidth="200px">
        <ExampleDatePicker />
        <ExampleDatePicker defaultValue={new CalendarDate(2025, 10, 1)} />
        <ExampleDatePicker label={sampleLabel} />
        <ExampleDatePicker
          label={sampleLabel}
          description={sampleDescription}
        />
        <ExampleDatePicker
          label={sampleLabel}
          description={sampleDescription}
          isDisabled
        />
        <ExampleDatePicker
          label={sampleLabel}
          description={sampleDescription}
          errorMessage={sampleErrorMessage}
          isInvalid
        />
        <ExampleDatePicker label={sampleLabel} isRequired />
      </VisualTestGrid>
    );
  },
};

const ExampleDatePicker = (props: Partial<DatePickerProps<DateValue>>) => {
  return <DatePicker aria-label="Label" {...props} />;
};
