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
      {({
        isSelected,
        isIndeterminate,
        isHovered,
        isDisabled,
        isFocused,
        isFocusVisible,
        isInvalid,
      }) => {
        let state = "unselected";
        if (isIndeterminate) {
          state = "indeterminate";
        } else if (isSelected) {
          state = "selected";
        }

        return (
          <>
            <span
              className={styles.checkboxIconContainer}
              aria-hidden
              data-state={state}
              data-hovered={isHovered || undefined}
              data-disabled={isDisabled || undefined}
              data-focused={isFocused || undefined}
              data-focus-visible={isFocusVisible || undefined}
            >
              <svg
                className={styles.checkboxIcon}
                viewBox="0 0 14 14"
                fill="none"
              >
                {getCheckedIcon(isSelected, isIndeterminate)}
              </svg>
            </span>

            {children != null && (
              <span
                className={styles.label}
                data-invalid={isInvalid || undefined}
                data-disabled={isDisabled || undefined}
              >
                {children}
              </span>
            )}
          </>
        );
      }}
    </AriaCheckbox>
  );
};

/** Return the icon to be displayed based on the checkbox state. */
const getCheckedIcon = (isSelected: boolean, isIndeterminate: boolean) => {
  if (isIndeterminate) {
    return (
      <path
        d="M3 7H11"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    );
  } else if (isSelected) {
    return (
      <path
        d="M3 8L6 11L11 3.5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    );
  }

  return null;
};

const _Checkbox = /*#__PURE__*/ forwardRef(Checkbox);
export { _Checkbox as Checkbox };
