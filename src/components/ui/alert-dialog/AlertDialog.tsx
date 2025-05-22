import { Button } from "@/components/ui/button";
import { Dialog, DialogActions, DialogTitle } from "@/components/ui/dialog";
import styles from "./AlertDialog.module.scss";

export type CloseFn = () => void;

export interface AlertDialogProps {
  title: React.ReactNode;
  /** The content of the dialog. */
  children: React.ReactNode;
  /** @default 'Confirm' */
  primaryActionLabel?: string;
  /** @default 'Cancel' */
  cancel?: string;
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
    cancel = "Cancel",
    onPrimaryAction,
    onCancel,
  } = props;

  return (
    <Dialog classNames={{ modal: styles.modal }}>
      {({ close }) => (
        <>
          <DialogTitle>{title}</DialogTitle>
          <p className={styles.dialogBody}>{children}</p>
          <DialogActions>
            {onCancel != null && (
              <Button variant="tertiary" onPress={() => onCancel(close)}>
                {cancel}
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
