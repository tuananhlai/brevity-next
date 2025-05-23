import {
  Dialog,
  DialogProps,
  Heading,
  HeadingProps,
  Modal,
  ModalOverlay,
  ModalOverlayProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import styles from "./Drawer.module.scss";

export interface DrawerProps
  extends Omit<DialogProps, "className" | "slot" | "style">,
    Pick<ModalOverlayProps, "isOpen" | "onOpenChange"> {
  /** @default 'left' */
  position?: DrawerPosition;
  /** @default 'md' */
  size?: DrawerSize;
  isDismissDisabled?: boolean;
  isKeyboardDismissDisabled?: boolean;
  shouldCloseOnInteractOutside?: ModalOverlayProps["shouldCloseOnInteractOutside"];
}

export const Drawer: React.FC<DrawerProps> = (props) => {
  const {
    isDismissDisabled,
    isKeyboardDismissDisabled,
    shouldCloseOnInteractOutside,
    position = "left",
    size = "md",
    isOpen,
    onOpenChange,
    ...rest
  } = props;

  const modalOverlayClassNames = [styles.modalOverlay];
  const modalClassNames = [styles.modal];
  switch (position) {
    case "right":
      modalClassNames.push(styles.right);
      modalOverlayClassNames.push(styles.flexRowReverse);
      break;
    case "left":
      modalClassNames.push(styles.left);
      break;
  }

  return (
    <ModalOverlay
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={!isDismissDisabled}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      className={cn(modalOverlayClassNames)}
      shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
    >
      <Modal
        style={{
          ["--modal-max-width" as string]: drawerSizeToMaxWidth[size],
        }}
        className={cn(modalClassNames)}
      >
        <Dialog className={styles.dialog} {...rest} />
      </Modal>
    </ModalOverlay>
  );
};

export type DrawerPosition = "left" | "right";
export type DrawerSize = "md" | "lg";

export const DrawerTitle = (props: Omit<HeadingProps, "slot">) => {
  return <Heading slot="title" className={styles.drawerTitle} {...props} />;
};

const drawerSizeToMaxWidth: Record<DrawerSize, string> = {
  md: "20rem",
  lg: "32rem",
};
