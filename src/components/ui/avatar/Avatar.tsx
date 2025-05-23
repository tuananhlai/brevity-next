import Image from "next/image";
import { Button, ButtonProps } from "react-aria-components";
import { cn } from "@/styles/utils";
import styles from "./Avatar.module.scss";

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
      style={{
        ["--avatar-width" as string]: `${sizeToWidth[size]}px`,
        ...style,
      }}
      className={cn(styles.root, className)}
    >
      {src != null ? (
        <Image
          width={sizeToWidth[size]}
          height={sizeToWidth[size]}
          className={styles.img}
          src={src}
          alt={alt}
        />
      ) : (
        <svg
          className={styles.initialsIcon}
          data-color={color}
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
  "aria-label": string;
}

export const AvatarButton: React.FC<AvatarButtonProps> = (props) => {
  const {
    initials,
    src,
    color,
    size,
    "aria-label": ariaLabel,
    className,
    ...buttonProps
  } = props;
  return (
    <Button
      className={cn(styles.avatarBtn, className)}
      aria-label={ariaLabel}
      {...buttonProps}
    >
      <Avatar alt="" initials={initials} src={src} color={color} size={size} />
    </Button>
  );
};

export type AvatarColor = "blue" | "black";
export type AvatarSize = "sm" | "md" | "lg";

const sizeToWidth: Record<AvatarSize, number> = {
  sm: 24,
  md: 32,
  lg: 48,
};
