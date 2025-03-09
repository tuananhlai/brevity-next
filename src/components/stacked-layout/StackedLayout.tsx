import Link from "next/link";
import { LuLogIn } from "react-icons/lu";
import { Navbar, NavbarLink, NavbarSpacer } from "@/components/navbar";
import { ToggleColorSchemeButton } from "@/components/toggle-color-scheme-button";
import { cn } from "@/styles/utils";
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
          <LoginLink />
          <ToggleColorSchemeButton />
        </Navbar>
      </header>
      <main>{children}</main>
    </div>
  );
};

const LoginLink = () => {
  const href = "/sign-in";
  return (
    <>
      <NavbarLink className={styles.loginLink} href={href}>
        Sign in
        <LuLogIn />
      </NavbarLink>
      <NavbarLink
        className={styles.mobileLoginLink}
        href={href}
        aria-label="Sign in"
      >
        <LuLogIn />
      </NavbarLink>
    </>
  );
};
