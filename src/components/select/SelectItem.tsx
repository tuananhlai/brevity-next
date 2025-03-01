import { css } from "@emotion/react";
import { ListBoxItem, ListBoxItemProps } from "react-aria-components";

import { colors, fontSizes, lineHeights, queries } from "@/styles/tokens";
import { ReplaceAriaRenderProps } from "@/utils";

export type SelectItemProps<T> = ReplaceAriaRenderProps<ListBoxItemProps<T>>;

export const SelectItem = <T extends object>(props: SelectItemProps<T>) => {
  return <ListBoxItem css={root} {...props} />;
};

const root = css`
  font-size: ${fontSizes.base};
  line-height: ${lineHeights[6]};
  outline: none;

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
    font-size: ${fontSizes.sm};
  }
`;
