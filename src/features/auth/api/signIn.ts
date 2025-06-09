import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";
import { SignInRequest, SignInResponse } from "@/lib/client";

export const useSignIn = (): UseMutationResult<
  SignInResponse,
  Error,
  SignInRequest
> => {
  return useMutation({
    mutationFn: (req: SignInRequest) => apiClient.signIn(req),
  });
};
