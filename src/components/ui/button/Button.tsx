import { useLingui } from "@lingui/react/macro";
import React, { forwardRef } from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  ProgressBar,
} from "react-aria-components";
import { LuLoaderCircle } from "react-icons/lu";
import { TouchTarget } from "@/components/ui/touch-target";
import { useSpinDelay } from "@/hooks/useSpinDelay";
import { cn } from "@/styles/utils";
import styles from "./Button.module.scss";

export interface ButtonProps extends Omit<
  AriaButtonProps,
  "children" | "className" | "style"
> {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  /** @default 'primary' */
  variant?: ButtonVariant;
  /** @default 'brand' */
  color?: "brand" | "error";
  /**
   * The icon to display before the button's content.
   * @example <LuPlus />
   */
  prefixIcon?: React.ReactNode;
  /**
   * The icon to display after the button's content.
   * @example <LuCheck />
   */
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
        isSpinnerVisible && styles.spinnerVisible,
        className,
      )}
      isPending={isPending}
      data-spinner-visible={isSpinnerVisible || undefined}
      {...rest}
    >
      <TouchTarget>
        {prefixIcon != null && <ButtonIcon>{prefixIcon}</ButtonIcon>}
        <span>{children}</span>
        {suffixIcon != null && <ButtonIcon>{suffixIcon}</ButtonIcon>}
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
  const { t } = useLingui();

  return (
    <ProgressBar
      aria-label={t`Pending`}
      className={styles.progressBar}
      isIndeterminate
    >
      <LuLoaderCircle className={styles.spinner} />
    </ProgressBar>
  );
};

const colorToStyles: Record<Required<ButtonProps>["color"], string> = {
  brand: styles.colorBrand,
  error: styles.colorError,
};
