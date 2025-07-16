import React, { forwardRef } from "react";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
  ProgressBar,
} from "react-aria-components";
import { LuLoaderCircle } from "react-icons/lu";
import { useSpinDelay } from "@/hooks/useSpinDelay";
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
    isPending = false,
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

  const isSpinnerVisible = useSpinDelay(isPending);

  return (
    <AriaButton
      ref={ref}
      className={cn(
        buttonClassNames,
        isSpinnerVisible && styles.pending,
        className,
      )}
      isPending={isPending}
      data-spinner-visible={isSpinnerVisible || undefined}
      {...rest}
    >
      <TouchTarget>
        <ButtonIcon>{prefixIcon}</ButtonIcon>
        {typeof children === "string" ? <span>{children}</span> : children}
        <ButtonIcon>{suffixIcon}</ButtonIcon>
        {isSpinnerVisible && <ButtonSpinner />}
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

const ButtonSpinner: React.FC = () => {
  return (
    // TODO: add an appropriate aria-label to the progress bar.
    <ProgressBar className={styles.progressBar} isIndeterminate>
      <LuLoaderCircle className={styles.spinner} />
    </ProgressBar>
  );
};

const colorToStyles: Record<Required<ButtonProps>["color"], string> = {
  brand: styles.colorBrand,
  error: styles.colorError,
};
