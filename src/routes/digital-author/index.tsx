import { createFileRoute } from "@tanstack/react-router";
import { StudioLayout } from "@/components/studio-layout";
import { useListDigitalAuthors } from "@/features/digital-author/api/listDigitalAuthors";
import { DigitalAuthorTable } from "@/features/digital-author/components/digital-author-table";

export const Route = createFileRoute("/digital-author/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useListDigitalAuthors();

  return (
    <StudioLayout>
      <DigitalAuthorTable
        items={
          data?.items.map((item) => ({
            ...item,
            createdAt: new Date(item.createdAt),
          })) ?? []
        }
      />
    </StudioLayout>
  );
}
