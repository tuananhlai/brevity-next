import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { createContext, useCallback, useContext, useState } from "react";
import { AlertDialog, AlertDialogProps } from "@/components/ui/alert-dialog";

export interface ConfirmProviderProps {
  children: React.ReactNode;
}

export const ConfirmProvider: React.FC<ConfirmProviderProps> = (props) => {
  const { children } = props;

  const { _ } = useLingui();

  const [alertDialogProps, setAlertDialogProps] = useState<AlertDialogProps>(
    defaultAlertDialogProps,
  );

  const confirm = useCallback<ConfirmFn>(
    (params) => {
      const defaultCancelLabel = _(msg`Cancel`);
      const defaultPrimaryActionLabel = _(msg`Confirm`);

      let resolveFn: (value: boolean) => void;

      const promise = new Promise<boolean>((resolve) => {
        resolveFn = resolve;
      });

      setAlertDialogProps({
        isOpen: true,
        title: params.title,
        children: params.content,
        primaryActionLabel:
          params.primaryActionLabel ?? defaultPrimaryActionLabel,
        cancelLabel: params.cancelLabel ?? defaultCancelLabel,
        onOpenChange: () => {
          setAlertDialogProps((prev) => ({
            ...prev,
            isOpen: false,
          }));
          resolveFn(false);
        },
        onPrimaryAction: () => {
          setAlertDialogProps((prev) => ({
            ...prev,
            isOpen: false,
          }));
          resolveFn(true);
        },
        onCancel: (close) => close(),
      });

      return promise;
    },
    [_],
  );

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      <AlertDialog {...alertDialogProps} />
    </ConfirmContext.Provider>
  );
};

const defaultAlertDialogProps: AlertDialogProps = {
  isOpen: false,
  title: "",
  children: "",
  onPrimaryAction: () => {},
};

interface ConfirmParams {
  title: React.ReactNode;
  content: React.ReactNode;
  /** @default 'Confirm' */
  primaryActionLabel?: string;
  /** @default 'Cancel' */
  cancelLabel?: string;
}

type ConfirmFn = (params: ConfirmParams) => Promise<boolean>;

const ConfirmContext = createContext<ConfirmFn | null>(null);

/**
 * Return a confirm function that can be used to show an alert dialog. The
 * returned function will return a promise that resolves to true if the user
 * confirms the action, or false otherwise.
 */
export const useConfirm = (): ConfirmFn => {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error("useConfirm must be used within a ConfirmProvider");
  }
  return context;
};
