import { useId } from "react";
import {
  Slider as AriaSlider,
  SliderProps as AriaSliderProps,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "react-aria-components";
import { Description, Label } from "@/components/ui/field";
import { Flex } from "@/components/ui/layout";
import { cn } from "@/styles/utils";
import { ReplaceAriaRenderProps } from "@/utils";
import styles from "./Slider.module.scss";

// Only allow horizontal orientation for now.
export interface SliderProps
  extends Omit<ReplaceAriaRenderProps<AriaSliderProps>, "orientation"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
}

export const Slider: React.FC<SliderProps> = (props) => {
  const {
    className,
    label,
    description,
    "aria-describedby": ariaDescribedby,
    ...rest
  } = props;

  const descriptionId = useId();

  return (
    <AriaSlider
      className={cn(styles.root, className)}
      aria-describedby={cn(
        ariaDescribedby,
        description != null && descriptionId,
      )}
      {...rest}
    >
      {label != null && <Label>{label}</Label>}
      {description != null && (
        <Description id={descriptionId}>{description}</Description>
      )}
      <Flex className={styles.container} gap="var(--bw-space-5)" align="center">
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
                <SliderThumb className={styles.thumb} />
              </>
            );
          }}
        </SliderTrack>
        <SliderOutput className={styles.output} />
      </Flex>
    </AriaSlider>
  );
};
