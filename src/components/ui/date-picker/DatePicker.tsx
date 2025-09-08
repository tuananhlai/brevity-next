import { forwardRef } from "react";
import styles from "./DatePicker.module.scss";

export interface DatePickerProps {
  // Add component props.
}

const DatePicker: React.ForwardRefRenderFunction<HTMLElement, DatePickerProps> = (
  props,
  ref,
) => {
  return <div />;
};

const _DatePicker = /*#__PURE__*/ forwardRef(DatePicker);

export { _DatePicker as DatePicker };
