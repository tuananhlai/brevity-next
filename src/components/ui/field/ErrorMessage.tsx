import { css } from "@emotion/react";
import { FieldError, FieldErrorProps } from "react-aria-components";

import { colors, fontSizes, lineHeights, queries } from "@/styles/tokens";
import { darkModeSelector } from "@/styles/utils";

export interface ErrorMessageProps extends FieldErrorProps {
  isDisabled?: boolean;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { isDisabled, ...rest } = props;
  return (
    <FieldError css={root} data-disabled={isDisabled || undefined} {...rest} />
  );
};

const root = css`
  display: block;
  font-size: ${fontSizes.base};
  line-height: ${lineHeights[6]};
  color: ${colors["red-600"]};

  &[data-disabled] {
    opacity: 50%;
  }

  ${queries.sm} {
    font-size: ${fontSizes.sm};
  }

  ${darkModeSelector} {
    color: ${colors["red-500"]};
  }
`;
