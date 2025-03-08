import React, { forwardRef } from "react";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import { TouchTarget } from "../touch-target";
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
  const { variant = "primary", children, className, ...rest } = props;

  const buttonClassNames = [styles.base];
  switch (variant) {
    case "primary":
      buttonClassNames.push(styles.primary);
      break;
    case "secondary":
      buttonClassNames.push(styles.secondary);
      break;
    case "tertiary":
      buttonClassNames.push(styles.tertiary);
      break;
    case "destructive":
      buttonClassNames.push(styles.primary, styles.destructive);
      break;
  }

  return (
    <AriaButton ref={ref} className={cn(buttonClassNames, className)} {...rest}>
      <TouchTarget>{children}</TouchTarget>
    </AriaButton>
  );
};

const _Button = /*#__PURE__*/ forwardRef(Button);

export { _Button as Button };
