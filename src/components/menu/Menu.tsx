import { css, keyframes } from "@emotion/react";
import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuProps as AriaMenuProps,
  MenuItemProps,
  Popover,
  PopoverProps,
} from "react-aria-components";

import {
  animationTimings,
  backdropBlurs,
  borderRadiuses,
  colors,
  fontSizes,
  lineHeights,
  queries,
  shadows,
  spacings,
} from "@/styles/tokens";
import { alpha, darkModeSelector } from "@/styles/utils";

export interface MenuProps<T>
  extends Omit<AriaMenuProps<T>, "style" | "className">,
    Pick<
      PopoverProps,
      | "placement"
      | "offset"
      | "crossOffset"
      | "defaultOpen"
      | "isOpen"
      | "onOpenChange"
      | "isKeyboardDismissDisabled"
      | "shouldFlip"
      | "isNonModal"
    > {}

export function Menu<T extends object>(props: MenuProps<T>) {
  const {
    placement,
    offset,
    crossOffset,
    defaultOpen,
    isOpen,
    onOpenChange,
    isKeyboardDismissDisabled,
    shouldFlip,
    isNonModal,
    ...rest
  } = props;
  return (
    <Popover
      placement={placement}
      offset={offset}
      crossOffset={crossOffset}
      defaultOpen={defaultOpen}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      shouldFlip={shouldFlip}
      isNonModal={isNonModal}
      css={popover}
    >
      <AriaMenu css={menu} {...rest} />
    </Popover>
  );
}

export const MenuItem = (props: MenuItemProps) => {
  return <AriaMenuItem css={menuItem} {...props} />;
};

export { MenuTrigger } from "react-aria-components";

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const popover = css`
  &[data-entering] {
    animation: ${fade} 0.1s ${animationTimings.easeOut};
  }

  &[data-exiting] {
    animation: ${fade} 0.1s ${animationTimings.easeIn} reverse;
  }
`;

const menu = css`
  width: max-content;
  border-radius: ${borderRadiuses.xl};
  padding: ${spacings[1]};
  overflow-y: auto;
  outline: none;
  background-color: ${alpha(colors.white, 75)};
  backdrop-filter: ${backdropBlurs.xl};
  min-width: ${spacings[32]};
  box-shadow:
    0 0 0 1px ${alpha(colors["zinc-950"], 10)},
    ${shadows.lg};

  ${darkModeSelector} {
    background-color: ${alpha(colors["zinc-800"], 75)};
    box-shadow:
      inset 0 0 0 1px ${alpha(colors.white, 10)},
      ${shadows.lg};
  }
`;

const menuItem = css`
  border-radius: ${borderRadiuses.lg};
  padding: ${spacings["2.5"]} ${spacings["3.5"]};
  outline: none;
  text-align: left;
  font-size: ${fontSizes.base};
  line-height: ${lineHeights[6]};
  color: ${colors["zinc-950"]};

  /** Styles for link menu items. */
  text-decoration: none;
  width: 100%;
  display: block;

  &[data-focused] {
    background-color: ${colors["blue-500"]};
    color: ${colors.white};
  }

  &[data-disabled] {
    opacity: 50%;
  }

  &[data-hovered] {
    cursor: pointer;
  }

  ${queries.sm} {
    padding: ${spacings["1.5"]} ${spacings[3]};
    font-size: ${fontSizes.sm};
  }

  ${darkModeSelector} {
    color: ${colors.white};
  }
`;
