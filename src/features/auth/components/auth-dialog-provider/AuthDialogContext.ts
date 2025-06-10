import { createContext, useContext } from "react";

export interface AuthDialogContextValue {
  /**
   * Open the sign in dialog and return a promise. The promise will
   * resolve when that dialog is closed.
   */
  signIn: () => Promise<void>;
  /**
   * Open the sign up dialog and return a promise. The promise will
   * resolve when that dialog is closed.
   */
  signUp: () => Promise<void>;
}

export const AuthDialogContext = createContext<AuthDialogContextValue | null>(
  null,
);

export const useAuthDialog = (): AuthDialogContextValue => {
  const context = useContext(AuthDialogContext);
  if (!context) {
    throw new Error("useAuthDialog must be used within a AuthDialogProvider");
  }

  return context;
};
