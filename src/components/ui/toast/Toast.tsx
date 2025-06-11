import {
  UNSTABLE_Toast as AriaToast,
  ToastProps as AriaToastProps,
  Button,
  UNSTABLE_ToastContent as ToastContent,
} from "react-aria-components";
import { LuCircleCheckBig, LuTriangleAlert, LuX } from "react-icons/lu";
import { Text } from "@/components/ui/text";
import { TouchTarget } from "@/components/ui/touch-target";
import { cn } from "@/styles/utils";
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
  className?: string;
}

export const ToastTitle: React.FC<ToastTitleProps> = ({
  children,
  className,
}) => {
  return (
    <Text
      elementType="p"
      className={cn(styles.toastTitle, className)}
      slot="title"
    >
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
  title: React.ReactNode;
  description?: React.ReactNode;
  /**
   * An icon to display at the start of the toast. Tested with
   * icon components from React Icons.
   *
   * @example
   * <LuCircleCheckBig />
   */
  icon: React.ReactNode;
  className?: string;
}

export const DefaultToastLayout: React.FC<DefaultToastLayoutProps> = (
  props,
) => {
  const { title, description, icon, className } = props;
  const hasDescription = description != null;

  return (
    <div className={cn(styles.toast, className)}>
      <div className={styles.toastIcon}>{icon}</div>
      <ToastContent>
        <ToastTitle
          className={hasDescription ? undefined : styles.fontWeightRegular}
        >
          {title}
        </ToastTitle>
        {hasDescription && <ToastDescription>{description}</ToastDescription>}
      </ToastContent>
      <ToastCloseButton />
    </div>
  );
};

export interface SuccessToastLayoutProps {
  title: React.ReactNode;
  description?: React.ReactNode;
}

export const SuccessToastLayout: React.FC<SuccessToastLayoutProps> = (
  props,
) => {
  const { title, description } = props;
  return (
    <DefaultToastLayout
      title={title}
      description={description}
      icon={<LuCircleCheckBig color="var(--bw-color-fg-success-primary)" />}
    />
  );
};

export interface DangerToastLayoutProps {
  title: React.ReactNode;
  description?: React.ReactNode;
}

export const DangerToastLayout: React.FC<DangerToastLayoutProps> = (props) => {
  const { title, description } = props;
  return (
    <DefaultToastLayout
      title={title}
      description={description}
      icon={<LuTriangleAlert color="var(--bw-color-fg-error-primary)" />}
    />
  );
};
