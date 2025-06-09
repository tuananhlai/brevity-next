import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { SignUpRequest } from "@/lib/client";

export const useSignUp = (): UseMutationResult<void, Error, SignUpRequest> => {
  return useMutation({
    mutationFn: (req: SignUpRequest) => apiClient.signUp(req),
  });
};
