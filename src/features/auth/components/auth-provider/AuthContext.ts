import { createContext, useContext } from "react";

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface AuthContextValue {
  /** The currently authenticated user. */
  user: User | null;
  /** Send a sign in API request. If successful, the application's authenticated user will be registered. */
  signIn: (req: { emailOrUsername: string; password: string }) => Promise<void>;
  /** Send a sign out API request. If successful, the application's authenticated user will be removed. */
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

/**
 * Return the currently authenticated user and a few helper methods for signing
 * in and out.
 */
export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
