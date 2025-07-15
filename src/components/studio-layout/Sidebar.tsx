import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/styles/utils";
import styles from "./Sidebar.module.scss";

export interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className } = props;

  return (
    <nav className={className}>
      <ul className={styles.itemList} role="list">
        <Item href="/studio">Home</Item>
        <Item href="/studio/settings">Settings</Item>
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
    <li className={cn(styles.item, isActive && styles.activeItem)}>
      <Link className={styles.link} href={href}>
        {children}
      </Link>
    </li>
  );
};
