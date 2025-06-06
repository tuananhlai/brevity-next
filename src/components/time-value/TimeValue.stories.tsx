import { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react";
import { RelativeTimeValue } from "./RelativeTimeValue";
import { TimeValue } from "./TimeValue";

const meta: Meta<typeof TimeValue> = {
  component: TimeValue,
  title: "TimeValue",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TimeValue>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    return (
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
      >
        <code>TimeValue</code>
        <code>RelativeTimeValue</code>
        {Object.entries(timeStamps).map(([key, value]) => (
          <Fragment key={key}>
            <TimeValue
              dateTime={value}
              format={{
                dateStyle: "medium",
                timeStyle: "medium",
              }}
            />
            <RelativeTimeValue dateTime={value} />
          </Fragment>
        ))}
      </div>
    );
  },
};

const durationInMs = {
  second: 1000,
  minute: 1000 * 60,
  hour: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24,
  week: 1000 * 60 * 60 * 24 * 7,
  month: 1000 * 60 * 60 * 24 * 30,
  year: 1000 * 60 * 60 * 24 * 365,
};

const timeStamps = {
  now: new Date(),
  secondAgo: new Date(Date.now() - durationInMs.second),
  twoSecondsAgo: new Date(Date.now() - durationInMs.second * 2),
  minuteAgo: new Date(Date.now() - durationInMs.minute),
  twoMinutesAgo: new Date(Date.now() - durationInMs.minute * 2),
  hourAgo: new Date(Date.now() - durationInMs.hour),
  twoHoursAgo: new Date(Date.now() - durationInMs.hour * 2),
  dayAgo: new Date(Date.now() - durationInMs.day),
  twoDaysAgo: new Date(Date.now() - durationInMs.day * 2),
  weekAgo: new Date(Date.now() - durationInMs.week),
  twoWeeksAgo: new Date(Date.now() - durationInMs.week * 2),
  monthAgo: new Date(Date.now() - durationInMs.month),
  twoMonthsAgo: new Date(Date.now() - durationInMs.month * 2),
  yearAgo: new Date(Date.now() - durationInMs.year),
  twoYearsAgo: new Date(Date.now() - durationInMs.year * 2),
  secondInFuture: new Date(Date.now() + durationInMs.second),
  twoSecondsInFuture: new Date(Date.now() + durationInMs.second * 2),
  minuteInFuture: new Date(Date.now() + durationInMs.minute),
  twoMinutesInFuture: new Date(Date.now() + durationInMs.minute * 2),
  hourInFuture: new Date(Date.now() + durationInMs.hour),
  twoHoursInFuture: new Date(Date.now() + durationInMs.hour * 2),
  dayInFuture: new Date(Date.now() + durationInMs.day),
  twoDaysInFuture: new Date(Date.now() + durationInMs.day * 2),
  weekInFuture: new Date(Date.now() + durationInMs.week),
  twoWeeksInFuture: new Date(Date.now() + durationInMs.week * 2),
  monthInFuture: new Date(Date.now() + durationInMs.month),
  twoMonthsInFuture: new Date(Date.now() + durationInMs.month * 2),
  yearInFuture: new Date(Date.now() + durationInMs.year),
  twoYearsInFuture: new Date(Date.now() + durationInMs.year * 2),
};
