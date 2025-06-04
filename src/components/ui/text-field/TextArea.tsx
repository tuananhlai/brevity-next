import { forwardRef } from "react";
import {
  TextArea as AriaTextArea,
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import { FieldsetProps, ReplaceAriaRenderProps } from "@/utils/misc";
import { Description, ErrorMessage, Label } from "../field";
import styles from "./TextField.module.scss";

export interface TextAreaProps
  extends ReplaceAriaRenderProps<AriaTextFieldProps>,
    FieldsetProps {
  placeholder?: string;
  /** Whether the textarea can be vertically resized by the user. */
  resizable?: boolean;
  /** The number of rows to display in the textarea. */
  rows?: number;
}

const TextArea: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = (props, ref) => {
  const {
    style,
    className,
    label,
    description,
    placeholder,
    errorMessage,
    rows = 3,
    resizable,
    ...rest
  } = props;
  const { isDisabled, isRequired } = rest;

  return (
    <AriaTextField
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
      <AriaTextArea
        ref={ref}
        className={styles.input}
        style={{
          resize: resizable ? "vertical" : "none",
        }}
        placeholder={placeholder}
        rows={rows}
      />
      <ErrorMessage className={styles.errorMessage} isDisabled={isDisabled}>
        {errorMessage}
      </ErrorMessage>
    </AriaTextField>
  );
};

const _TextArea = /*#__PURE__*/ forwardRef(TextArea);

export { _TextArea as TextArea };
