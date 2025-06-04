import { mergeProps } from "react-aria";
import { Controller } from "react-hook-form";
import { OmitAriaFormProps, RHFFieldProps } from "@/components/rhf/utils";
import { TextArea, TextAreaProps } from "@/components/ui/text-field/TextArea";

export interface FormTextAreaProps
  extends OmitAriaFormProps<TextAreaProps>,
    RHFFieldProps {}

export const FormTextArea: React.FC<FormTextAreaProps> = (props) => {
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
        <TextArea
          name={field.name}
          value={field.value}
          isInvalid={fieldState.invalid}
          errorMessage={fieldState.error?.message}
          ref={field.ref}
          isDisabled={field.disabled}
          validationBehavior="aria"
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
