import { forwardRef } from "react";
import { Link, type LinkProps } from "react-aria-components";
import { cn } from "@/styles/utils";
import type { ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./Text.module.scss";

export interface TextLinkProps extends ReplaceAriaRenderProps<LinkProps> {}

const TextLink: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  TextLinkProps
> = (props, ref) => {
  const { className, ...rest } = props;

  return <Link ref={ref} className={cn(styles.link, className)} {...rest} />;
};

const _TextLink = /*#__PURE__*/ forwardRef(TextLink);

export { _TextLink as TextLink };
