import { forwardRef } from "react";
import { useObjectRef } from "react-aria";
import {
  Checkbox as AriaCheckbox,
  CheckboxProps as AriaCheckboxProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import styles from "./Checkbox.module.scss";

export interface CheckboxProps
  extends Omit<AriaCheckboxProps, "style" | "className" | "children"> {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const Checkbox: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = (props, forwardedRef) => {
  const { children, className, ...rest } = props;
  const ref = useObjectRef(forwardedRef);

  return (
    <AriaCheckbox
      className={cn(styles.root, className)}
      {...rest}
      inputRef={ref}
    >
      <span className={styles.checkboxIconContainer} aria-hidden>
        <svg className={styles.checkboxIcon} viewBox="0 0 14 14" fill="none">
          {/* Checkmark icon */}
          <path
            className={styles.checkmark}
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Indeterminate icon */}
          <path
            className={styles.indeterminateIcon}
            d="M3 7H11"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className={styles.label}>{children}</span>
    </AriaCheckbox>
  );
};

const _Checkbox = /*#__PURE__*/ forwardRef(Checkbox);
export { _Checkbox as Checkbox };
