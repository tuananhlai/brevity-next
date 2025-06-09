import { GetStaticPaths, GetStaticProps } from "next";
import { ViewArticleProps } from "@/app/pages/view-article/ViewArticle";
import { apiClient } from "@/lib/apiClient";

export { ViewArticle as default } from "@/app/pages/view-article";

export const getStaticPaths: GetStaticPaths = async () => {
  // Because the backend is not deployed yet, I temporarily
  // disable the static generation.
  if (process.env.NODE_ENV !== "development") {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

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
