import { StackedLayout } from "@/components/stacked-layout";
import { Container } from "@/components/ui/layout";
import { Heading } from "@/components/ui/text";
import { useGetArticleDetails } from "@/features/view-article/api/getArticleDetails";
import styles from "./ViewArticle.module.scss";

export interface ViewArticleProps {
  slug: string;
}

export const ViewArticle: React.FC<ViewArticleProps> = ({ slug }) => {
  const { data: articleDetails } = useGetArticleDetails(slug);

  return (
    <StackedLayout>
      <div className={styles.main}>
        <Container maxWidth="md">
          <Heading level={1}>{articleDetails?.title}</Heading>
          {/* TODO: render the article content properly */}
          <pre style={{ whiteSpace: "pre-wrap", fontSize: "1rem" }}>
            {articleDetails?.content}
          </pre>
        </Container>
      </div>
    </StackedLayout>
  );
};
