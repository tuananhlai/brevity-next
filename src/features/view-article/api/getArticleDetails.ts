import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";
import { type GetArticleDetailsResponse } from "@/lib/client";

export const useGetArticleDetails = (
  slug: string,
): UseQueryResult<GetArticleDetailsResponse> => {
  return useQuery({
    queryKey: ["article-details", slug],
    queryFn: ({ signal }) => apiClient.getArticleDetails({ slug }, { signal }),
    retry: false,
  });
};
