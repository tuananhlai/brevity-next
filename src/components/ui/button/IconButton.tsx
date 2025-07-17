import { forwardRef } from "react";
import { cn } from "@/styles/utils";
import { Button, ButtonProps } from "./Button";
import styles from "./Button.module.scss";

export interface IconButtonProps
  extends Omit<ButtonProps, "children" | "prefixIcon" | "suffixIcon"> {
  /**
   * The icon to display inside the button.
   * @example <LuPlus />
   */
  children: React.ReactElement;
}

/**
 * A button that displays an icon. It should be labeled to provide context for screen readers using
 * `aria-label`, `aria-labelledby` or similar attributes.
 *
 * @example
 * <IconButton aria-label="Add">
 *   <LuPlus />
 * </IconButton>
 */
const IconButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  IconButtonProps
> = (props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <Button className={cn(styles.iconButton, className)} ref={ref} {...rest}>
      {children}
    </Button>
  );
};

const _IconButton = /*#__PURE__*/ forwardRef(IconButton);

export { _IconButton as IconButton };
