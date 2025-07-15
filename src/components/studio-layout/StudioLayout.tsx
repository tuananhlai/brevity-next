import { AppNavbar } from "@/components/app-navbar";
import { Container, Flex } from "@/components/ui/layout";
import { Sidebar } from "./Sidebar";
import styles from "./StudioLayout.module.scss";

export interface StudioLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const StudioLayout: React.FC<StudioLayoutProps> = (props) => {
  const { children, className } = props;

  return (
    <div className={className}>
      <header className={styles.header}>
        <Container>
          <AppNavbar />
        </Container>
      </header>
      <Container>
        <Flex className={styles.mainContainer} gap="var(--bw-space-4)">
          <aside className={styles.aside}>
            <Sidebar />
          </aside>
          <main className={styles.main}>{children}</main>
        </Flex>
      </Container>
    </div>
  );
};
