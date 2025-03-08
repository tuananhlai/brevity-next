import {
  Dialog as AriaDialog,
  DialogProps as AriaDialogProps,
  ModalOverlayProps as AriaModalOverlayProps,
  Heading,
  HeadingProps,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import styles from "./Dialog.module.scss";

export interface DialogProps
  extends Omit<AriaDialogProps, "className" | "slot" | "style"> {
  /** @default 'lg' */
  size?: DialogSize;
  isDismissDisabled?: boolean;
  isKeyboardDismissDisabled?: boolean;
  shouldCloseOnInteractOutside?: AriaModalOverlayProps["shouldCloseOnInteractOutside"];
}

export const Dialog: React.FC<DialogProps> = (props) => {
  const {
    size = "lg",
    isDismissDisabled,
    isKeyboardDismissDisabled,
    shouldCloseOnInteractOutside,
    ...rest
  } = props;

  return (
    <ModalOverlay
      isDismissable={!isDismissDisabled}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      className={styles.root}
      shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
    >
      <Modal
        style={{
          ["--modal-sm-max-width" as string]: sizeToMaxWidth[size],
        }}
        className={styles.modal}
      >
        <AriaDialog className={styles.dialog} {...rest} />
      </Modal>
    </ModalOverlay>
  );
};

export { DialogTrigger } from "react-aria-components";

export const DialogTitle = ({
  className,
  ...props
}: Omit<HeadingProps, "slot">) => {
  return (
    <Heading
      slot="title"
      className={cn(styles.dialogTitle, className)}
      {...props}
    />
  );
};

export const DialogBody = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return <div className={cn(styles.dialogBody, className)} {...props} />;
};

export const DialogActions = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return <div className={cn(styles.dialogActions, className)} {...props} />;
};

export type DialogSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

const sizeToMaxWidth: Record<DialogSize, string> = {
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
};
