import { Trans, msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import Link from "next/link";
import { LuLogIn } from "react-icons/lu";
import { AccountMenuTrigger } from "@/components/account-menu";
import { AppLogo } from "@/components/app-logo";
import { Navbar, NavbarSpacer } from "@/components/navbar";
import { Button, IconButton } from "@/components/ui/button";
import { useAuthDialog } from "@/features/auth/components/auth-dialog-provider/AuthDialogContext";
import { useAuth } from "@/features/auth/components/auth-provider";
import { generateAvatarURL } from "@/utils/misc";
import styles from "./AppNavbar.module.scss";

export interface AppNavbarProps {
  className?: string;
}

/** The shared navbar for all pages within the application. */
export const AppNavbar: React.FC<AppNavbarProps> = (props) => {
  const { className } = props;
  const { user } = useAuth();

  return (
    <Navbar className={className}>
      <Link className={styles.logo} href="/">
        <AppLogo />
      </Link>
      <NavbarSpacer />
      {user != null ? (
        <AccountMenuTrigger
          displayName={user.username}
          // TODO: Replace with actual avatar URL.
          avatarURL={generateAvatarURL(user.id)}
        />
      ) : (
        <LoginButton />
      )}
    </Navbar>
  );
};

const LoginButton = () => {
  const { _ } = useLingui();
  const { signIn } = useAuthDialog();
  const onPress = () => {
    signIn();
  };

  return (
    <>
      <Button
        variant="tertiary"
        className={styles.loginLink}
        onPress={onPress}
        prefixIcon={<LuLogIn />}
      >
        <Trans>Sign in</Trans>
      </Button>
      <IconButton
        variant="tertiary"
        className={styles.mobileLoginLink}
        aria-label={_(msg`Sign in`)}
        onPress={onPress}
      >
        <LuLogIn />
      </IconButton>
    </>
  );
};
