import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthDialogProvider } from "@/features/auth/components/auth-dialog-provider";
import { useAuthDialog } from "./AuthDialogContext";

it("should open sign in dialog when `signIn` is called", async () => {
  render(
    <AuthDialogProvider>
      <OpenSignInButton />
    </AuthDialogProvider>,
  );

  await userEvent.click(screen.getByRole("button"));

  expect(screen.getByRole("dialog", { name: /sign in/i })).toBeInTheDocument();
});

it("signIn function should resolve when the dialog is closed", async () => {
  const onSignInFinished = jest.fn();
  render(
    <AuthDialogProvider>
      <OpenSignInButton onSignInFinished={onSignInFinished} />
    </AuthDialogProvider>,
  );

  await userEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("dialog", { name: /sign in/i })).toBeInTheDocument();

  await userEvent.click(document.body);
  expect(
    screen.queryByRole("dialog", { name: /sign in/i }),
  ).not.toBeInTheDocument();
  expect(onSignInFinished).toHaveBeenCalledTimes(1);
});

it("should open sign up dialog when `signUp` is called", async () => {
  render(
    <AuthDialogProvider>
      <OpenSignUpButton />
    </AuthDialogProvider>,
  );

  await userEvent.click(screen.getByRole("button"));

  expect(screen.getByRole("dialog", { name: /sign up/i })).toBeInTheDocument();
});

it("signUp function should resolve when the dialog is closed", async () => {
  const onSignUpFinished = jest.fn();
  render(
    <AuthDialogProvider>
      <OpenSignUpButton onSignUpFinished={onSignUpFinished} />
    </AuthDialogProvider>,
  );

  await userEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("dialog", { name: /sign up/i })).toBeInTheDocument();

  await userEvent.click(document.body);
  expect(
    screen.queryByRole("dialog", { name: /sign up/i }),
  ).not.toBeInTheDocument();
  expect(onSignUpFinished).toHaveBeenCalledTimes(1);
});

const OpenSignInButton: React.FC<{ onSignInFinished?: () => void }> = ({
  onSignInFinished,
}) => {
  const { signIn } = useAuthDialog();

  return (
    <button onClick={() => signIn().then(onSignInFinished)}>
      Open sign in
    </button>
  );
};

const OpenSignUpButton: React.FC<{ onSignUpFinished?: () => void }> = ({
  onSignUpFinished,
}) => {
  const { signUp } = useAuthDialog();

  return (
    <button onClick={() => signUp().then(onSignUpFinished)}>
      Open sign up
    </button>
  );
};
