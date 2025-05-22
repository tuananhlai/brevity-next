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
  SignUpForm,
  SignUpFormValues,
} from "@/features/auth/components/sign-up-form";
import {
  SignInWithAppleButton,
  SignInWithGoogleButton,
} from "@/features/auth/components/third-party-auth-button";
import styles from "./SignUpFormDialog.module.scss";

export interface SignUpFormDialogProps
  extends Pick<DialogTriggerProps, "defaultOpen" | "isOpen" | "onOpenChange"> {
  children?: React.ReactElement;
  onSubmit?: (values: SignUpFormValues) => void;
}

export const SignUpFormDialog: React.FC<SignUpFormDialogProps> = (props) => {
  const { children, onSubmit, ...dialogTriggerProps } = props;
  const formId = useId();

  return (
    <DialogTrigger {...dialogTriggerProps}>
      {children}
      <Dialog size="md">
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
                  onSubmit?.(v);
                  close();
                }}
              />
              <Button form={formId} className={styles.submitBtn} type="submit">
                Sign up
              </Button>
              <Flex gap="var(--bw-space-2)" className={styles.flex1}>
                <SignInWithGoogleButton
                  className={styles.thirdPartyAuthButton}
                />
                <SignInWithAppleButton
                  className={styles.thirdPartyAuthButton}
                />
              </Flex>
            </DialogBody>
          </>
        )}
      </Dialog>
    </DialogTrigger>
  );
};
