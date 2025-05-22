import Link from "next/link";
import { LuLogIn } from "react-icons/lu";
import { Navbar, NavbarButton, NavbarSpacer } from "@/components/navbar";
import { SignInFormDialog } from "@/features/auth/components/sign-in-form-dialog";
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
          <SignInFormDialog>
            <LoginButton />
          </SignInFormDialog>
          <ToggleColorSchemeButton />
        </Navbar>
      </header>
      <main>{children}</main>
    </div>
  );
};

const LoginButton = () => {
  return (
    <>
      <NavbarButton className={styles.loginLink}>
        Sign in
        <LuLogIn />
      </NavbarButton>
      <NavbarButton className={styles.mobileLoginLink} aria-label="Sign in">
        <LuLogIn />
      </NavbarButton>
    </>
  );
};
