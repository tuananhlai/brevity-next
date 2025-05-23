import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogProps,
  DialogTitle,
} from "@/components/ui/dialog";
import styles from "./AlertDialog.module.scss";

export type CloseFn = () => void;

export interface AlertDialogProps
  extends Pick<DialogProps, "isOpen" | "onOpenChange"> {
  title: React.ReactNode;
  /** The content of the dialog. */
  children: React.ReactNode;
  /** @default 'Confirm' */
  primaryActionLabel?: string;
  /** @default 'Cancel' */
  cancelLabel?: string;
  onPrimaryAction: (close: CloseFn) => void;
  /**
   * The function to invoke when the secondary action button is pressed. If empty,
   * the secondary action button will not be shown.
   */
  onCancel?: (close: CloseFn) => void;
}

export const AlertDialog: React.FC<AlertDialogProps> = (props) => {
  const {
    title,
    children,
    primaryActionLabel = "Confirm",
    cancelLabel = "Cancel",
    onPrimaryAction,
    onCancel,
    isOpen,
    onOpenChange,
  } = props;

  return (
    <Dialog
      role="alertdialog"
      classNames={{ modal: styles.modal }}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      {({ close }) => (
        <>
          <DialogTitle>{title}</DialogTitle>
          <DialogBody className={styles.dialogBody}>{children}</DialogBody>
          <DialogActions>
            {onCancel != null && (
              <Button variant="tertiary" onPress={() => onCancel(close)}>
                {cancelLabel}
              </Button>
            )}
            <Button onPress={() => onPrimaryAction(close)}>
              {primaryActionLabel}
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};
