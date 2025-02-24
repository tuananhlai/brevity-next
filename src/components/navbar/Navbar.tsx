import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { Button, Link, LinkProps } from "react-aria-components";

import {
  borderRadiuses,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  queries,
  spacings,
} from "@/styles/tokens";
import { alpha, darkModeSelector } from "@/styles/utils";

import { TouchTarget } from "../TouchTarget";
import { ButtonProps } from "../button";

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  return <nav css={root} {...props} />;
};

export const NavbarSpacer = () => <div css={spacer} />;

export interface NavbarLinkProps extends LinkProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

export const NavbarLink: React.FC<NavbarLinkProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Link css={item} {...rest}>
      <TouchTarget>{children}</TouchTarget>
    </Link>
  );
};

export interface NavbarButtonProps
  extends Omit<ButtonProps, "children" | "style" | "className"> {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

export const NavbarButton: React.FC<NavbarButtonProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Button css={item} {...rest}>
      <TouchTarget>{children}</TouchTarget>
    </Button>
  );
};

const root = css`
  --navbar-gap: ${spacings[4]};
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--navbar-gap);
  padding: 0 ${spacings["2.5"]};
`;

const spacer = css`
  flex: 1;
`;

const item = css`
  display: flex;
  min-width: 0;
  align-items: center;
  border-radius: ${borderRadiuses.lg};
  padding: ${spacings[2]};
  text-align: left;
  font-size: ${fontSizes.base};
  line-height: ${lineHeights[6]};
  font-weight: ${fontWeights.medium};
  color: ${colors["zinc-950"]};
  text-decoration: none;
  background-color: transparent;
  border: none;
  --navbar-item-hover-bg-color: ${alpha(colors["zinc-950"], 5)};

  ${queries.sm} {
    font-size: ${fontSizes.sm};
    line-height: ${lineHeights[5]};
  }

  &:where(:not([data-focus-visible])) {
    outline: none;
  }

  &:where([data-hovered]) {
    cursor: pointer;
  }

  &:where([data-hovered], [data-pressed]) {
    background-color: var(--navbar-item-hover-bg-color);
  }

  ${darkModeSelector} {
    --navbar-item-hover-bg-color: ${alpha(colors.white, 5)};
    color: ${colors.white};
  }
`;
