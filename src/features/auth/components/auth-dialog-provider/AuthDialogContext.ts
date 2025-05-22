import { createContext, useContext } from "react";

export type AuthDialogContextValue = {
  signIn: () => Promise<void>;
  signUp: () => Promise<void>;
};

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
