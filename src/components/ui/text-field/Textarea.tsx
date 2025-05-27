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

export interface TextareaFieldProps
  extends ReplaceAriaRenderProps<AriaTextFieldProps>,
    FieldsetProps {
  placeholder?: string;
}

const TextareaField: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TextareaFieldProps
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
      <AriaTextArea className={styles.textarea} placeholder={placeholder} />
      <ErrorMessage className={styles.errorMessage} isDisabled={isDisabled}>
        {errorMessage}
      </ErrorMessage>
    </AriaTextField>
  );
};

const _TextareaField = /*#__PURE__*/ forwardRef(TextareaField);

export { _TextareaField as TextareaField };
