import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";
import { type GetArticlePreviewsResponse } from "@/lib/client";

export const useGetArticlePreviews =
  (): UseQueryResult<GetArticlePreviewsResponse> => {
    return useQuery({
      queryKey: ["article-previews"],
      queryFn: ({ signal }) => apiClient.getArticlePreviews({ signal }),
    });
  };
