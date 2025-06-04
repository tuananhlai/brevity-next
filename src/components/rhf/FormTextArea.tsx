import { mergeRefs } from "@react-aria/utils";
import { forwardRef } from "react";
import { mergeProps } from "react-aria";
import { Controller } from "react-hook-form";
import { OmitAriaFormProps, RHFFieldProps } from "@/components/rhf/utils";
import { TextArea, TextAreaProps } from "@/components/ui/text-field/TextArea";

export interface FormTextAreaProps
  extends OmitAriaFormProps<TextAreaProps>,
    RHFFieldProps {}

const FormTextArea: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  FormTextAreaProps
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
        <TextArea
          name={field.name}
          value={field.value}
          isInvalid={fieldState.invalid}
          errorMessage={fieldState.error?.message}
          ref={mergeRefs(field.ref, ref)}
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

const _FormTextArea = /*#__PURE__*/ forwardRef(FormTextArea);

export { _FormTextArea as FormTextArea };
