import { useId } from "react";
import { DialogTriggerProps } from "react-aria-components";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogBody,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Text } from "@/components/ui/text";
import {
  SignInForm,
  SignInFormValues,
} from "@/features/sign-in/components/sign-in-form/SignInForm";
import styles from "./SignInFormDialog.module.scss";

export interface SignInFormDialogProps
  extends Pick<DialogTriggerProps, "defaultOpen" | "isOpen" | "onOpenChange"> {
  children: React.ReactElement;
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
              <Button form={formId} className={styles.submitBtn} type="submit">
                Sign in
              </Button>
              <div className={styles.thirdPartyAuthButtonContainer}>
                <Button
                  className={styles.thirdPartyAuthButton}
                  variant="secondary"
                  aria-label="Sign in with Google"
                >
                  <FaGoogle />
                  Google
                </Button>
                <Button
                  className={styles.thirdPartyAuthButton}
                  variant="secondary"
                  aria-label="Sign in with Facebook"
                >
                  <FaFacebook />
                  Facebook
                </Button>
              </div>
            </DialogBody>
          </>
        )}
      </Dialog>
    </DialogTrigger>
  );
};
