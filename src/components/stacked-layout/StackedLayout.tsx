import { AppNavbar } from "@/components/app-navbar";
import { Container } from "@/components/ui/layout";
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
        <Container>
          <AppNavbar />
        </Container>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
};
