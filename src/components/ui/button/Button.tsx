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
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
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
    prefixIcon,
    suffixIcon,
    ...rest
  } = props;

  const buttonClassNames = [styles.root, colorToStyles[color]];
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
      <TouchTarget>
        <ButtonIcon>{prefixIcon}</ButtonIcon>
        {children}
        <ButtonIcon>{suffixIcon}</ButtonIcon>
      </TouchTarget>
    </AriaButton>
  );
};

const _Button = /*#__PURE__*/ forwardRef(Button);

export { _Button as Button };

const ButtonIcon: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <span aria-hidden className={styles.buttonIcon}>
      {children}
    </span>
  );
};

const colorToStyles: Record<Required<ButtonProps>["color"], string> = {
  brand: styles.colorBrand,
  error: styles.colorError,
};
