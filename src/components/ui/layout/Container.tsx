import { cn } from "@/styles/utils";
import styles from "./Container.module.scss";

export interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  /**
   * The max-width of the container.
   * @default 'xl'
   */
  maxWidth?: MaxWidth;
}

type MaxWidth = "sm" | "md" | "lg" | "xl" | "2xl";

export const Container: React.FC<ContainerProps> = (props) => {
  const { maxWidth = "xl", className, ...rest } = props;
  return (
    <div
      className={cn(styles.root, maxWidthToStyles[maxWidth], className)}
      {...rest}
    />
  );
};

const maxWidthToStyles: Record<MaxWidth, string> = {
  sm: styles.maxWidthSm,
  md: styles.maxWidthMd,
  lg: styles.maxWidthLg,
  xl: styles.maxWidthXl,
  "2xl": styles.maxWidth2xl,
};
