import { Trans } from "@lingui/react/macro";
import { Link } from "react-aria-components";
import { AppLogo } from "@/components/app-logo";
import { Navbar, NavbarLink, NavbarSpacer } from "@/components/navbar";
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
      <NavbarLink href={"/digital-author"}>
        <Trans>Digital Authors</Trans>
      </NavbarLink>
    </Navbar>
  );
};
