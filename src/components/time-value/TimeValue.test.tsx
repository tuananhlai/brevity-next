import { describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "@/utils/testutils";
import { RelativeTimeValue } from "./RelativeTimeValue";

vi.useFakeTimers();
vi.setSystemTime(new Date("2020-01-01"));

describe("RelativeTimeValue", () => {
  it("should match snapshot", async () => {
    const screen = await renderWithProviders(
      <div data-testid="test-container">
        {Object.entries(timeStamps).map(([key, value]) => (
          <RelativeTimeValue key={key} dateTime={value} />
        ))}
      </div>,
    );

    expect(screen.getByTestId("test-container")).toMatchSnapshot();
  });
});

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
