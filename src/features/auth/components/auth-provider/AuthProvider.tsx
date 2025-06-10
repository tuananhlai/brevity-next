import { useCallback, useMemo, useState } from "react";
import {
  AuthContext,
  User,
} from "@/features/auth/components/auth-provider/AuthContext";
import { apiClient } from "@/lib/apiClient";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const { children } = props;

  const [user, setUser] = useState<User | null>(null);

  const signIn = useCallback(
    async (req: { emailOrUsername: string; password: string }) => {
      const res = await apiClient.signIn(req);
      setUser({
        id: res.id,
        username: res.username,
        email: res.email,
      });
    },
    [],
  );

  const signOut = useCallback(async () => {
    // TODO: Integrate API.
    await Promise.resolve();
    setUser(null);
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      signIn,
      signOut,
    }),
    [user, signIn, signOut],
  );

  // TODO: Send a HTTP request to an endpoint to check if the current user
  // is authenticated or not, before displaying the application.

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
