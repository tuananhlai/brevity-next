import { forwardRef } from "react";
import {
  Popover as AriaPopover,
  type PopoverProps as AriaPopoverProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import { type ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./Popover.module.scss";

export type PopoverProps = ReplaceAriaRenderProps<AriaPopoverProps>;

const Popover: React.ForwardRefRenderFunction<HTMLElement, PopoverProps> = (
  { className, ...props },
  ref,
) => {
  return (
    <AriaPopover className={cn(styles.root, className)} ref={ref} {...props} />
  );
};

const _Popover = /*#__PURE__*/ forwardRef(Popover);

export { _Popover as Popover };
