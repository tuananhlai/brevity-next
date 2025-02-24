import { css } from "@emotion/react";
import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuProps as AriaMenuProps,
  MenuItemProps,
} from "react-aria-components";

import {
  borderRadiuses,
  colors,
  fontSizes,
  lineHeights,
  queries,
  spacings,
} from "@/styles/tokens";
import { darkModeSelector } from "@/styles/utils";

import { Popover, PopoverProps } from "../popover";

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
    >
      <AriaMenu css={menu} {...rest} />
    </Popover>
  );
}

export const MenuItem = (props: MenuItemProps) => {
  return <AriaMenuItem css={menuItem} {...props} />;
};

export { MenuTrigger } from "react-aria-components";

const menu = css`
  padding: ${spacings[1]};
  overflow-y: auto;
  outline: none;
  min-width: ${spacings[32]};
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

  &:where([data-focused]) {
    background-color: ${colors["blue-500"]};
    color: ${colors.white};
  }

  &:where([data-disabled]) {
    opacity: 50%;
  }

  &:where([data-hovered]) {
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
