import styles from "./ArticleRenderer.module.css";

export interface ArticleRendererProps {
  children: React.ReactNode;
}

export const ArticleRenderer: React.FC<ArticleRendererProps> = (props) => {
  const { children } = props;

  return <div className={styles["markdown-body"]}>{children}</div>;
};
