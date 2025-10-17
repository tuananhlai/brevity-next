import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "react-aria-components";
import { DialogTrigger } from "@/components/ui/dialog";
import { AuthProvider } from "@/features/auth/components/auth-provider";
import { apiClient } from "@/lib/apiClient";
import { renderWithProviders } from "@/utils/testutils";
import { SignInFormDialog, SignInFormDialogProps } from "./SignInFormDialog";

jest
  .spyOn(apiClient, "getCurrentUser")
  .mockRejectedValue(new Error("unauthorized"));
jest.spyOn(apiClient, "signIn").mockResolvedValue({
  id: "test-id",
  username: "test-user",
  email: "test@test.com",
});

it("should open the dialog when the trigger button is clicked", async () => {
  renderSignInFormDialog();

  await userEvent.click(screen.getByText("Open"));

  expect(screen.getByRole("dialog", { name: /sign in/i })).toBeInTheDocument();
});

it("should submit the form and close the dialog when the submit button is clicked", async () => {
  const onSubmitted = jest.fn();
  renderSignInFormDialog({ onSubmitted });

  await userEvent.click(screen.getByText("Open"));

  const email = "test@test.com";
  const password = "test";
  await userEvent.type(screen.getByRole("textbox", { name: /email/i }), email);
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(screen.getByRole("button", { name: "Sign in" }));

  expect(apiClient.signIn).toHaveBeenCalledWith({
    emailOrUsername: email,
    password,
  });
  expect(onSubmitted).toHaveBeenCalledTimes(1);
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

const renderSignInFormDialog = (props?: Partial<SignInFormDialogProps>) => {
  return renderWithProviders(
    <AuthProvider>
      <DialogTrigger>
        <Button>Open</Button>
        <SignInFormDialog onCreateNewAccount={() => {}} {...props} />
      </DialogTrigger>
    </AuthProvider>,
  );
};
