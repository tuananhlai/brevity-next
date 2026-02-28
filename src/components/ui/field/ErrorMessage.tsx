import { FieldError, type FieldErrorProps } from "react-aria-components";
import { cn } from "@/styles/utils";
import styles from "./ErrorMessage.module.scss";

export interface ErrorMessageProps extends FieldErrorProps {
  isDisabled?: boolean;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { isDisabled, className, ...rest } = props;
  return (
    <FieldError
      className={cn(styles.root, className)}
      data-disabled={isDisabled || undefined}
      {...rest}
    />
  );
};
