import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { GetArticlePreviewsResponse } from "@/lib/client";

export const useGetArticlePreviews =
  (): UseQueryResult<GetArticlePreviewsResponse> => {
    return useQuery({
      queryKey: ["article-previews"],
      queryFn: () => apiClient.getArticlePreviews(),
    });
  };
