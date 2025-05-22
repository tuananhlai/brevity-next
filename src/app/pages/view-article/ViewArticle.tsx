import { NextPage } from "next";
import { StackedLayout } from "@/components/stacked-layout";
import { ArticleRenderer } from "@/features/view-article/components/article-renderer";
import { GetArticleDetailsResponse } from "@/lib/client";
import styles from "./ViewArticle.module.scss";

export interface ViewArticleProps {
  articleDetails: GetArticleDetailsResponse;
}

export const ViewArticle: NextPage<ViewArticleProps> = ({ articleDetails }) => {
  return (
    <StackedLayout>
      <div className={styles.main}>
        <h1>{articleDetails.title}</h1>
        <ArticleRenderer
          dangerouslySetInnerHTML={{ __html: articleDetails.content }}
        />
      </div>
    </StackedLayout>
  );
};
