import Link from "next/link";
import { AppNavbar } from "@/components/app-navbar";
import { Container, Flex } from "@/components/ui/layout";
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
        <Flex>
          <aside>
            <nav>
              <ul>
                <li>
                  <Link href="/studio">Home</Link>
                </li>
                <li>
                  <Link href="/studio/settings">Settings</Link>
                </li>
              </ul>
            </nav>
          </aside>
          <main className={styles.main}>{children}</main>
        </Flex>
      </Container>
    </div>
  );
};
