import Link from "next/link";
import { useRouter } from "next/router";
import { Select, SelectItem } from "@/components/ui/select";
import { cn } from "@/styles/utils";
import styles from "./Sidebar.module.scss";

export interface SidebarItem {
  label: React.ReactNode;
  href: string;
}

export interface DesktopSidebarProps {
  items: SidebarItem[];
  className?: string;
}

export const DesktopSidebar: React.FC<DesktopSidebarProps> = (props) => {
  const { className, items } = props;

  return (
    <nav className={className}>
      <ul className={styles.itemList} role="list">
        {items.map((item) => (
          <DesktopSidebarItem key={item.href} item={item} />
        ))}
      </ul>
    </nav>
  );
};

const DesktopSidebarItem: React.FC<{
  item: SidebarItem;
}> = (props) => {
  const { item } = props;
  const checkActive = useCheckItemState();
  const isActive = checkActive(item);

  return (
    <li className={styles.item}>
      <Link
        className={cn(styles.link, isActive && styles.activeLink)}
        href={item.href}
      >
        {item.label}
      </Link>
    </li>
  );
};

export interface MobileSidebarProps {
  items: SidebarItem[];
  className?: string;
}

export const MobileSidebar: React.FC<MobileSidebarProps> = (props) => {
  const { items, className } = props;
  const checkActive = useCheckItemState();
  const activeItem = items.find(checkActive);

  return (
    <nav className={className}>
      <Select items={items} selectedKey={activeItem?.href ?? null}>
        {(item) => {
          return (
            <SelectItem id={item.href} key={item.href} href={item.href}>
              {item.label}
            </SelectItem>
          );
        }}
      </Select>
    </nav>
  );
};

/** Return a function that checks whether a sidebar item is active. */
const useCheckItemState = (): ((item: SidebarItem) => boolean) => {
  const router = useRouter();

  return (item: SidebarItem) => router.pathname.includes(item.href);
};
