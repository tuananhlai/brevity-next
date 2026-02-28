import { type HTMLAttributes } from "react";
import { cn } from "@/styles/utils";
import styles from "./ArticleRenderer.module.css";

export type ArticleRendererProps = HTMLAttributes<HTMLDivElement>;

export const ArticleRenderer: React.FC<ArticleRendererProps> = (props) => {
  const { className, ...rest } = props;

  return <div className={cn(styles["markdown-body"], className)} {...rest} />;
};
