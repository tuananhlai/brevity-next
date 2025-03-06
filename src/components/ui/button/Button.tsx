import { css } from "@emotion/react";
import classNames from "classnames";
import React, { forwardRef } from "react";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";

import { borderRadiuses, colors, shadows } from "@/styles/tokens";
import { alpha, darkModeSelector } from "@/styles/utils";

import { TouchTarget } from "../TouchTarget";
import styles from "./Button.module.scss";

export interface ButtonProps
  extends Omit<AriaButtonProps, "children" | "className" | "style"> {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  /** @default 'primary' */
  variant?: ButtonVariant;
}

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "destructive";

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  props,
  ref,
) => {
  const { variant = "primary", children, ...rest } = props;

  const buttonStyles = [];
  switch (variant) {
    case "primary":
      buttonStyles.push(primaryStyles);
      break;
    case "secondary":
      buttonStyles.push(secondaryStyles);
      break;
    case "destructive":
      buttonStyles.push(primaryStyles, destructiveColorStyles);
      break;
  }

  const buttonClassNames = [styles.base];
  if (variant === "tertiary") {
    buttonClassNames.push(styles.tertiary);
  }

  return (
    <AriaButton
      ref={ref}
      className={classNames(buttonClassNames)}
      css={buttonStyles}
      {...rest}
    >
      <TouchTarget>{children}</TouchTarget>
    </AriaButton>
  );
};

const _Button = /*#__PURE__*/ forwardRef(Button);

export { _Button as Button };

const primaryStyles = css`
  --btn-bg: ${colors["zinc-900"]};
  --btn-border: ${alpha(colors["zinc-950"], 90)};
  border-color: transparent;
  background-color: var(--btn-border);
  color: ${colors.white};
  --btn-hover-overlay: ${alpha(colors.white, 10)};
  --btn-before-display: initial;
  --btn-before-box-shadow: ${shadows.sm};
  --btn-after-inset: 0;
  --btn-after-border-radius: calc(${borderRadiuses.lg} - 1px);
  --btn-after-box-shadow: inset 0 1px ${alpha(colors.white, 15)};

  ${darkModeSelector} {
    --btn-bg: ${colors["zinc-600"]};
    background-color: var(--btn-bg);
    border-color: ${alpha(colors.white, 5)};
    --btn-hover-overlay: ${alpha(colors.white, 5)};
    --btn-before-display: none;
    --btn-after-inset: -1px;
    --btn-after-border-radius: ${borderRadiuses.lg};
  }

  &::before {
    content: "";
    display: var(--btn-before-display);
    position: absolute;
    inset: 0;
    z-index: -10;
    border-radius: calc(${borderRadiuses.lg} - 1px);
    box-shadow: ${shadows.sm};
    background-color: var(--btn-bg);
  }

  &::after {
    content: "";
    position: absolute;
    inset: var(--btn-after-inset);
    z-index: -10;
    border-radius: var(--btn-after-border-radius);
    box-shadow: inset 0 1px ${alpha(colors.white, 15)};
  }

  &:where([data-hovered], [data-pressed])::after {
    background-color: var(--btn-hover-overlay);
  }

  &:where([data-disabled]) {
    --btn-before-box-shadow: none;
    --btn-after-box-shadow: none;
  }
`;

const secondaryStyles = css`
  color: ${colors["zinc-950"]};
  border-color: ${alpha(colors["zinc-950"], 10)};
  background-color: transparent;
  --btn-pressed-background-color: ${alpha(colors["zinc-950"], 2.5)};
  --btn-hovered-background-color: ${alpha(colors["zinc-950"], 2.5)};

  ${darkModeSelector} {
    border-color: ${alpha(colors.white, 15)};
    color: ${colors.white};
    --btn-pressed-background-color: ${alpha(colors.white, 5)};
    --btn-hovered-background-color: ${alpha(colors.white, 5)};
  }

  &:where([data-pressed]) {
    background-color: var(--btn-pressed-background-color);
  }

  &:where([data-hovered]) {
    background-color: var(--btn-hovered-background-color);
  }
`;

const destructiveColorStyles = css`
  color: ${colors.white};
  --btn-border: ${alpha(colors["red-700"], 90)};
  --btn-bg: ${colors["red-600"]};
  --btn-hover-overlay: ${alpha(colors.white, 10)};

  ${darkModeSelector} {
    --btn-bg: ${colors["red-600"]};
  }
`;
