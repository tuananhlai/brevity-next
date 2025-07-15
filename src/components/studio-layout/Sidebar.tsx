import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/styles/utils";
import styles from "./Sidebar.module.scss";

export interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className } = props;
  const { _ } = useLingui();

  return (
    <nav className={className}>
      <ul className={styles.itemList} role="list">
        <Item href="/me/api-key">{_(msg`API keys`)}</Item>
        <Item href="/me/settings">{_(msg`Settings`)}</Item>
      </ul>
    </nav>
  );
};

const Item: React.FC<{
  href: string;
  children: React.ReactNode;
}> = (props) => {
  const { href, children } = props;
  const router = useRouter();
  const isActive = router.pathname.includes(href);

  return (
    <li className={styles.item}>
      <Link
        className={cn(styles.link, isActive && styles.activeLink)}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};
