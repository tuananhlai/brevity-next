import {
  DateRangePicker as AriaDateRangePicker,
  type DateRangePickerProps as AriaDateRangePickerProps,
  DateInput,
  DateSegment,
  type DateValue,
  Dialog,
  Group,
  Popover,
} from "react-aria-components";
import { LuCalendar } from "react-icons/lu";
import { IconButton } from "@/components/ui/button";
import { Description, ErrorMessage, Label } from "@/components/ui/field";
import type { FieldsetProps, ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./DatePicker.module.scss";

export interface DateRangePickerProps<T extends DateValue>
  extends ReplaceAriaRenderProps<AriaDateRangePickerProps<T>>, FieldsetProps {}

export function DateRangePicker<T extends DateValue>(
  props: DateRangePickerProps<T>,
) {
  const { label, description, errorMessage, ...rest } = props;
  const { isRequired, isDisabled } = rest;

  return (
    <AriaDateRangePicker {...rest}>
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
        <Dialog></Dialog>
      </Popover>
    </AriaDateRangePicker>
  );
}
