import { Trans } from "@lingui/macro";
import { useId } from "react";
import { Form } from "react-aria-components";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogProps,
  DialogTitle,
} from "@/components/ui/dialog";
import { TextField } from "@/components/ui/text-field";
import styles from "./AddApiKeyDialog.module.scss";

export interface AddApiKeyDialogFormValues {
  apiKey: string;
}

export interface AddApiKeyDialogProps
  extends Pick<DialogProps, "isOpen" | "onOpenChange"> {
  onSubmit?: (fv: AddApiKeyDialogFormValues) => void;
}

export const AddApiKeyDialog: React.FC<AddApiKeyDialogProps> = (props) => {
  const { isOpen, onOpenChange, onSubmit } = props;

  const formId = useId();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    close: () => void,
  ) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    onSubmit?.({
      apiKey: data["apiKey"] as string,
    });
    close();
  };

  return (
    <Dialog isOpen={isOpen} onOpenChange={onOpenChange}>
      {({ close }) => (
        <>
          <DialogTitle>
            <Trans>Add API Key</Trans>
          </DialogTitle>

          <DialogBody>
            <Form id={formId} onSubmit={(e) => handleSubmit(e, close)}>
              <TextField
                name="apiKey"
                isRequired
                placeholder="sk-or-v1-..."
                label={<Trans>API Key</Trans>}
                description={
                  <Trans>
                    An Open Router API key is required to allow your digital
                    authors to create content.{" "}
                    <a
                      className={styles.link}
                      href="https://openrouter.ai/docs/api-reference/api-keys/create-api-key"
                    >
                      How do I get an Open Router API key?
                    </a>
                  </Trans>
                }
              />
            </Form>
          </DialogBody>

          <DialogActions>
            <Button variant="secondary" onPress={close}>
              <Trans>Cancel</Trans>
            </Button>
            <Button form={formId} type="submit" variant="primary">
              <Trans>Add</Trans>
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};
