import {
  DatePicker as AriaDatePicker,
  type DatePickerProps as AriaDatePickerProps,
  DateInput,
  DateSegment,
  type DateValue,
  Dialog,
  Group,
} from "react-aria-components";
import { LuCalendar } from "react-icons/lu";
import { IconButton } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Description, ErrorMessage, Label } from "@/components/ui/field";
import { Popover } from "@/components/ui/popover";
import type { FieldsetProps, ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./DatePicker.module.scss";

export interface DatePickerProps<T extends DateValue>
  extends ReplaceAriaRenderProps<AriaDatePickerProps<T>>, FieldsetProps {}

// TODO: The position of the calendar popover sometimes change when
// navigating between months due to the different number of days.
// TODO: Display the calendar in a dialog / tray instead of a popover
// on small screens.
// NOTE: When there is limited vertical space for the calendar popover, we are making
// the content overflows and becomes scrollable.
// TODO: Consider adding a `ref` prop. At least the component should be
// programmatically focusable so that it works well with form libraries.
// TODO: Rethink focus styles.
// TODO: Rethink the behavior for previous and next month calendar cells. Should they
// be selectable?
export function DatePicker<T extends DateValue>(props: DatePickerProps<T>) {
  const { label, description, errorMessage, ...rest } = props;
  const { isRequired, isDisabled } = rest;

  return (
    <AriaDatePicker {...rest}>
      {label != null && (
        <Label isRequired={isRequired} isDisabled={isDisabled}>
          {label}
        </Label>
      )}
      {description != null && (
        <Description isDisabled={isDisabled}>{description}</Description>
      )}
      <Group className={styles.group}>
        <DateInput className={styles.dateInput}>
          {(segment) => (
            <DateSegment className={styles.segment} segment={segment} />
          )}
        </DateInput>
        <IconButton className={styles.calendarButton} variant="tertiary">
          <LuCalendar />
        </IconButton>
      </Group>
      <ErrorMessage className={styles.errorMessage} isDisabled={isDisabled}>
        {errorMessage}
      </ErrorMessage>
      <Popover className={styles.popover}>
        <Dialog>
          <Calendar />
        </Dialog>
      </Popover>
    </AriaDatePicker>
  );
}
