import { Trans, msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { useId } from "react";
import { Form } from "react-aria-components";
import { toastQueue } from "@/components/toastQueue";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogProps,
  DialogTitle,
} from "@/components/ui/dialog";
import { TextField } from "@/components/ui/text-field";
import { useCreateAPIKey } from "@/features/digital-author/api/createAPIKey";
import { CreateAPIKeyRequest } from "@/lib/client";
import { somethingWentWrong } from "@/utils/message";
import styles from "./AddApiKeyDialog.module.scss";

export interface AddApiKeyDialogProps
  extends Pick<DialogProps, "isOpen" | "onOpenChange"> {
  /** A callback function to be invoked when an API key is created success. */
  onSubmitted?: () => void;
}

export const AddApiKeyDialog: React.FC<AddApiKeyDialogProps> = (props) => {
  const { isOpen, onOpenChange, onSubmitted } = props;

  const formId = useId();
  const { mutate: createAPIKey, isPending } = useCreateAPIKey();
  const { _ } = useLingui();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    close: () => void,
  ) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const req: CreateAPIKeyRequest = {
      name: data["name"] as string,
      value: data["value"] as string,
    };
    createAPIKey(req, {
      onSuccess: () => {
        onSubmitted?.();
        close();
      },
      onError: () => {
        toastQueue.error({
          title: _(somethingWentWrong),
        });
      },
    });
  };

  return (
    <Dialog isOpen={isOpen} onOpenChange={onOpenChange}>
      {({ close }) => (
        <>
          <DialogTitle>{_(msg`Add API key`)}</DialogTitle>

          <DialogBody>
            <Form
              id={formId}
              className={styles.form}
              onSubmit={(e) => handleSubmit(e, close)}
            >
              <TextField
                name="name"
                isRequired
                label={_(msg`Name`)}
                placeholder="My API key"
              />
              <TextField
                name="value"
                isRequired
                placeholder="sk-or-v1-..."
                label={_(msg`API key`)}
                description={
                  <Trans>
                    An Open Router API key is required to allow your digital
                    authors to create content.{" "}
                    <a
                      className={styles.link}
                      href="https://openrouter.ai/docs/api-reference/api-keys/create-api-key"
                      target="_blank"
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
              {_(msg`Cancel`)}
            </Button>
            <Button
              form={formId}
              type="submit"
              variant="primary"
              isPending={isPending}
            >
              {_(msg`Add`)}
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};
