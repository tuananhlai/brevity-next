import { cn } from "@/styles/utils";
import styles from "./AppLogo.module.scss";

export interface AppLogoProps {
  className?: string;
}

export const AppLogo: React.FC<AppLogoProps> = (props) => {
  const { className } = props;
  return <div className={cn(styles.root, className)}>Brevity</div>;
};
