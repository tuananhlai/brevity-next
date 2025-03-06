import { css } from "@emotion/react";
import { forwardRef } from "react";
import {
  Text as AriaText,
  TextProps as AriaTextProps,
} from "react-aria-components";
import { colors, fontSizes, lineHeights, queries } from "@/styles/tokens";
import { darkModeSelector } from "@/styles/utils";

export type TextProps = AriaTextProps;

const Text: React.ForwardRefRenderFunction<HTMLElement, TextProps> = (
  props,
  ref,
) => {
  return <AriaText css={root} ref={ref} {...props} />;
};

const _Text = /*#__PURE__*/ forwardRef(Text);

export { _Text as Text };

const root = css`
  --text-color: ${colors["zinc-500"]};
  ${darkModeSelector} {
    --text-color: ${colors["zinc-400"]};
  }

  font-size: ${fontSizes.base};
  line-height: ${lineHeights[6]};
  color: var(--text-color);

  ${queries.sm} {
    font-size: ${fontSizes.sm};
  }
`;
