import { createFileRoute } from "@tanstack/react-router";
import { ViewArticle } from "@/app/pages/view-article";

export const Route = createFileRoute("/article/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ViewArticle slug={Route.useParams().slug} />;
}
