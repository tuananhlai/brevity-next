import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { useAuth } from "@/features/auth/components/auth-provider";
import { SignInRequest } from "@/lib/client";

export const useSignIn = (): UseMutationResult<void, Error, SignInRequest> => {
  const { signIn } = useAuth();

  return useMutation({
    mutationFn: (req: SignInRequest) => signIn(req),
  });
};
