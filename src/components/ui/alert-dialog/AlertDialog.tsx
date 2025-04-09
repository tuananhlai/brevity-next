import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "@/components/ui/dialog";

export interface AlertDialogProps {
  title: React.ReactNode;
  children: React.ReactNode;
  /** @default "Confirm" */
  primaryActionLabel?: string;
  /** @default "Cancel" */
  cancelLabel?: string;

  onPrimaryAction?: () => void;
  onCancel?: () => void;
}

export const AlertDialog: React.FC<AlertDialogProps> = (props) => {
  const {
    title,
    children,
    primaryActionLabel = "Confirm",
    cancelLabel = "Cancel",
    onPrimaryAction,
    onCancel,
  } = props;
  return (
    <Dialog>
      {({ close }) => (
        <>
          <DialogTitle>{title}</DialogTitle>
          <DialogBody>{children}</DialogBody>
          <DialogActions>
            <Button
              variant="secondary"
              onPress={() => {
                onCancel?.();
                close();
              }}
            >
              {cancelLabel}
            </Button>
            <Button
              variant="primary"
              onPress={() => {
                onPrimaryAction?.();
                close();
              }}
            >
              {primaryActionLabel}
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};
