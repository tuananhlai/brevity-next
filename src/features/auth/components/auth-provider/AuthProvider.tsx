import { useCallback, useEffect, useMemo, useState } from "react";
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

  const [isLoadingUserInfo, setIsLoadingUserInfo] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      setIsLoadingUserInfo(true);
      // if the request below returns an error, we will just assume the user is not authenticated.
      const res = await apiClient.getCurrentUser().catch(() => null);
      setUser(res);
      setIsLoadingUserInfo(false);
    };

    fetchCurrentUser();
  }, []);

  if (isLoadingUserInfo) {
    // TODO: Add a proper loading screen.
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
