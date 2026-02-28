import { type ControllerProps } from "react-hook-form";

export interface RHFFieldProps extends Omit<
  ControllerProps,
  "disabled" | "render"
> {
  // Rename `disabled` prop to `isDisabled` so that the naming convention
  // is similar between normal design system components and `Form*` components.
  isDisabled?: boolean;
}

/**
 * Omit all form-related props from design system components so that they can be replaced
 * with props retrieved from React Hook Form Controller.
 *
 * @example
 * interface FormTextFieldProps extends OmitAriaFormProps<TextFieldProps> {}
 */
export type OmitAriaFormProps<T> = Omit<
  T,
  | "name"
  | "errorMessage"
  | "isInvalid"
  | "value"
  | "defaultValue"
  | "isDisabled"
  | "selectedKey"
  | "defaultSelectedKey"
  | "validationBehavior"
  | "validate"
>;
