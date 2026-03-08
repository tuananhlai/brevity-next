import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";
import { type ListDigitalAuthorsResponse } from "@/lib/client";

export const useListDigitalAuthors =
  (): UseQueryResult<ListDigitalAuthorsResponse> => {
    return useQuery({
      queryKey: ["digital-authors"],
      queryFn: () => apiClient.listDigitalAuthors(),
    });
  };
