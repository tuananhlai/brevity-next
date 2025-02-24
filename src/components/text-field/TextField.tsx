import { css } from "@emotion/react";
import { forwardRef } from "react";
import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  Input,
} from "react-aria-components";

import {
  borderRadiuses,
  colors,
  fontSizes,
  lineHeights,
  queries,
  shadows,
  spacings,
} from "@/styles/tokens";
import { alpha, darkModeSelector } from "@/styles/utils";
import { FieldsetProps, ReplaceAriaRenderProps } from "@/utils";

import { ErrorMessage, Label } from "../field";
import { Description } from "../field/Description";

export interface TextFieldProps
  extends ReplaceAriaRenderProps<AriaTextFieldProps>,
    FieldsetProps {
  placeholder?: string;
}

const TextField: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TextFieldProps
> = (props, ref) => {
  const {
    style,
    className,
    label,
    description,
    placeholder,
    errorMessage,
    ...rest
  } = props;
  const { isDisabled, isRequired } = rest;

  return (
    <AriaTextField
      css={root}
      ref={ref}
      style={style}
      className={className}
      {...rest}
    >
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
      <Input placeholder={placeholder} css={input} />
      <ErrorMessage css={errorMessageStyles} isDisabled={isDisabled}>
        {errorMessage}
      </ErrorMessage>
    </AriaTextField>
  );
};

const _TextField = /*#__PURE__*/ forwardRef(TextField);

export { _TextField as TextField };

const root = css`
  display: flex;
  flex-direction: column;
`;

const input = css`
  width: 100%;
  font-size: ${fontSizes.base};
  line-height: ${lineHeights[6]};
  color: ${colors["zinc-950"]};
  appearance: none;
  border-radius: ${borderRadiuses.lg};
  padding: calc(${spacings["2.5"]} - 1px) calc(${spacings["3.5"]} - 1px);
  --border-color: ${alpha(colors["zinc-950"], 10)};
  --border-hover-color: ${alpha(colors["zinc-950"], 20)};
  --outline: none;
  --outline-offset: 0;
  border: 1px solid var(--border-color);
  background-color: transparent;
  box-shadow: ${shadows.sm};

  &::placeholder {
    color: ${colors["zinc-500"]};
  }

  &:where([data-hovered]) {
    border-color: var(--border-hover-color);
  }

  &:not(:first-child) {
    margin-top: ${spacings[3]};
  }

  &:where([data-invalid]) {
    --border-color: ${colors["red-500"]};
    --border-hover-color: ${colors["red-500"]};
  }

  &:where([data-disabled]) {
    opacity: 50%;
    --border-color: ${alpha(colors["zinc-950"], 20)};
    box-shadow: none;
  }

  &:where([data-focused]) {
    outline: var(--outline);
    outline-offset: var(--outline-offset);
  }

  ${darkModeSelector} {
    color: ${colors.white};
    background-color: ${alpha(colors.white, 5)};
    --border-color: ${alpha(colors.white, 10)};
    --border-hover-color: ${alpha(colors.white, 20)};
    box-shadow: none;

    &:where([data-invalid]) {
      --border-color: ${colors["red-500"]};
      --border-hover-color: ${colors["red-500"]};
    }

    &:where([data-disabled]) {
      --border-color: ${alpha(colors.white, 15)};
      --border-hover-color: ${alpha(colors.white, 15)};
      background-color: ${alpha(colors.white, 2.5)};
    }
  }

  ${queries.sm} {
    padding: calc(${spacings["1.5"]} - 1px) calc(${spacings[3]} - 1px);
    font-size: ${fontSizes.sm};

    --outline: 2px solid ${colors["blue-500"]};
    --outline-offset: -2px;
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
