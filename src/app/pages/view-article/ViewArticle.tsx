import { NextPage } from "next";
import Head from "next/head";
import { StackedLayout } from "@/components/stacked-layout";
import { Container } from "@/components/ui/layout";
import { Heading } from "@/components/ui/text";
import { ArticleRenderer } from "@/features/view-article/components/article-renderer";
import { GetArticleDetailsResponse } from "@/lib/client";
import { getPageTitle } from "@/utils/misc";
import styles from "./ViewArticle.module.scss";

export interface ViewArticleProps {
  articleDetails: GetArticleDetailsResponse;
}

export const ViewArticle: NextPage<ViewArticleProps> = ({ articleDetails }) => {
  const pageHeading = articleDetails.title;
  const pageTitle = getPageTitle(pageHeading);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <StackedLayout>
        <div className={styles.main}>
          <Container maxWidth="md">
            <Heading level={1}>{pageHeading}</Heading>
            <ArticleRenderer
              dangerouslySetInnerHTML={{ __html: articleDetails.content }}
              className={styles.articleRenderer}
            />
          </Container>
        </div>
      </StackedLayout>
    </>
  );
};
