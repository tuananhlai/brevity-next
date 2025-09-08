import {
  Calendar as AriaCalendar,
  CalendarProps as AriaCalendarProps,
  CalendarCell,
  CalendarGrid,
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
        <IconButton variant="tertiary" slot="previous">
          <LuChevronLeft />
        </IconButton>
        <Heading level={2} className={styles.currentMonthHeading} />
        <IconButton variant="tertiary" slot="next">
          <LuChevronRight />
        </IconButton>
      </header>
      <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
    </AriaCalendar>
  );
};
