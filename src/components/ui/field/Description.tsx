import { cn } from "@/styles/utils";
import { Text, type TextProps } from "../text";
import styles from "./Description.module.scss";

export interface DescriptionProps extends Omit<TextProps, "slot"> {
  children: React.ReactNode;
  isDisabled?: boolean;
}

export const Description: React.FC<DescriptionProps> = (props) => {
  const { isDisabled, className, ...rest } = props;
  return (
    <Text
      className={cn(styles.root, className)}
      slot="description"
      data-disabled={isDisabled || undefined}
      {...rest}
    />
  );
};
