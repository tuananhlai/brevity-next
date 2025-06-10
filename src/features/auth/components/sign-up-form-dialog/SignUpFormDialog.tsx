import { msg } from "@lingui/macro";
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
import { useSignUp } from "@/features/auth/api/signUp";
import { SignUpForm } from "@/features/auth/components/sign-up-form";
import {
  SignInWithAppleButton,
  SignInWithGoogleButton,
} from "@/features/auth/components/third-party-auth-button";
import styles from "./SignUpFormDialog.module.scss";

export interface SignUpFormDialogProps
  extends Pick<DialogProps, "isOpen" | "onOpenChange"> {
  /**
   * Invoked after a new account has been created successfully and this dialog
   * has been closed.
   */
  onSubmitted?: () => void;
}

export const SignUpFormDialog: React.FC<SignUpFormDialogProps> = (props) => {
  const { onSubmitted, isOpen, onOpenChange } = props;
  const formId = useId();
  const { mutate: signUp, isPending } = useSignUp();
  const { _ } = useLingui();

  return (
    <Dialog size="md" isOpen={isOpen} onOpenChange={onOpenChange}>
      {({ close }) => (
        <>
          <DialogTitle>Sign up with your account</DialogTitle>
          <Text className={styles.description}>
            Create an account to save your favorite articles, follow authors,
            and more.
          </Text>
          <DialogBody className={styles.dialogBody}>
            <SignUpForm
              id={formId}
              onSubmit={(v) => {
                // TODO: fix issue where the API request throws error due to
                // the response body being empty.
                signUp(v, {
                  onSuccess: () => {
                    close();
                    onSubmitted?.();
                    // TODO: update the toast styles.
                    toastQueue.success({
                      title: _(msg`Account created successfully`),
                    });
                  },
                  onError: () => {
                    toastQueue.danger({
                      title: _(msg`Something went wrong`),
                    });
                  },
                });
              }}
            />
            <Button
              form={formId}
              className={styles.submitBtn}
              type="submit"
              isPending={isPending}
            >
              Sign up
            </Button>
            <Flex gap="var(--bw-space-2)" className={styles.flex1}>
              <SignInWithGoogleButton className={styles.thirdPartyAuthButton} />
              <SignInWithAppleButton className={styles.thirdPartyAuthButton} />
            </Flex>
          </DialogBody>
        </>
      )}
    </Dialog>
  );
};
