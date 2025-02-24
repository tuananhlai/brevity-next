import { css } from "@emotion/react";
import {
  Label as AriaLabel,
  LabelProps as AriaLabelProps,
} from "react-aria-components";

import {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  queries,
} from "@/styles/tokens";
import { darkModeSelector } from "@/styles/utils";

export interface LabelProps extends AriaLabelProps {
  children: React.ReactNode;
  isRequired?: boolean;
  isDisabled?: boolean;
}

export const Label: React.FC<LabelProps> = (props) => {
  const { children, isRequired, isDisabled, ...rest } = props;
  return (
    <AriaLabel data-disabled={isDisabled || undefined} css={root} {...rest}>
      {children}
      {isRequired && (
        <span aria-hidden css={{ color: colors["red-500"] }}>
          {" *"}
        </span>
      )}
    </AriaLabel>
  );
};

const root = css`
  display: block;
  user-select: none;
  font-size: ${fontSizes.base};
  line-height: ${lineHeights[6]};
  color: ${colors["zinc-950"]};
  font-weight: ${fontWeights.medium};

  ${queries.sm} {
    font-size: ${fontSizes.sm};
  }

  ${darkModeSelector} {
    color: ${colors.white};
  }

  &:where([data-disabled]) {
    opacity: 50%;
  }
`;
