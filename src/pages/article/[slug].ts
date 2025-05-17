import { GetStaticPaths, GetStaticProps } from "next";
import { ViewArticleProps } from "@/app/pages/view-article/ViewArticle";
import { apiClient } from "@/lib/api-client";

export { ViewArticle as default } from "@/app/pages/view-article";

export const getStaticPaths: GetStaticPaths = async () => {
  const articlePreviews = await apiClient.getArticlePreviews();

  return {
    paths: articlePreviews.items.map((item) => ({
      params: { slug: item.slug },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<ViewArticleProps> = async ({
  params,
}) => {
  const slug = params?.slug?.toString();

  if (slug == null) {
    return {
      notFound: true,
    };
  }

  const articleDetails = await apiClient.getArticleDetails({ slug });

  return {
    props: {
      articleDetails,
    },
  };
};
