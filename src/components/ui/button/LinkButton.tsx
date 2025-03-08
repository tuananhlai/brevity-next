import { LinkDOMProps } from "@react-types/shared";
import React, { forwardRef } from "react";
import { Link } from "react-aria-components";
import { cn } from "@/styles/utils";
import { TouchTarget } from "../touch-target";
import { ButtonProps } from "./Button";
import styles from "./Button.module.scss";

export interface LinkButtonProps extends ButtonProps, LinkDOMProps {}

const LinkButton: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  LinkButtonProps
> = (props, ref) => {
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
    <Link ref={ref} className={cn(buttonClassNames, className)} {...rest}>
      <TouchTarget>{children}</TouchTarget>
    </Link>
  );
};

const _LinkButton = /*#__PURE__*/ forwardRef(LinkButton);

export { _LinkButton as LinkButton };
