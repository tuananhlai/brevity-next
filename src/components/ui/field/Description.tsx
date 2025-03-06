import { css } from "@emotion/react";
import { Text, TextProps } from "../text";

export interface DescriptionProps extends Omit<TextProps, "slot"> {
  children: React.ReactNode;
  isDisabled?: boolean;
}

export const Description: React.FC<DescriptionProps> = (props) => {
  const { isDisabled, ...rest } = props;
  return (
    <Text
      data-disabled={isDisabled || undefined}
      slot="description"
      css={root}
      {...rest}
    />
  );
};

const root = css`
  display: block;

  &:where([data-disabled]) {
    opacity: 50%;
  }
`;
