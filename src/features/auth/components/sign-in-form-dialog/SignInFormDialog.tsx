import { Trans, msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { useId } from "react";
import { toastQueue } from "@/components/toastQueue";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogBody,
  DialogProps,
  DialogTitle,
} from "@/components/ui/dialog";
import { Flex } from "@/components/ui/layout";
import { Text } from "@/components/ui/text";
import { useSignIn } from "@/features/auth/api/signIn";
import { SignInForm } from "@/features/auth/components/sign-in-form/SignInForm";
import {
  SignInWithAppleButton,
  SignInWithGoogleButton,
} from "@/features/auth/components/third-party-auth-button";
import { somethingWentWrong } from "@/utils/message";
import styles from "./SignInFormDialog.module.scss";

export interface SignInFormDialogProps
  extends Pick<DialogProps, "isOpen" | "onOpenChange"> {
  /** Invoked when the user chooses to open the sign up dialog. */
  onCreateNewAccount: () => void;
  /** Invoked when the user has signed in successfully. */
  onSubmitted?: () => void;
}

export const SignInFormDialog: React.FC<SignInFormDialogProps> = (props) => {
  const { onSubmitted, isOpen, onOpenChange, onCreateNewAccount } = props;
  const formId = useId();
  const { _ } = useLingui();
  const { mutate, isPending } = useSignIn();

  return (
    <Dialog size="md" isOpen={isOpen} onOpenChange={onOpenChange}>
      {({ close }) => (
        <>
          <DialogTitle>
            <Trans>Sign in with your account</Trans>
          </DialogTitle>
          <Text className={styles.description}>
            <Trans>
              Save your favorite articles, follow authors, and more by signing
              in.
            </Trans>
          </Text>
          <DialogBody className={styles.dialogBody}>
            <SignInForm
              id={formId}
              onSubmit={(v) => {
                mutate(
                  {
                    emailOrUsername: v.email,
                    password: v.password,
                  },
                  {
                    onSuccess: () => {
                      close();
                      onSubmitted?.();
                      toastQueue.success({
                        title: _(msg`Signed in successfully`),
                      });
                    },
                    onError: () => {
                      // TODO: provide more detailed error message.
                      toastQueue.error({
                        title: _(somethingWentWrong),
                      });
                    },
                  },
                );
              }}
            />
            <Flex justify="space-between">
              {/* TODO: update forgot password button styles */}
              <Button variant="tertiary">
                <Trans>Forgot your password?</Trans>
              </Button>
              <Button
                variant="tertiary"
                onClick={() => {
                  close();
                  onCreateNewAccount();
                }}
              >
                <Trans>Create a new account</Trans>
              </Button>
            </Flex>
            <Flex direction="column" gap="var(--bw-space-2)">
              <Button form={formId} type="submit" isPending={isPending}>
                <Trans>Sign in</Trans>
              </Button>
              <Flex gap="var(--bw-space-2)">
                <SignInWithGoogleButton
                  className={styles.thirdPartyAuthButton}
                />
                <SignInWithAppleButton
                  className={styles.thirdPartyAuthButton}
                />
              </Flex>
            </Flex>
          </DialogBody>
        </>
      )}
    </Dialog>
  );
};
