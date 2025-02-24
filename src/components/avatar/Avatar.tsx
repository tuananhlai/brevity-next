import { SerializedStyles, css } from "@emotion/react";
import Image from "next/image";
import { Button, ButtonProps } from "react-aria-components";

import { colors, fontWeights } from "@/styles/tokens";
import { darkModeSelector } from "@/styles/utils";

export interface AvatarProps {
  alt: string;
  initials: string;

  src?: string;
  style?: React.CSSProperties;
  className?: string;
  color?: AvatarColor;
  size?: AvatarSize;
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const {
    className,
    alt,
    initials,
    src,
    style,
    color = "black",
    size = "md",
  } = props;

  return (
    <span
      css={root}
      style={{
        ["--avatar-width" as string]: `${sizeToWidth[size]}px`,
        ...style,
      }}
      className={className}
    >
      {src != null ? (
        <Image
          width={sizeToWidth[size]}
          height={sizeToWidth[size]}
          css={img}
          src={src}
          alt={alt}
        />
      ) : (
        <svg
          css={[initialsIcon, colorToInitialsStyles[color]]}
          viewBox="0 0 100 100"
          aria-hidden={alt ? undefined : "true"}
        >
          {alt && <title>{alt}</title>}
          <text
            x="50%"
            y="50%"
            alignmentBaseline="middle"
            dominantBaseline="middle"
            textAnchor="middle"
            dy=".125em"
          >
            {initials}
          </text>
        </svg>
      )}
    </span>
  );
};

export interface AvatarButtonProps
  extends Omit<ButtonProps, "style" | "className" | "children">,
    Omit<AvatarProps, "alt"> {
  label: string;
}

export const AvatarButton: React.FC<AvatarButtonProps> = (props) => {
  const { initials, src, color, size, label, ...buttonProps } = props;
  return (
    <Button css={avatarBtn} aria-label={label} {...buttonProps}>
      <Avatar alt="" initials={initials} src={src} color={color} size={size} />
    </Button>
  );
};

export type AvatarColor = "blue" | "black";
export type AvatarSize = "sm" | "md" | "lg";

const root = css`
  display: inline-grid;
  place-items: center;
  border-radius: 50%;
`;

const initialsIcon = css`
  width: var(--avatar-width);
  aspect-ratio: 1 / 1;
  fill: currentColor;
  padding: 5%;
  font-size: 48px;
  font-weight: ${fontWeights.medium};
  text-transform: uppercase;
  border-radius: 50%;
`;

const img = css`
  width: var(--avatar-width);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
`;

const colorToInitialsStyles: Record<AvatarColor, SerializedStyles> = {
  blue: css`
    background-color: ${colors["blue-500"]};
    color: ${colors.white};
  `,
  black: css`
    background-color: ${colors["zinc-900"]};
    color: ${colors.white};

    ${darkModeSelector} {
      background-color: ${colors.white};
      color: ${colors.black};
    }
  `,
};

const sizeToWidth: Record<AvatarSize, number> = {
  sm: 24,
  md: 32,
  lg: 48,
};

const avatarBtn = css`
  display: grid;
  place-items: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 0;
  outline-offset: 2px;
  outline: 2px solid ${colors["blue-500"]};

  &[data-hovered] {
    cursor: pointer;
  }

  &:not([data-focus-visible]) {
    outline: none;
  }
`;
