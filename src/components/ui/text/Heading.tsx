import { forwardRef } from "react";
import {
  Heading as AriaHeading,
  HeadingProps as AriaHeadingProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import styles from "./Text.module.scss";

export type HeadingProps = AriaHeadingProps;

const Heading: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  HeadingProps
> = (props, ref) => {
  const { className, ...rest } = props;
  return (
    <AriaHeading
      ref={ref}
      className={cn(styles.heading, className)}
      {...rest}
    />
  );
};

const _Heading = /*#__PURE__*/ forwardRef(Heading);

export { _Heading as Heading };
