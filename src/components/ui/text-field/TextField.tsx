import { forwardRef } from "react";
import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  Input,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import { FieldsetProps, ReplaceAriaRenderProps } from "@/utils/misc";
import { Description, ErrorMessage, Label } from "../field";
import styles from "./TextField.module.scss";

export interface TextFieldProps
  extends Omit<ReplaceAriaRenderProps<AriaTextFieldProps>, "children">,
    FieldsetProps {
  placeholder?: string;
}

const TextField: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TextFieldProps
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
      <Input ref={ref} className={styles.input} placeholder={placeholder} />
      <ErrorMessage className={styles.errorMessage} isDisabled={isDisabled}>
        {errorMessage}
      </ErrorMessage>
    </AriaTextField>
  );
};

const _TextField = /*#__PURE__*/ forwardRef(TextField);

export { _TextField as TextField };
