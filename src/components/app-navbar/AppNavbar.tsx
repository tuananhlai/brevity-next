import { Trans, msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import Link from "next/link";
import { LuLogIn } from "react-icons/lu";
import { AppLogo } from "@/components/app-logo";
import { Navbar, NavbarButton, NavbarSpacer } from "@/components/navbar";
import { ToggleColorSchemeButton } from "@/components/stacked-layout/ToggleColorSchemeButton";
import { useAuthDialog } from "@/features/auth/components/auth-dialog-provider/AuthDialogContext";
import styles from "./AppNavbar.module.scss";

export interface AppNavbarProps {
  className?: string;
}

/** The shared navbar for all pages within the application. */
export const AppNavbar: React.FC<AppNavbarProps> = (props) => {
  const { className } = props;

  return (
    <Navbar className={className}>
      <Link className={styles.logo} href="/">
        <AppLogo />
      </Link>
      <NavbarSpacer />
      <LoginButton />
      <ToggleColorSchemeButton />
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
      <NavbarButton className={styles.loginLink} onPress={onPress}>
        <Trans>Sign in</Trans>
        <LuLogIn />
      </NavbarButton>
      <NavbarButton
        className={styles.mobileLoginLink}
        aria-label={_(msg`Sign in`)}
        onPress={onPress}
      >
        <LuLogIn />
      </NavbarButton>
    </>
  );
};
