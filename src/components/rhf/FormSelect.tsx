import { mergeRefs } from "@react-aria/utils";
import { forwardRef } from "react";
import { mergeProps } from "react-aria";
import { Controller } from "react-hook-form";
import { OmitAriaFormProps, RHFFieldProps } from "@/components/rhf/utils";
import { Select, SelectProps } from "@/components/ui/select";

export interface FormSelectProps<T extends object>
  extends OmitAriaFormProps<SelectProps<T>>,
    RHFFieldProps {}

const FormSelect = <T extends object>(
  props: FormSelectProps<T>,
  ref: React.ForwardedRef<HTMLButtonElement>,
) => {
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
        <Select
          name={field.name}
          selectedKey={field.value}
          isInvalid={fieldState.invalid}
          errorMessage={fieldState.error?.message}
          ref={mergeRefs(field.ref, ref)}
          isDisabled={field.disabled}
          validationBehavior="aria"
          {...mergeProps(
            {
              onSelectionChange: field.onChange,
              onBlur: field.onBlur,
            },
            rest,
          )}
        />
      )}
    />
  );
};

const _FormSelect = /*#__PURE__*/ forwardRef(FormSelect) as <T extends object>(
  props: FormSelectProps<T> & React.RefAttributes<HTMLButtonElement>,
) => JSX.Element;

export { _FormSelect as FormSelect };
