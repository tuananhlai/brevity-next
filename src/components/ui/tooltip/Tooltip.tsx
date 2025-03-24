import { forwardRef } from "react";
import { Tooltip as AriaTooltip } from "react-aria-components";
import styles from "./Tooltip.module.scss";

export interface TooltipProps {
  // Add component props.
}

const Tooltip: React.ForwardRefRenderFunction<HTMLDivElement, TooltipProps> = (
  props,
  ref,
) => {
  return (
    <AriaTooltip offset={4} ref={ref} className={styles.root} {...props} />
  );
};

const _Tooltip = /*#__PURE__*/ forwardRef(Tooltip);

export { _Tooltip as Tooltip };
