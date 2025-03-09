import { HTMLAttributes } from "react";
import { Button, Link, LinkProps } from "react-aria-components";
import { ButtonProps } from "@/components/ui/button";
import { TouchTarget } from "@/components/ui/touch-target";
import { cn } from "@/styles/utils";
import styles from "./Navbar.module.scss";

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({ className, ...props }) => {
  return <nav className={cn(styles.root, className)} {...props} />;
};

export const NavbarSpacer = () => <div className={styles.spacer} />;

export interface NavbarLinkProps extends LinkProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

export const NavbarLink: React.FC<NavbarLinkProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <Link className={cn(styles.item, className)} {...rest}>
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
  const { children, className, ...rest } = props;
  return (
    <Button className={cn(styles.item, className)} {...rest}>
      <TouchTarget>{children}</TouchTarget>
    </Button>
  );
};
