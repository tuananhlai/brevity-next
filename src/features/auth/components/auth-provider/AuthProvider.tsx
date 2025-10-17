import { useCallback, useEffect, useMemo, useState } from "react";
import {
  AuthContext,
  AuthContextValue,
  User,
} from "@/features/auth/components/auth-provider/AuthContext";
import { apiClient } from "@/lib/apiClient";

export interface AuthProviderProps {
  children: React.ReactNode;
}

// TODO:
// - Add a full page loading indicator.
// - Add loading state to each individual component.
export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const { children } = props;

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      // if the request below returns an error, we will just assume the user is not authenticated.
      const res = await apiClient.getCurrentUser().catch(() => null);
      setUser(res);
      setIsLoading(false);
    };

    fetchCurrentUser();
  }, []);

  const signIn = useCallback<AuthContextValue["signIn"]>(async (req) => {
    setIsLoading(true);
    const res = await apiClient.signIn(req);
    setUser({
      id: res.id,
      username: res.username,
      email: res.email,
    });
    setIsLoading(false);
  }, []);

  const signOut = useCallback<AuthContextValue["signOut"]>(async () => {
    // TODO: Integrate API.
    await Promise.resolve();
    setUser(null);
  }, []);

  const contextValue = useMemo<AuthContextValue>(
    () => ({
      user,
      isLoading,
      signIn,
      signOut,
      setUser,
    }),
    [user, signIn, signOut, isLoading],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
