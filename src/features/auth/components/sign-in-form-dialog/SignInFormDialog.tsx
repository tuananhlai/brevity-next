import Link from "next/link";
import { useId } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogBody,
  DialogTitle,
  DialogTrigger,
  DialogTriggerProps,
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
  extends Pick<DialogTriggerProps, "defaultOpen" | "isOpen" | "onOpenChange"> {
  children?: React.ReactElement;
  onSubmit?: (values: SignInFormValues) => void;
}

export const SignInFormDialog: React.FC<SignInFormDialogProps> = (props) => {
  const { children, onSubmit, ...dialogTriggerProps } = props;
  const formId = useId();

  return (
    <DialogTrigger {...dialogTriggerProps}>
      {children}
      <Dialog size="md">
        {({ close }) => (
          <>
            <DialogTitle>Sign in with your account</DialogTitle>
            <Text className={styles.description}>
              Save your favorite articles, follow authors, and more by signing
              in.
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
                  Forgot your password?
                </Link>
              </Text>
              <Flex direction="column" gap="var(--bw-space-2)">
                <Button form={formId} type="submit">
                  Sign in
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
    </DialogTrigger>
  );
};
