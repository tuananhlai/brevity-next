import { createFileRoute } from "@tanstack/react-router";
import { StackedLayout } from "@/components/stacked-layout";
import { Container } from "@/components/ui/layout";
import { Heading } from "@/components/ui/text";
import { useGetArticleDetails } from "@/features/view-article/api/getArticleDetails";
import styles from "./$slug.module.scss";

export const Route = createFileRoute("/article/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
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
}
