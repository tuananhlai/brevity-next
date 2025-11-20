import {
  Calendar as AriaCalendar,
  CalendarCell as AriaCalendarCell,
  CalendarCellProps as AriaCalendarCellProps,
  CalendarHeaderCell as AriaCalendarHeaderCell,
  CalendarHeaderCellProps as AriaCalendarHeaderCellProps,
  CalendarProps as AriaCalendarProps,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  DateValue,
} from "react-aria-components";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { IconButton } from "@/components/ui/button";
import { Heading } from "@/components/ui/text";
import { cn } from "@/styles/utils";
import { ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./Calendar.module.scss";

export interface CalendarProps<T extends DateValue>
  extends ReplaceAriaRenderProps<AriaCalendarProps<T>> {}

export const Calendar = <T extends DateValue>(props: CalendarProps<T>) => {
  const { className, ...rest } = props;
  return (
    <AriaCalendar className={cn(styles.root, className)} {...rest}>
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
          {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
        </CalendarGridHeader>
        <CalendarGridBody>
          {(date) => <CalendarCell date={date} />}
        </CalendarGridBody>
      </CalendarGrid>
    </AriaCalendar>
  );
};

interface CalendarHeaderCellProps
  extends ReplaceAriaRenderProps<AriaCalendarHeaderCellProps> {}

const CalendarHeaderCell: React.FC<CalendarHeaderCellProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <AriaCalendarHeaderCell
      className={cn(styles.headerCell, className)}
      {...rest}
    />
  );
};

interface CalendarCellProps
  extends ReplaceAriaRenderProps<AriaCalendarCellProps> {}

const CalendarCell: React.FC<CalendarCellProps> = (props) => {
  const { className, ...rest } = props;
  return <AriaCalendarCell className={cn(styles.cell, className)} {...rest} />;
};
