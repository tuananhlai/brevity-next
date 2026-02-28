import { forwardRef } from "react";
import { useObjectRef } from "react-aria";
import {
  Slider as AriaSlider,
  type SliderProps as AriaSliderProps,
  SliderOutput,
  SliderThumb,
  type SliderThumbProps,
  SliderTrack,
} from "react-aria-components";
import { Label } from "@/components/ui/field";
import { Flex } from "@/components/ui/layout";
import { cn } from "@/styles/utils";
import type { ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./Slider.module.scss";

// Only allow horizontal orientation for now.
export interface SliderProps
  extends
    Omit<ReplaceAriaRenderProps<AriaSliderProps>, "orientation">,
    Pick<SliderThumbProps, "name"> {
  label: React.ReactNode;
}

// TODO: add disabled style.
// TODO: support description and error message?
const Slider: React.ForwardRefRenderFunction<HTMLInputElement, SliderProps> = (
  props,
  forwardedRef,
) => {
  const { className, label, name, ...rest } = props;

  const ref = useObjectRef(forwardedRef);

  return (
    <AriaSlider className={cn(styles.root, className)} {...rest}>
      <Flex
        className={styles.labelContainer}
        justify="space-between"
        align="baseline"
        gap="var(--bw-space-2)"
      >
        <Label>{label}</Label>
        <SliderOutput className={styles.output} />
      </Flex>
      <Flex gap="var(--bw-space-5)" align="center">
        <SliderTrack className={styles.track}>
          {({ state }) => {
            return (
              <>
                <div
                  className={styles.trackFilled}
                  style={{
                    width: `${state.getThumbPercent(0) * 100}%`,
                  }}
                />
                {/* TODO: make the thumb transition smoothly to the new value when
                the user clicks on the track. */}
                <SliderThumb
                  name={name}
                  inputRef={ref}
                  className={styles.thumb}
                />
              </>
            );
          }}
        </SliderTrack>
      </Flex>
    </AriaSlider>
  );
};

const _Slider = /*#__PURE__*/ forwardRef(Slider);

export { _Slider as Slider };
