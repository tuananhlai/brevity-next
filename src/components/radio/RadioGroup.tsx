import { css } from "@emotion/react";
import { forwardRef } from "react";
import {
  RadioGroup as AriaRadioGroup,
  RadioGroupProps as AriaRadioGroupProps,
} from "react-aria-components";

import { spacings } from "@/styles/tokens";
import { FieldsetProps, ReplaceAriaRenderProps } from "@/utils";

import { Description, ErrorMessage, Label } from "../field";

export interface RadioGroupProps
  extends ReplaceAriaRenderProps<AriaRadioGroupProps>,
    FieldsetProps {}

const RadioGroup: React.ForwardRefRenderFunction<
  HTMLDivElement,
  RadioGroupProps
> = (props, ref) => {
  const { children, label, description, errorMessage, ...rest } = props;
  const { isRequired, isDisabled } = rest;
  return (
    <AriaRadioGroup ref={ref} {...rest}>
      {label != null && (
        <Label isRequired={isRequired} isDisabled={isDisabled}>
          {label}
        </Label>
      )}
      {description != null && (
        <Description css={descriptionStyles} isDisabled={isDisabled}>
          {description}
        </Description>
      )}
      <div css={group}>{children}</div>
      <ErrorMessage css={errorMessageStyles} isDisabled={isDisabled}>
        {errorMessage}
      </ErrorMessage>
    </AriaRadioGroup>
  );
};

const _RadioGroup = /*#__PURE__*/ forwardRef(RadioGroup);

export { _RadioGroup as RadioGroup };

const group = css`
  display: flex;
  flex-direction: column;
  gap: ${spacings[3]};

  &:not(:first-child) {
    margin-top: ${spacings[6]};
  }
`;

const descriptionStyles = css`
  &:not(:first-child) {
    margin-top: ${spacings[1]};
  }
`;

const errorMessageStyles = css`
  margin-top: ${spacings[3]};
`;
