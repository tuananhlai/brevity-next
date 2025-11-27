import { CalendarDate, isWeekday } from "@internationalized/date";
import { Meta, StoryObj } from "@storybook/nextjs";
import MockDate from "mockdate";
import { VisualTestGrid } from "@/styles/storybookTestUtils";
import { Calendar } from "./Calendar";

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: "ui/Calendar",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Calendar>;

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
  render: () => {
    return (
      <VisualTestGrid cellWidth="300px">
        <div>
          Default
          <Calendar />
        </div>
        <div>
          Date selected
          <Calendar defaultValue={new CalendarDate(2025, 10, 1)} />
        </div>
        <div>
          Date selected (today)
          <Calendar defaultValue={mockToday} />
        </div>
        <div>
          Disabled
          <Calendar isDisabled />
        </div>
        <div>
          Invalid selection
          <Calendar isInvalid defaultValue={new CalendarDate(2025, 10, 15)} />
        </div>
        <div>
          Invalid selection (today)
          <Calendar isInvalid defaultValue={mockToday} />
        </div>
        <div>
          Weekday unavailable
          <Calendar isDateUnavailable={(date) => isWeekday(date, "en-US")} />
        </div>
        <div>
          Min and max date
          <Calendar
            minValue={new CalendarDate(2025, 10, 6)}
            maxValue={new CalendarDate(2025, 10, 14)}
          />
        </div>
        <div>
          Wednesday as first day of week
          <Calendar firstDayOfWeek="wed" />
        </div>
      </VisualTestGrid>
    );
  },
};
