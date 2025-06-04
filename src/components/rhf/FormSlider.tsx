import { mergeProps } from "react-aria";
import { Controller } from "react-hook-form";
import { OmitAriaFormProps, RHFFieldProps } from "@/components/rhf/utils";
import { Slider, SliderProps } from "@/components/ui/slider";

export interface FormSliderProps
  extends OmitAriaFormProps<SliderProps>,
    RHFFieldProps {}

export const FormSlider: React.FC<FormSliderProps> = (props) => {
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
      render={({ field }) => (
        <Slider
          name={field.name}
          value={field.value}
          ref={field.ref}
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
