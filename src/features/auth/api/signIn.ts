import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { useAuth } from "@/features/auth/components/auth-provider";
import { apiClient } from "@/lib/apiClient";
import { SignInRequest, SignInResponse } from "@/lib/client";

export const useSignIn = (): UseMutationResult<
  SignInResponse,
  Error,
  SignInRequest
> => {
  const { signIn } = useAuth();

  return useMutation({
    mutationFn: (req: SignInRequest) => signIn(req),
  });
};
