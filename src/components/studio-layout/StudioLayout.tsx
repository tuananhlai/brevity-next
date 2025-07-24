import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { AppNavbar } from "@/components/app-navbar";
import { Container } from "@/components/ui/layout";
import { cn } from "@/styles/utils";
import { DesktopSidebar, MobileSidebar, SidebarItem } from "./Sidebar";
import styles from "./StudioLayout.module.scss";

export interface StudioLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const StudioLayout: React.FC<StudioLayoutProps> = (props) => {
  const { children, className } = props;
  const { _ } = useLingui();

  const items: SidebarItem[] = [
    {
      label: _(msg`API keys`),
      href: "/me/api-keys",
    },
    {
      label: _(msg`Digital authors`),
      href: "/me/digital-authors",
    },
    {
      label: _(msg`Settings`),
      href: "/me/settings",
    },
  ];

  return (
    <div className={cn(styles.root, className)}>
      <header className={styles.header}>
        <Container>
          <AppNavbar />
        </Container>
      </header>
      <Container>
        <div className={styles.mainContainer}>
          <aside className={styles.aside}>
            <DesktopSidebar className={styles.desktopSidebar} items={items} />
            <MobileSidebar className={styles.mobileSidebar} items={items} />
          </aside>
          <main className={styles.main}>{children}</main>
        </div>
      </Container>
    </div>
  );
};
