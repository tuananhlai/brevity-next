import { mergeRefs } from "@react-aria/utils";
import { forwardRef } from "react";
import { mergeProps } from "react-aria";
import { Controller } from "react-hook-form";
import { OmitAriaFormProps, RHFFieldProps } from "@/components/rhf/utils";
import { TextField, TextFieldProps } from "@/components/ui/text-field";

export interface FormTextFieldProps
  extends OmitAriaFormProps<TextFieldProps>,
    RHFFieldProps {}

const FormTextField: React.ForwardRefRenderFunction<
  HTMLInputElement,
  FormTextFieldProps
> = (props, ref) => {
  const {
    name,
    isDisabled,
    control,
    defaultValue,
    rules,
    shouldUnregister,
    ...rest
  } = props;

  return (
    <Controller
      name={name}
      disabled={isDisabled}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field, fieldState }) => (
        <TextField
          name={field.name}
          value={field.value}
          isInvalid={fieldState.invalid}
          errorMessage={fieldState.error?.message}
          ref={mergeRefs(field.ref, ref)}
          isDisabled={field.disabled}
          {...mergeProps(
            {
              onChange: field.onChange,
              onBlur: field.onBlur,
            },
            rest,
          )}
        />
      )}
    />
  );
};

const _FormTextField = /*#__PURE__*/ forwardRef(FormTextField);

export { _FormTextField as FormTextField };
