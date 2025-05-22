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
import styles from "./AuthDialogProvider.module.scss";

export interface AuthDialogProviderProps {
  children: React.ReactNode;
}

export const AuthDialogProvider: React.FC<AuthDialogProviderProps> = (
  props,
) => {
  const { children } = props;
  const [signInDialogProps, setSignInDialogProps] =
    useState<SignInFormDialogProps | null>(null);
  const [signUpDialogProps, setSignUpDialogProps] =
    useState<SignUpFormDialogProps | null>(null);

  const signIn = useCallback(async () => {
    let resolveFn: () => void;
    const promise = new Promise<void>((resolve) => {
      resolveFn = resolve;
    });

    setSignInDialogProps({
      isOpen: true,
      onOpenChange: () => {
        resolveFn();
        setSignInDialogProps(null);
      },
      onSubmit: (values) => {
        console.log(values);
        resolveFn();
        setSignUpDialogProps(null);
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
        setSignUpDialogProps(null);
      },
      onSubmit: (values) => {
        console.log(values);
        resolveFn();
        setSignUpDialogProps(null);
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
