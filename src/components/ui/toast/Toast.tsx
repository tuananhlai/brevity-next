import {
  UNSTABLE_Toast as AriaToast,
  ToastProps as AriaToastProps,
  Button,
  UNSTABLE_ToastContent as ToastContent,
} from "react-aria-components";
import { LuX } from "react-icons/lu";
import { Text } from "@/components/ui/text";
import { TouchTarget } from "@/components/ui/touch-target";
import styles from "./Toast.module.scss";

export interface ToastProps<T> extends AriaToastProps<T> {}

export const Toast: React.FC<ToastProps<React.ReactNode>> = (props) => {
  const { children, ...rest } = props;
  return (
    <AriaToast className={styles.toastRoot} {...rest}>
      {children}
    </AriaToast>
  );
};

export interface ToastTitleProps {
  children: React.ReactNode;
}

export const ToastTitle: React.FC<ToastTitleProps> = ({ children }) => {
  return (
    <Text elementType="p" className={styles.toastTitle} slot="title">
      {children}
    </Text>
  );
};

export interface ToastDescriptionProps {
  children: React.ReactNode;
}

export const ToastDescription: React.FC<ToastDescriptionProps> = ({
  children,
}) => {
  return (
    <Text elementType="p" slot="description">
      {children}
    </Text>
  );
};

export const ToastCloseButton: React.FC = () => {
  return (
    <Button className={styles.closeBtn} slot="close">
      <TouchTarget>
        <LuX />
      </TouchTarget>
    </Button>
  );
};

export interface DefaultToastLayoutProps {
  variant: "success" | "danger";
  title: React.ReactNode;
  description: React.ReactNode;
  icon: React.ReactNode;
}

export const DefaultToastLayout: React.FC<DefaultToastLayoutProps> = (
  props,
) => {
  const { title, description, icon, variant } = props;
  return (
    <div className={styles.toast} data-variant={variant}>
      <div className={styles.toastIcon}>{icon}</div>
      <ToastContent>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
      </ToastContent>
      <ToastCloseButton />
    </div>
  );
};
