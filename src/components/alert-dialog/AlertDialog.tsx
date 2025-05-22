import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/ui/dialog";
import styles from "./AlertDialog.module.scss";

export type CloseFn = () => void;

export interface AlertDialogProps {
  title: React.ReactNode;
  /** The content of the dialog. */
  children: React.ReactNode;
  /** @default 'Confirm' */
  primaryActionLabel?: string;
  /** @default 'Cancel' */
  secondaryActionLabel?: string;
  onPrimaryAction: (close: CloseFn) => void;
  /**
   * The function to invoke when the secondary action button is pressed. If empty,
   * the secondary action button will not be shown.
   */
  onSecondaryAction?: (close: CloseFn) => void;
}

export const AlertDialog: React.FC<AlertDialogProps> = (props) => {
  const {
    title,
    children,
    primaryActionLabel = "Confirm",
    secondaryActionLabel = "Cancel",
    onPrimaryAction,
    onSecondaryAction,
  } = props;

  return (
    <Dialog>
      {({ close }) => (
        <>
          <DialogTitle>{title}</DialogTitle>
          <DialogBody className={styles.dialogBody}>{children}</DialogBody>
          <DialogActions>
            {onSecondaryAction != null && (
              <Button
                variant="secondary"
                onPress={() => onSecondaryAction(close)}
              >
                {secondaryActionLabel}
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
