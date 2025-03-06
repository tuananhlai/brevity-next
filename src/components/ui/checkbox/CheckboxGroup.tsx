import { css } from "@emotion/react";
import { forwardRef } from "react";
import {
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
} from "react-aria-components";
import { spacings } from "@/styles/tokens";
import { FieldsetProps, ReplaceAriaRenderProps } from "@/utils";
import { Description, ErrorMessage, Label } from "../field";

export interface CheckboxGroupProps
  extends ReplaceAriaRenderProps<AriaCheckboxGroupProps>,
    FieldsetProps {}

const CheckboxGroup: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxGroupProps
> = (props, forwardedRef) => {
  const { children, label, description, errorMessage, ...rest } = props;
  const { isDisabled, isRequired } = rest;

  return (
    <AriaCheckboxGroup ref={forwardedRef} css={root} {...rest}>
      {label != null && (
        <Label isRequired={isRequired} isDisabled={isDisabled}>
          {label}
        </Label>
      )}
      {description != null && (
        <Description isDisabled={isDisabled}>{description}</Description>
      )}
      <div css={group}>{children}</div>
      <ErrorMessage css={errorMessageStyles} isDisabled={isDisabled}>
        {errorMessage}
      </ErrorMessage>
    </AriaCheckboxGroup>
  );
};

const _CheckboxGroup = /*#__PURE__*/ forwardRef(CheckboxGroup);

export { _CheckboxGroup as CheckboxGroup };

const root = css`
  display: flex;
  flex-direction: column;
`;

const group = css`
  display: flex;
  flex-direction: column;
  gap: ${spacings[3]};

  &:not(:first-child) {
    margin-top: ${spacings[3]};
  }
`;

const errorMessageStyles = css`
  margin-top: ${spacings[3]};
`;
