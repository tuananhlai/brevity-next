import { css } from "@emotion/react";
import { forwardRef } from "react";
import {
  Radio as AriaRadio,
  RadioProps as AriaRadioProps,
} from "react-aria-components";

import {
  borderRadiuses,
  colors,
  queries,
  shadows,
  spacings,
} from "@/styles/tokens";
import { alpha, darkModeSelector } from "@/styles/utils";
import { ReplaceAriaRenderProps } from "@/utils";

export type RadioProps = ReplaceAriaRenderProps<AriaRadioProps>;

const Radio: React.ForwardRefRenderFunction<HTMLLabelElement, RadioProps> = (
  props,
  ref,
) => {
  const { children, className = "", ...rest } = props;
  return (
    <AriaRadio
      ref={ref}
      className={`bw-radio ${className}`}
      css={root}
      {...rest}
    >
      <span css={radioIcon}>
        <span css={radioIndicator} />
      </span>
      <div css={labelStyles}>{children}</div>
    </AriaRadio>
  );
};

const _Radio = /*#__PURE__*/ forwardRef(Radio);

export { _Radio as Radio };

const root = css`
  display: flex;
  align-items: start;
  gap: ${spacings[4]};

  &:where([data-hovered]) {
    cursor: pointer;
  }
`;

const radioIcon = css`
  --size: 1.1875rem;
  position: relative;
  isolation: isolate;
  display: flex;
  width: var(--size);
  height: var(--size);
  flex-shrink: 0;
  border-radius: ${borderRadiuses.full};
  border: 1px solid ${alpha(colors["zinc-950"], 15)};
  --hover-border-color: ${alpha(colors["zinc-950"], 30)};
  --radio-indicator-background-color: transparent;
  --radio-indicator-selected-background-color: ${colors.white};
  // Align the checkbox icon with the label.
  margin: 3px 0;

  ${queries.sm} {
    --size: 1.0625rem;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -10;
    border-radius: ${borderRadiuses.full};
    background-color: ${colors.white};
    box-shadow: ${shadows.sm};
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${borderRadiuses.full};
    box-shadow: inset 0 1px ${alpha(colors.white, 15)};
  }

  &:where(.bw-radio[data-selected] *) {
    border-color: transparent;
    --hover-border-color: transparent;
    background-color: ${alpha(colors["zinc-950"], 90)};
    --radio-indicator-background-color: var(
      --radio-indicator-selected-background-color
    );

    &::before {
      background-color: ${colors["zinc-900"]};
    }
  }

  &:where(.bw-radio[data-disabled] *) {
    opacity: 50%;
    border-color: ${alpha(colors["zinc-950"], 25)};
    background-color: ${alpha(colors["zinc-950"], 5)};
    --radio-indicator-selected-background-color: ${alpha(
      colors["zinc-950"],
      50,
    )};

    &::before {
      background-color: transparent;
    }
  }

  &:where(.bw-radio[data-hovered] *) {
    border-color: var(--hover-border-color);
    --radio-indicator-background-color: ${alpha(colors["zinc-900"], 10)};
  }

  &:where(.bw-radio[data-hovered][data-selected] *) {
    --radio-indicator-background-color: var(
      --radio-indicator-selected-background-color
    );
  }

  &:where(.bw-radio[data-focused] *) {
    outline: 2px solid ${colors["blue-500"]};
    outline-offset: 2px;
  }

  &:where(.bw-radio:not([data-focus-visible]) *) {
    outline: none;
  }

  ${darkModeSelector} {
    background-color: ${alpha(colors.white, 5)};
    border-color: ${alpha(colors.white, 15)};
    --hover-border-color: ${alpha(colors.white, 30)};

    &::before {
      display: none;
    }

    &::after {
      inset: -1px;
      display: none;
      border-radius: ${borderRadiuses.full};
    }

    &:where(.bw-radio[data-selected] *) {
      background-color: ${colors["zinc-600"]};
      border-color: ${alpha(colors.white, 5)};
      --hover-border-color: ${alpha(colors.white, 5)};

      &::after {
        display: block;
      }
    }

    &:where(.bw-radio[data-hovered] *) {
      --radio-indicator-background-color: ${colors["zinc-700"]};
    }

    &:where(.bw-radio[data-hovered][data-selected] *) {
      --radio-indicator-background-color: var(
        --radio-indicator-selected-background-color
      );
    }

    &:where(.bw-radio[data-disabled] *) {
      background-color: ${alpha(colors.white, 2.5)};
      border-color: ${alpha(colors.white, 20)};
      --radio-indicator-selected-background-color: ${alpha(colors.white, 50)};
    }

    &:where(.bw-radio[data-disabled][data-selected] *) {
      &::after {
        display: none;
      }
    }
  }
`;

const radioIndicator = css`
  width: 100%;
  height: 100%;
  border-radius: ${borderRadiuses.full};
  border: 4.5px solid transparent;
  background-clip: padding-box;
  background-color: var(--radio-indicator-background-color);
`;

const labelStyles = css`
  &:where(.bw-radio[data-disabled] *) {
    opacity: 50%;
  }

  &:where(.bw-radio[data-invalid] *) {
    color: ${colors["red-600"]};

    ${darkModeSelector} {
      color: ${colors["red-500"]};
    }
  }
`;
