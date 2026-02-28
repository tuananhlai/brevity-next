import { mergeRefs } from "@react-aria/utils";
import { forwardRef } from "react";
import { mergeProps } from "react-aria";
import { Controller } from "react-hook-form";
import {
  type OmitAriaFormProps,
  type RHFFieldProps,
} from "@/components/rhf/utils";
import { Slider, type SliderProps } from "@/components/ui/slider";

export interface FormSliderProps
  extends OmitAriaFormProps<SliderProps>, RHFFieldProps {}

const FormSlider: React.ForwardRefRenderFunction<
  HTMLInputElement,
  FormSliderProps
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
      render={({ field }) => (
        <Slider
          name={field.name}
          value={field.value}
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

const _FormSlider = /*#__PURE__*/ forwardRef(FormSlider);

export { _FormSlider as FormSlider };
