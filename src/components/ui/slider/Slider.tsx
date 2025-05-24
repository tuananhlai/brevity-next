import {
  Slider as AriaSlider,
  SliderProps as AriaSliderProps,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "react-aria-components";
import { Label } from "@/components/ui/field";
import { Flex } from "@/components/ui/layout";
import { cn } from "@/styles/utils";
import { ReplaceAriaRenderProps } from "@/utils";
import styles from "./Slider.module.scss";

export interface SliderProps extends ReplaceAriaRenderProps<AriaSliderProps> {
  label: React.ReactNode;
}

export const Slider: React.FC<SliderProps> = (props) => {
  const { className, label } = props;

  return (
    <AriaSlider className={cn(styles.root, className)}>
      <Flex justify="space-between" align="center">
        <Label>{label}</Label>
        <SliderOutput />
      </Flex>
      <SliderTrack className={styles.trackRoot}>
        {({ state }) => {
          return (
            <>
              <div className={styles.track} />
              <div
                className={styles.fill}
                style={{
                  width: `${state.getThumbPercent(0) * 100}%`,
                }}
              />
              <SliderThumb className={styles.thumb} />
            </>
          );
        }}
      </SliderTrack>
    </AriaSlider>
  );
};
