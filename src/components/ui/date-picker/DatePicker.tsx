import { forwardRef } from "react";
import {
  DatePicker as AriaDatePicker,
  Button,
  DateInput,
  DateSegment,
  Dialog,
  Group,
} from "react-aria-components";
import { LuCalendar } from "react-icons/lu";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/field";
import { Popover } from "@/components/ui/popover";
import styles from "./DatePicker.module.scss";

export interface DatePickerProps {
  // Add component props.
}

const DatePicker: React.ForwardRefRenderFunction<
  HTMLElement,
  DatePickerProps
> = (props, ref) => {
  return (
    <AriaDatePicker>
      <Label>Date of birth</Label>
      <Group className={styles.group}>
        <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
        <Button>
          <LuCalendar />
        </Button>
      </Group>
      <Popover>
        <Dialog>
          <Calendar />
        </Dialog>
      </Popover>
    </AriaDatePicker>
  );
};

const _DatePicker = /*#__PURE__*/ forwardRef(DatePicker);

export { _DatePicker as DatePicker };
