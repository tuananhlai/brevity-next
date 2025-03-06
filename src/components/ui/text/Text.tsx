import { forwardRef } from "react";
import {
  Text as AriaText,
  TextProps as AriaTextProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import styles from "./Text.module.scss";

export type TextProps = AriaTextProps;

const Text: React.ForwardRefRenderFunction<HTMLElement, TextProps> = (
  props,
  ref,
) => {
  const { className, ...rest } = props;
  return (
    <AriaText className={cn(styles.root, className)} ref={ref} {...rest} />
  );
};

const _Text = /*#__PURE__*/ forwardRef(Text);

export { _Text as Text };
