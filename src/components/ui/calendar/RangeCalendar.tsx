import {
  RangeCalendar as AriaRangeCalendar,
  type RangeCalendarProps as AriaRangeCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  type DateValue,
} from "react-aria-components";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { IconButton } from "@/components/ui/button";
import { Heading } from "@/components/ui/text";
import { cn } from "@/styles/utils";
import type { ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./Calendar.module.scss";

export interface RangeCalendarProps<
  T extends DateValue,
> extends ReplaceAriaRenderProps<AriaRangeCalendarProps<T>> {}

export const RangeCalendar = <T extends DateValue>(
  props: RangeCalendarProps<T>,
) => {
  const { className, ...rest } = props;
  return (
    <AriaRangeCalendar className={cn(styles.root, className)} {...rest}>
      <header className={styles.header}>
        <IconButton
          className={styles.headerButton}
          variant="tertiary"
          slot="previous"
        >
          <LuChevronLeft />
        </IconButton>
        <Heading level={2} className={styles.currentMonthHeading} />
        <IconButton
          className={styles.headerButton}
          variant="tertiary"
          slot="next"
        >
          <LuChevronRight />
        </IconButton>
      </header>
      <CalendarGrid>
        <CalendarGridHeader>
          {(day) => (
            <CalendarHeaderCell className={styles.headerCell}>
              {day}
            </CalendarHeaderCell>
          )}
        </CalendarGridHeader>
        <CalendarGridBody>
          {(date) => (
            <CalendarCell
              className={cn(styles.cell, styles.rangeCalendarVariant)}
              date={date}
            />
          )}
        </CalendarGridBody>
      </CalendarGrid>
    </AriaRangeCalendar>
  );
};
