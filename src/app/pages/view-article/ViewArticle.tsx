import { NextPage } from "next";
import { StackedLayout } from "@/components/stacked-layout";
import { GetArticleDetailsResponse } from "@/features/view-article/api/getArticleDetails";
import { ArticleRenderer } from "@/features/view-article/components/article-renderer";
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
