import {
  UNSTABLE_ToastQueue as AriaToastQueue,
  UNSTABLE_ToastRegion as AriaToastRegion,
  Button,
  UNSTABLE_Toast as Toast,
  UNSTABLE_ToastContent as ToastContent,
  ToastOptions,
} from "react-aria-components";
import { LuCircleCheckBig, LuTriangleAlert, LuX } from "react-icons/lu";
import { Text } from "@/components/ui/text";
import { TouchTarget } from "@/components/ui/touch-target";
import styles from "./Toast.module.scss";

export interface ToastRegionProps {
  queue: ToastQueue;
}

export const ToastRegion: React.FC<ToastRegionProps> = (props) => {
  const { queue } = props;

  return (
    <AriaToastRegion className={styles.toastRegion} queue={queue.ariaQueue}>
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
        <ToastDescription>{description}</ToastDescription>
      </ToastContent>
      <ToastCloseButton />
    </div>
  );
};

export interface ToastParams {
  title: string;
  description: string;
}

export class ToastQueue {
  ariaQueue: AriaToastQueue<React.ReactNode>;

  constructor(opts?: { maxVisibleToasts?: number }) {
    this.ariaQueue = new AriaToastQueue<React.ReactNode>(opts);
  }

  success(params: ToastParams, options?: ToastOptions) {
    const { title, description } = params;

    this.ariaQueue.add(
      <DefaultToastLayout
        variant="success"
        title={title}
        description={description}
        icon={<LuCircleCheckBig />}
      />,
      options,
    );
  }

  danger(params: ToastParams, options?: ToastOptions) {
    const { title, description } = params;

    this.ariaQueue.add(
      <DefaultToastLayout
        variant="danger"
        title={title}
        description={description}
        icon={<LuTriangleAlert />}
      />,
      options,
    );
  }
}
