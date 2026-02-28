import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";
import { type CreateAPIKeyRequest } from "@/lib/client";

export const useCreateAPIKey = () => {
  return useMutation({
    mutationFn: async (req: CreateAPIKeyRequest) => {
      return await apiClient.createAPIKey(req);
    },
  });
};
