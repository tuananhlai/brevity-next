import { HTMLAttributes } from "react";
import { Button, Link, LinkProps } from "react-aria-components";
import { TouchTarget } from "../TouchTarget";
import { ButtonProps } from "../button";
import styles from "./Navbar.module.scss";

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  return <nav className={styles.root} {...props} />;
};

export const NavbarSpacer = () => <div className={styles.spacer} />;

export interface NavbarLinkProps extends LinkProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

export const NavbarLink: React.FC<NavbarLinkProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Link className={styles.item} {...rest}>
      <TouchTarget>{children}</TouchTarget>
    </Link>
  );
};

export interface NavbarButtonProps
  extends Omit<ButtonProps, "children" | "style" | "className"> {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

export const NavbarButton: React.FC<NavbarButtonProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Button className={styles.item} {...rest}>
      <TouchTarget>{children}</TouchTarget>
    </Button>
  );
};
