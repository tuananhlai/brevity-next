import { css } from "@emotion/react";
import { forwardRef } from "react";
import { useObjectRef } from "react-aria";
import {
  Checkbox as AriaCheckbox,
  CheckboxProps as AriaCheckboxProps,
} from "react-aria-components";

import { colors, queries, shadows, spacings } from "@/styles/tokens";
import { alpha, darkModeSelector } from "@/styles/utils";

export interface CheckboxProps
  extends Omit<AriaCheckboxProps, "style" | "className" | "children"> {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const Checkbox: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = (props, forwardedRef) => {
  const { children, className, ...rest } = props;
  const ref = useObjectRef(forwardedRef);

  return (
    <AriaCheckbox
      className={`bw-checkbox ${className ?? ""}`}
      {...rest}
      css={root}
      inputRef={ref}
    >
      <span css={checkboxIconContainer} aria-hidden>
        <svg css={checkboxIcon} viewBox="0 0 14 14" fill="none">
          {/* Checkmark icon */}
          <path
            css={checkmark}
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Indeterminate icon */}
          <path
            css={indeterminateIcon}
            d="M3 7H11"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span css={labelStyles}>{children}</span>
    </AriaCheckbox>
  );
};

const _Checkbox = /*#__PURE__*/ forwardRef(Checkbox);

export { _Checkbox as Checkbox };

const root = css`
  display: flex;
  gap: ${spacings[4]};
  align-items: start;

  &:where([data-hovered]) {
    cursor: pointer;
  }
`;

const checkboxIconContainer = css`
  flex-shrink: 0;
  position: relative;
  isolation: isolate;
  display: grid;
  place-content: center;
  aspect-ratio: 1 / 1;
  width: 1.125rem;
  border-radius: 0.3125rem;
  --checked-bg: ${colors["zinc-900"]};
  --checked-border: ${alpha(colors["zinc-950"], 90)};
  --hover-border-color: ${alpha(colors["zinc-950"], 30)};
  --checkbox-check: ${colors.white};
  border: 1px solid ${alpha(colors["zinc-950"], 15)};
  // Align the checkbox icon with the label.
  margin: 4px 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -10;
    border-radius: calc(0.3125rem - 1px);
    background-color: ${colors.white};
    box-shadow: ${shadows.sm};
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: calc(0.3125rem - 1px);
    box-shadow: inset 0 1px ${alpha(colors.white, 15)};
  }

  &:where(.bw-checkbox[data-selected] *) {
    border-color: transparent;
    background-color: var(--checked-border);
    --hover-border-color: transparent;

    &::before {
      background-color: var(--checked-bg);
    }
  }

  &:where(.bw-checkbox[data-hovered] *) {
    border-color: var(--hover-border-color);
  }

  &:where(.bw-checkbox[data-focused] *) {
    outline: 2px solid ${colors["blue-500"]};
    outline-offset: 2px;
  }

  &:where(.bw-checkbox:not([data-focus-visible]) *) {
    outline: none;
  }

  &:where(.bw-checkbox[data-disabled] *) {
    opacity: 50%;
    border-color: ${alpha(colors["zinc-950"], 25)};
    background-color: ${alpha(colors["zinc-950"], 5)};
    --checkbox-check: ${alpha(colors["zinc-950"], 50)};

    &::before {
      background-color: transparent;
    }
  }

  ${darkModeSelector} {
    background-color: ${alpha(colors.white, 5)};
    border-color: ${alpha(colors.white, 15)};
    --checked-bg: ${colors["zinc-600"]};
    --hover-border-color: ${alpha(colors.white, 30)};

    &::before {
      display: none;
    }

    &::after {
      inset: -1px;
      display: none;
      border-radius: 0.3125rem;
    }

    &:where(.bw-checkbox[data-selected] *) {
      background-color: var(--checked-bg);
      border-color: ${alpha(colors.white, 5)};
      --hover-border-color: ${alpha(colors.white, 5)};

      &::after {
        display: block;
      }
    }

    &:where(.bw-checkbox[data-disabled] *) {
      border-color: ${alpha(colors.white, 20)};
      background-color: ${alpha(colors.white, 2.5)};
      --checkbox-check: ${alpha(colors.white, 50)};
    }

    &:where(.bw-checkbox[data-disabled][data-selected] *) {
      &::after {
        display: none;
      }
    }
  }

  ${queries.sm} {
    width: ${spacings[4]};
  }
`;

const checkboxIcon = css`
  aspect-ratio: 1 / 1;
  width: ${spacings[4]};
  stroke: var(--checkbox-check);
  opacity: 0;

  &:where(.bw-checkbox[data-selected] *) {
    opacity: 100%;
  }

  ${queries.sm} {
    width: ${spacings["3.5"]};
  }
`;

const checkmark = css`
  opacity: 100%;

  &:where(.bw-checkbox[data-indeterminate] *) {
    opacity: 0;
  }
`;

const indeterminateIcon = css`
  opacity: 0;

  &:where(.bw-checkbox[data-indeterminate] *) {
    opacity: 100%;
  }
`;

const labelStyles = css`
  &:where(.bw-checkbox[data-disabled] *) {
    opacity: 50%;
  }

  &:where(.bw-checkbox[data-invalid] *) {
    color: ${colors["red-600"]};

    ${darkModeSelector} {
      color: ${colors["red-500"]};
    }
  }
`;
