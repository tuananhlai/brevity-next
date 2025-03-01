import { css } from "@emotion/react";
import { forwardRef } from "react";
import {
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  Button,
  ListBox,
  ListBoxProps,
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

import { Popover } from "../popover";

export interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children" | "className" | "style"> {
  className?: string;
  style?: React.CSSProperties;
  children?: ListBoxProps<T>["children"];
  items?: ListBoxProps<T>["items"];
}

const Select = <T extends object>(
  props: SelectProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) => {
  const { children, items, className = "", ...rest } = props;

  return (
    <AriaSelect ref={ref} className={`bw-select ${className}`} {...rest}>
      <Button className="bw-select-button" css={selectBtn}>
        <SelectValue css={selectedValue} />
        <span css={arrowContainer}>
          <svg css={arrow} viewBox="0 0 16 16" aria-hidden="true" fill="none">
            <path
              d="M5.75 10.75L8 13L10.25 10.75"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.25 5.25L8 3L5.75 5.25"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Button>
      <Popover css={popover}>
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </AriaSelect>
  );
};

const _Select = /*#__PURE__*/ forwardRef(Select) as <T extends object>(
  props: SelectProps<T> & React.RefAttributes<HTMLDivElement>,
) => JSX.Element;

export { _Select as Select };

const selectBtn = css`
  position: relative;
  width: 100%;
  outline: none;
  background-color: transparent;
  border: none;
  padding: 0;
  text-align: left;

  &::before {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: calc(${borderRadiuses.lg} - 1px);
    background-color: ${colors.white};
    box-shadow: ${shadows.sm};
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
      outline-offset: -2px;
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
  background-color: transparent;
  // Show the selected option in one line only.
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:where(.bw-select-button[data-hovered] *) {
    border-color: ${alpha(colors["zinc-950"], 20)};
  }

  &:where(.bw-select[data-invalid] *) {
    border-color: ${colors["red-500"]};
  }

  &:where(.bw-select[data-disabled] *) {
    border-color: ${alpha(colors["zinc-950"], 20)};
  }

  &[data-placeholder] {
    color: ${colors["zinc-500"]};
  }

  ${queries.sm} {
    --padding-y: calc(${spacings["1.5"]} - 1px);
    padding-left: calc(${spacings["3"]} - 1px);
    min-height: ${spacings["9"]};
    font-size: ${fontSizes.sm};
  }
`;

const popover = css`
  width: var(--trigger-width);
`;

const arrowContainer = css`
  position: absolute;
  inset-block: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding-right: ${spacings[2]};
`;

const arrow = css`
  width: ${spacings[5]};
  aspect-ratio: 1 / 1;
  stroke: ${colors["zinc-500"]};

  &:where(.bw-select[data-disabled] *) {
    stroke: ${colors["zinc-600"]};
  }

  ${queries.sm} {
    width: ${spacings[4]};
  }
`;
