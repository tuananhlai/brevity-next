import { forwardRef } from "react";
import {
  RadioGroup as AriaRadioGroup,
  RadioGroupProps as AriaRadioGroupProps,
} from "react-aria-components";
import { FieldsetProps, ReplaceAriaRenderProps } from "@/utils/misc";
import { Description, ErrorMessage, Label } from "../field";
import styles from "./RadioGroup.module.scss";

export interface RadioGroupProps
  extends ReplaceAriaRenderProps<AriaRadioGroupProps>,
    FieldsetProps {}

const RadioGroup: React.ForwardRefRenderFunction<
  HTMLDivElement,
  RadioGroupProps
> = (props, ref) => {
  const { children, label, description, errorMessage, ...rest } = props;
  const { isRequired, isDisabled } = rest;
  return (
    <AriaRadioGroup ref={ref} {...rest}>
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
    </AriaRadioGroup>
  );
};

const _RadioGroup = /*#__PURE__*/ forwardRef(RadioGroup);

export { _RadioGroup as RadioGroup };
