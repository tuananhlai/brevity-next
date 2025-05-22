import { forwardRef } from "react";
import { FaApple } from "react-icons/fa6";
import { Button, ButtonProps } from "@/components/ui/button";

export interface SignInWithAppleButtonProps
  extends Pick<ButtonProps, "className" | "aria-label"> {}

const SignInWithAppleButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  SignInWithAppleButtonProps
> = (props, ref) => {
  return (
    <Button
      ref={ref}
      variant="secondary"
      aria-label="Sign in with Apple"
      {...props}
    >
      <FaApple />
      Apple
    </Button>
  );
};

const _SignInWithAppleButton = /*#__PURE__*/ forwardRef(SignInWithAppleButton);

export { _SignInWithAppleButton as SignInWithAppleButton };
