import { css } from "@emotion/react";
import { forwardRef } from "react";
import {
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  Button,
  ListBox,
  SelectValue,
} from "react-aria-components";

import {
  borderRadiuses,
  colors,
  fontSizes,
  lineHeights,
  queries,
  shadows,
  spacings,
} from "@/styles/tokens";
import { alpha } from "@/styles/utils";
import { ReplaceAriaRenderProps } from "@/utils";

import { Popover } from "../popover";

export interface SelectProps<T extends object>
  extends ReplaceAriaRenderProps<AriaSelectProps<T>> {
  // Add component props.
  items?: Iterable<T>;
}

const Select = <T extends object>(
  props: SelectProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) => {
  const { children, items, className = "", ...rest } = props;
  return (
    <AriaSelect ref={ref} className={`bw-select ${className}`} {...rest}>
      <Button css={selectBtn}>
        <SelectValue css={selectedValue} />
      </Button>
      <Popover css={popover}>
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </AriaSelect>
  );
};

const _Select = /*#__PURE__*/ forwardRef(Select);

export { _Select as Select };

const selectBtn = css`
  background-color: transparent;
  border: none;
  padding: 0;

  position: relative;
  width: 100%;
  outline: none;

  &::before {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: calc(${borderRadiuses.lg} - 1px);
    background-color: ${colors.white};
    box-shadow: ${shadows.default};
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${borderRadiuses.lg};
  }

  &:where([data-disabled]) {
    opacity: 50%;

    &::before {
      background-color: ${alpha(colors["zinc-950"], 5)};
      box-shadow: none;
    }
  }

  &:where([data-focused][data-focus-visible]) {
    &::after {
      outline-offset: 2px;
      outline: 2px solid ${colors["blue-500"]};
    }
  }

  &:where([data-hovered]) {
    cursor: pointer;
  }
`;

const selectedValue = css`
  --padding-y: calc(${spacings["2.5"]} - 1px);
  position: relative;
  display: block;
  width: 100%;
  border-radius: ${borderRadiuses.lg};
  padding-top: var(--padding-y);
  padding-bottom: var(--padding-y);
  padding-left: calc(${spacings["3.5"]} - 1px);
  padding-right: calc(${spacings["7"]} - 1px);
  min-height: ${spacings["11"]};
  font-size: ${fontSizes.base};
  line-height: ${lineHeights[6]};
  color: ${colors["zinc-950"]};
  border: 1px solid ${alpha(colors["zinc-950"], 10)};

  ${queries.sm} {
    --padding-y: calc(${spacings["1.5"]} - 1px);
    padding-left: calc(${spacings["3"]} - 1px);
    min-height: ${spacings["9"]};
    font-size: ${fontSizes.sm};
  }

  &:where([data-placeholder]) {
    color: ${colors["zinc-500"]};
  }
`;

const popover = css`
  width: var(--trigger-width);
`;
