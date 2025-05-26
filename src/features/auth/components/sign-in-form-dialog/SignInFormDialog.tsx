import { Trans } from "@lingui/macro";
import Link from "next/link";
import { useId } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogBody,
  DialogProps,
  DialogTitle,
} from "@/components/ui/dialog";
import { Flex } from "@/components/ui/layout";
import { Text } from "@/components/ui/text";
import {
  SignInForm,
  SignInFormValues,
} from "@/features/auth/components/sign-in-form/SignInForm";
import {
  SignInWithAppleButton,
  SignInWithGoogleButton,
} from "@/features/auth/components/third-party-auth-button";
import styles from "./SignInFormDialog.module.scss";

export interface SignInFormDialogProps
  extends Pick<DialogProps, "isOpen" | "onOpenChange"> {
  onSubmit?: (values: SignInFormValues) => void;
}

export const SignInFormDialog: React.FC<SignInFormDialogProps> = (props) => {
  const { onSubmit, isOpen, onOpenChange } = props;
  const formId = useId();

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
                onSubmit?.(v);
                close();
              }}
            />
            <Text>
              <Link href="/forgot-password" className={styles.forgotPassword}>
                <Trans>Forgot your password?</Trans>
              </Link>
            </Text>
            <Flex direction="column" gap="var(--bw-space-2)">
              <Button form={formId} type="submit">
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
