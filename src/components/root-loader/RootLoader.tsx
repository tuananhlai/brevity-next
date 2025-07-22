import { useEffect, useState } from "react";
import { useAuth } from "@/features/auth/components/auth-provider";
import { apiClient } from "@/lib/apiClient";

export interface RootLoaderProps {
  children: React.ReactNode;
}

/**
 * Load all necessary data for the initial page render. A loading
 * screen will be displayed until this data is fully loaded.
 */
export const RootLoader: React.FC<RootLoaderProps> = (props) => {
  const { children } = props;

  const { setUser } = useAuth();
  const [isLoadingUserInfo, setIsLoadingUserInfo] = useState(true);

  // TODO: see if this affect NextJS's prerendered HTML.
  useEffect(() => {
    const fetchCurrentUser = async () => {
      // if the request below returns an error, we will just assume the user is not authenticated.
      const res = await apiClient.getCurrentUser().catch(() => null);
      setUser(res);
      setIsLoadingUserInfo(false);
    };

    fetchCurrentUser();
  }, [setUser]);

  if (isLoadingUserInfo) {
    // TODO: Add a proper loading screen.
    return <div>Loading...</div>;
  }

  return children;
};
