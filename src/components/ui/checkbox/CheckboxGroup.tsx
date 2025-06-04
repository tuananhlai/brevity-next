import { forwardRef } from "react";
import {
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import { FieldsetProps, ReplaceAriaRenderProps } from "@/utils/misc";
import { Description, ErrorMessage, Label } from "../field";
import styles from "./CheckboxGroup.module.scss";

export interface CheckboxGroupProps
  extends ReplaceAriaRenderProps<AriaCheckboxGroupProps>,
    FieldsetProps {}

const CheckboxGroup: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxGroupProps
> = (props, forwardedRef) => {
  const { children, label, description, errorMessage, className, ...rest } =
    props;
  const { isDisabled, isRequired } = rest;

  return (
    <AriaCheckboxGroup
      ref={forwardedRef}
      className={cn(styles.root, className)}
      {...rest}
    >
      {label != null && (
        <Label isRequired={isRequired} isDisabled={isDisabled}>
          {label}
        </Label>
      )}
      {description != null && (
        <Description isDisabled={isDisabled}>{description}</Description>
      )}
      <div className={styles.group}>{children}</div>
      <ErrorMessage className={styles.errorMessage} isDisabled={isDisabled}>
        {errorMessage}
      </ErrorMessage>
    </AriaCheckboxGroup>
  );
};

const _CheckboxGroup = /*#__PURE__*/ forwardRef(CheckboxGroup);

export { _CheckboxGroup as CheckboxGroup };
