import Link from "next/link";
import { cn } from "@/styles/utils";
import styles from "./Sidebar.module.scss";

export interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <nav>
      <ul className={styles.itemList} role="list">
        <Item isActive href="/studio">
          Home
        </Item>
        <Item href="/studio/settings">Settings</Item>
      </ul>
    </nav>
  );
};

const Item: React.FC<{
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}> = (props) => {
  const { href, children, isActive } = props;
  return (
    <li className={cn(styles.item, isActive && styles.activeItem)}>
      <Link className={styles.link} href={href}>
        {children}
      </Link>
    </li>
  );
};
