import { forwardRef } from "react";
import {
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  Button,
  ListBox,
  ListBoxProps,
  SelectValue,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import { FieldsetProps } from "@/utils";
import { Description, ErrorMessage, Label } from "../field";
import { Popover } from "../popover";
import styles from "./Select.module.scss";

export interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children" | "className" | "style">,
    FieldsetProps {
  className?: string;
  style?: React.CSSProperties;
  children?: ListBoxProps<T>["children"];
  items?: ListBoxProps<T>["items"];
}

const Select = <T extends object>(
  props: SelectProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) => {
  const {
    children,
    items,
    className = "",
    label,
    description,
    errorMessage,
    ...rest
  } = props;
  const { isRequired, isDisabled } = rest;

  return (
    <AriaSelect ref={ref} className={cn(styles.root, className)} {...rest}>
      {label != null && (
        <Label isRequired={isRequired} isDisabled={isDisabled}>
          {label}
        </Label>
      )}
      {description != null && (
        <Description isDisabled={isDisabled}>{description}</Description>
      )}
      <Button className={styles.selectBtn}>
        <SelectValue className={styles.selectedValue} />
        <span className={styles.arrowContainer}>
          <svg
            className={styles.arrow}
            viewBox="0 0 16 16"
            aria-hidden="true"
            fill="none"
          >
            <path
              d="M5.75 10.75L8 13L10.25 10.75"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.25 5.25L8 3L5.75 5.25"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Button>
      <Popover className={styles.popover}>
        <ListBox className={styles.listBox} items={items}>
          {children}
        </ListBox>
      </Popover>
      <ErrorMessage className={styles.errorMessage} isDisabled={isDisabled}>
        {errorMessage}
      </ErrorMessage>
    </AriaSelect>
  );
};

const _Select = /*#__PURE__*/ forwardRef(Select) as <T extends object>(
  props: SelectProps<T> & React.RefAttributes<HTMLDivElement>,
) => JSX.Element;

export { _Select as Select };
