import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const getArticlePreviews =
  async (): Promise<GetArticlePreviewsResponse> => {
    const response = await fetch("http://localhost:8080/v1/article-previews");

    return response.json() as Promise<GetArticlePreviewsResponse>;
  };

export const useGetArticlePreviews =
  (): UseQueryResult<GetArticlePreviewsResponse> => {
    return useQuery({
      queryKey: ["article-previews"],
      queryFn: getArticlePreviews,
    });
  };

export interface GetArticlePreviewsResponse {
  items: ArticlePreview[];
  nextPageToken?: string;
}

export interface ArticlePreview {
  id: string;
  slug: string;
  title: string;
  description?: string;
  author: {
    id: string;
    username: string;
    displayName?: string;
    avatarURL?: string;
  };
  createdAt: string;
  updatedAt: string;
}
