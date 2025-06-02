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
  /** @default 'brand' */
  color?: "brand" | "error";
}

export type ButtonVariant = "primary" | "secondary" | "tertiary";

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  props,
  ref,
) => {
  const {
    variant = "primary",
    color = "brand",
    children,
    className,
    ...rest
  } = props;

  const buttonClassNames = [styles.root];
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
  }

  return (
    <AriaButton
      ref={ref}
      className={cn(buttonClassNames, className)}
      data-color={color}
      {...rest}
    >
      <TouchTarget>{children}</TouchTarget>
    </AriaButton>
  );
};

const _Button = /*#__PURE__*/ forwardRef(Button);

export { _Button as Button };
