import { forwardRef } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Button, ButtonProps } from "@/components/ui/button";

export interface SignInWithGoogleButtonProps
  extends Pick<ButtonProps, "className" | "aria-label"> {}

const SignInWithGoogleButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  SignInWithGoogleButtonProps
> = (props, ref) => {
  return (
    <Button
      ref={ref}
      variant="secondary"
      aria-label="Sign in with Google"
      {...props}
    >
      <FaGoogle />
      Google
    </Button>
  );
};

const _SignInWithGoogleButton = /*#__PURE__*/ forwardRef(
  SignInWithGoogleButton,
);

export { _SignInWithGoogleButton as SignInWithGoogleButton };
