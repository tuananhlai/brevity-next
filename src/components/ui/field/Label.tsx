import {
  Label as AriaLabel,
  LabelProps as AriaLabelProps,
} from "react-aria-components";
import { colors } from "@/styles/tokens";
import { cn } from "@/styles/utils";
import styles from "./Label.module.scss";

export interface LabelProps extends AriaLabelProps {
  children: React.ReactNode;
  isRequired?: boolean;
  isDisabled?: boolean;
}

export const Label: React.FC<LabelProps> = (props) => {
  const { children, isRequired, isDisabled, className, ...rest } = props;
  return (
    <AriaLabel
      data-disabled={isDisabled || undefined}
      className={cn(styles.root, className)}
      {...rest}
    >
      {children}
      {isRequired && (
        <span aria-hidden css={{ color: colors["red-500"] }}>
          {" *"}
        </span>
      )}
    </AriaLabel>
  );
};
