import { forwardRef } from "react";
import {
  TextArea as AriaTextArea,
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import { FieldsetProps, ReplaceAriaRenderProps } from "@/utils";
import { Description, ErrorMessage, Label } from "../field";
import styles from "./TextField.module.scss";

export interface TextareaProps
  extends ReplaceAriaRenderProps<AriaTextFieldProps>,
    FieldsetProps {
  placeholder?: string;
}

const TextField: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TextareaProps
> = (props, ref) => {
  const {
    style,
    className,
    label,
    description,
    placeholder,
    errorMessage,
    ...rest
  } = props;
  const { isDisabled, isRequired } = rest;

  return (
    <AriaTextField
      ref={ref}
      style={style}
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
      <AriaTextArea className={styles.input} placeholder={placeholder} />
      <ErrorMessage className={styles.errorMessage} isDisabled={isDisabled}>
        {errorMessage}
      </ErrorMessage>
    </AriaTextField>
  );
};

const _TextField = /*#__PURE__*/ forwardRef(TextField);

export { _TextField as TextField };
