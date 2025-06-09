import { useCallback, useMemo, useState } from "react";
import { AuthDialogContext } from "@/features/auth/components/auth-dialog-provider/AuthDialogContext";
import {
  SignInFormDialog,
  SignInFormDialogProps,
} from "@/features/auth/components/sign-in-form-dialog";
import {
  SignUpFormDialog,
  SignUpFormDialogProps,
} from "@/features/auth/components/sign-up-form-dialog";

export interface AuthDialogProviderProps {
  children: React.ReactNode;
}

export const AuthDialogProvider: React.FC<AuthDialogProviderProps> = (
  props,
) => {
  const { children } = props;
  const [signInDialogProps, setSignInDialogProps] =
    useState<SignInFormDialogProps>({ isOpen: false });
  const [signUpDialogProps, setSignUpDialogProps] =
    useState<SignUpFormDialogProps>({ isOpen: false });

  const signIn = useCallback(async () => {
    let resolveFn: () => void;
    const promise = new Promise<void>((resolve) => {
      resolveFn = resolve;
    });

    setSignInDialogProps({
      isOpen: true,
      onOpenChange: () => {
        resolveFn();
        setSignInDialogProps((prev) => ({ ...prev, isOpen: false }));
      },
      onCreateNewAccount: () => {
        setSignUpDialogProps({ isOpen: true });
      },
      onSubmit: () => {
        resolveFn();
      },
    });

    return promise;
  }, []);

  const signUp = useCallback(async () => {
    let resolveFn: () => void;
    const promise = new Promise<void>((resolve) => {
      resolveFn = resolve;
    });

    setSignUpDialogProps({
      isOpen: true,
      onOpenChange: () => {
        resolveFn();
        setSignUpDialogProps({ isOpen: false });
      },
      onSubmitted: (values) => {
        console.log(values);
        resolveFn();
        setSignUpDialogProps({ isOpen: false });
      },
    });

    return promise;
  }, []);

  const contextValue = useMemo(
    () => ({
      signIn,
      signUp,
    }),
    [signIn, signUp],
  );

  return (
    <AuthDialogContext.Provider value={contextValue}>
      {children}
      <SignInFormDialog {...signInDialogProps} />
      <SignUpFormDialog {...signUpDialogProps} />
    </AuthDialogContext.Provider>
  );
};
