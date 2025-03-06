import { css, keyframes } from "@emotion/react";
import { forwardRef } from "react";
import {
  Popover as AriaPopover,
  PopoverProps as AriaPopoverProps,
} from "react-aria-components";
import {
  animationTimings,
  backdropBlurs,
  borderRadiuses,
  colors,
  shadows,
} from "@/styles/tokens";
import { alpha, darkModeSelector } from "@/styles/utils";
import { ReplaceAriaRenderProps } from "@/utils";

export type PopoverProps = ReplaceAriaRenderProps<AriaPopoverProps>;

const Popover: React.ForwardRefRenderFunction<HTMLElement, PopoverProps> = (
  props,
  ref,
) => {
  return <AriaPopover css={root} ref={ref} {...props} />;
};

const _Popover = /*#__PURE__*/ forwardRef(Popover);

export { _Popover as Popover };

const open = keyframes`
  from {
    opacity: 0;
    scale: 0.95;
    translate: var(--anim-from-translate);
  }
  to {
    opacity: 1;
    scale: 1;
    translate: 0;
  }
`;

const root = css`
  border-radius: ${borderRadiuses.xl};
  backdrop-filter: ${backdropBlurs.xl};
  background-color: ${alpha(colors.white, 75)};
  box-shadow:
    0 0 0 1px ${alpha(colors["zinc-950"], 10)},
    ${shadows.lg};

  &:where([data-placement="bottom"]) {
    --anim-from-translate: 0 -0.5rem;
  }

  &:where([data-placement="top"]) {
    --anim-from-translate: 0 0.5rem;
  }

  &:where([data-placement="left"]) {
    --anim-from-translate: 0.5rem 0;
  }

  &:where([data-placement="right"]) {
    --anim-from-translate: -0.5rem 0;
  }

  &:where([data-entering]) {
    animation: ${open} 0.05s ${animationTimings.easeOut};
  }

  &:where([data-exiting]) {
    animation: ${open} 0.05s ${animationTimings.easeIn} reverse;
  }

  ${darkModeSelector} {
    background-color: ${alpha(colors["zinc-800"], 75)};
    box-shadow:
      inset 0 0 0 1px ${alpha(colors.white, 10)},
      ${shadows.lg};
  }
`;
