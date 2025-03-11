import {
  UNSTABLE_ToastRegion as AriaToastRegion,
  Button,
  UNSTABLE_Toast as Toast,
  UNSTABLE_ToastContent as ToastContent,
  ToastOptions,
  UNSTABLE_ToastQueue as ToastQueue,
} from "react-aria-components";
import { LuCircleCheckBig, LuX } from "react-icons/lu";
import { Text } from "@/components/ui/text";
import styles from "./Toast.module.scss";

const queue = new ToastQueue<React.ReactNode>();

export const ToastRegion: React.FC = () => {
  return (
    <AriaToastRegion queue={queue}>
      {({ toast }) => (
        <Toast className={styles.toastRoot} toast={toast}>
          {toast.content}
        </Toast>
      )}
    </AriaToastRegion>
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
      <LuX />
    </Button>
  );
};

export interface ToastParams {
  title: string;
  description: string;
}

export const toast = {
  success: (params: ToastParams, options?: ToastOptions) => {
    const { title, description } = params;
    queue.add(
      <div className={styles.toast}>
        <div className={styles.toastIcon}>
          <LuCircleCheckBig />
        </div>
        <ToastContent className={styles.toastContent}>
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>
        </ToastContent>
        <ToastCloseButton />
      </div>,
      options,
    );
  },
};
