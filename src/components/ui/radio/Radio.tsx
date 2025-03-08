import { forwardRef } from "react";
import {
  Radio as AriaRadio,
  RadioProps as AriaRadioProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import { ReplaceAriaRenderProps } from "@/utils";
import styles from "./Radio.module.scss";

export type RadioProps = ReplaceAriaRenderProps<AriaRadioProps>;

const Radio: React.ForwardRefRenderFunction<HTMLLabelElement, RadioProps> = (
  props,
  ref,
) => {
  const { children, className = "", ...rest } = props;
  return (
    <AriaRadio ref={ref} className={cn(styles.root, className)} {...rest}>
      <span className={styles.radioIcon}>
        <span className={styles.radioIndicator} />
      </span>
      <div className={styles.label}>{children}</div>
    </AriaRadio>
  );
};

const _Radio = /*#__PURE__*/ forwardRef(Radio);

export { _Radio as Radio };
