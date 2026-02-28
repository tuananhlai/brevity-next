import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";
import { type GetAPIKeysResponse } from "@/lib/client";

export const useGetAPIKeys = (): UseQueryResult<GetAPIKeysResponse> => {
  return useQuery({
    queryKey: ["api-keys"],
    queryFn: () => apiClient.getAPIKeys(),
    retry: false,
  });
};
