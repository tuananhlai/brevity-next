import { Trans, msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import Link from "next/link";
import { LuLogIn } from "react-icons/lu";
import { Navbar, NavbarButton, NavbarSpacer } from "@/components/navbar";
import { useAuthDialog } from "@/features/auth/components/auth-dialog-provider/AuthDialogContext";
import { cn } from "@/styles/utils";
import { ToggleColorSchemeButton } from "./ToggleColorSchemeButton";
import styles from "./StackedLayout.module.scss";

export interface StackedLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const StackedLayout: React.FC<StackedLayoutProps> = (props) => {
  const { children, className } = props;

  return (
    <div className={cn(styles.root, className)}>
      <header className={styles.header}>
        <Navbar>
          <Link className={styles.logo} href="/">
            Brevity
          </Link>
          <NavbarSpacer />
          <LoginButton />
          <ToggleColorSchemeButton />
        </Navbar>
      </header>
      <main>{children}</main>
    </div>
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
