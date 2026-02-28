import { CalendarDate } from "@internationalized/date";
import { DatePicker, type DateValue } from "react-aria-components";
import { expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import type { DatePickerProps } from "./DatePicker";

it("should update the date value", async () => {
  const screen = await render(
    <TestDatePicker defaultValue={new CalendarDate(2025, 10, 1)} />,
  );
  // TODO: see if there's any easy-to-understand way to get the date input element.
  const dateInput = screen.baseElement.querySelector(
    "input[type='date']",
  ) as HTMLInputElement;
  await userEvent.fill(dateInput, "2025-10-02");
  expect(dateInput).toHaveValue("2025-10-02");
});

const TestDatePicker = (props: Partial<DatePickerProps<DateValue>>) => {
  return <DatePicker aria-label="Label" {...props} />;
};
