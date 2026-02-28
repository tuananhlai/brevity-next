import { forwardRef } from "react";
import {
  Tooltip as AriaTooltip,
  type TooltipProps as AriaTooltipProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import { type ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./Tooltip.module.scss";

export interface TooltipProps extends ReplaceAriaRenderProps<AriaTooltipProps> {
  /**
   * @default 4
   */
  offset?: number;
}

const Tooltip: React.ForwardRefRenderFunction<HTMLDivElement, TooltipProps> = (
  props,
  ref,
) => {
  const { offset = 6, className, ...rest } = props;

  return (
    <AriaTooltip
      offset={offset}
      ref={ref}
      className={cn(styles.root, className)}
      {...rest}
    />
  );
};

const _Tooltip = /*#__PURE__*/ forwardRef(Tooltip);

export { _Tooltip as Tooltip };
