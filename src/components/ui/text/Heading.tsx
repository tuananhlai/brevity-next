import { css } from "@emotion/react";
import { forwardRef } from "react";
import {
  Heading as AriaHeading,
  HeadingProps as AriaHeadingProps,
} from "react-aria-components";

import {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  queries,
} from "@/styles/tokens";
import { darkModeSelector } from "@/styles/utils";

export type HeadingProps = AriaHeadingProps;

const Heading: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  HeadingProps
> = (props, ref) => {
  return <AriaHeading ref={ref} css={root} {...props} />;
};

const _Heading = /*#__PURE__*/ forwardRef(Heading);

export { _Heading as Heading };

const root = css`
  --heading-color: ${colors["zinc-950"]};
  ${darkModeSelector} {
    --heading-color: ${colors.white};
  }

  font-size: ${fontSizes["2xl"]};
  line-height: ${lineHeights[8]};
  font-weight: ${fontWeights.semibold};
  color: var(--heading-color);

  ${queries.sm} {
    font-size: ${fontSizes["xl"]};
  }
`;
