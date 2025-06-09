import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "react-aria-components";
import { DialogTrigger } from "@/components/ui/dialog";
import { renderWithProviders } from "@/utils/testutils";
import { SignInFormDialog } from "./SignInFormDialog";

it("should open the dialog when the trigger button is clicked", async () => {
  renderWithProviders(
    <DialogTrigger>
      <Button>Open</Button>
      <SignInFormDialog onCreateNewAccount={() => {}} />
    </DialogTrigger>,
  );

  await userEvent.click(screen.getByText("Open"));

  expect(screen.getByRole("dialog", { name: /sign in/i })).toBeInTheDocument();
});

it("should submit the form and close the dialog when the submit button is clicked", async () => {
  const onSubmit = jest.fn();
  renderWithProviders(
    <DialogTrigger>
      <Button>Open</Button>
      <SignInFormDialog onSubmit={onSubmit} onCreateNewAccount={() => {}} />
    </DialogTrigger>,
  );

  await userEvent.click(screen.getByText("Open"));

  const email = "test@test.com";
  const password = "test";
  await userEvent.type(screen.getByRole("textbox", { name: /email/i }), email);
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(screen.getByRole("button", { name: "Sign in" }));

  expect(onSubmit).toHaveBeenCalledWith({
    email,
    password,
  });
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});
