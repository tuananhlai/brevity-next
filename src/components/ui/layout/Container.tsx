import { cn } from "@/styles/utils";
import styles from "./Container.module.scss";

export interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const Container: React.FC<ContainerProps> = (props) => {
  return <div className={cn(styles.root, props.className)} {...props} />;
};
