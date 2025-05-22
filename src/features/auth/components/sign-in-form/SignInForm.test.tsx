import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SignInForm, SignInFormProps } from "./SignInForm";

it("should submit", async () => {
  const onSubmit = jest.fn();
  const email = "test@test.com";
  const password = "test";
  renderSignInForm({ onSubmit });

  await userEvent.type(screen.getByRole("textbox", { name: /email/i }), email);
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(screen.getByRole("button", { name: "Sign in" }));

  expect(onSubmit).toHaveBeenCalledWith({
    email,
    password,
  });
});

it("email input should be invalid when the email format is incorrect", async () => {
  renderSignInForm();

  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const submitButton = screen.getByRole("button", { name: "Sign in" });

  // Empty email.
  await userEvent.click(submitButton);

  expect(emailInput).toBeInvalid();

  // Invalid email format.
  await userEvent.type(emailInput, "invalid");
  await userEvent.click(submitButton);

  expect(emailInput).toBeInvalid();
});

it("password input should be invalid when the password is too short", async () => {
  renderSignInForm();

  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole("button", { name: "Sign in" });

  // Empty password.
  await userEvent.click(submitButton);

  expect(passwordInput).toBeInvalid();
});

const renderSignInForm = (props?: SignInFormProps) => {
  const { id = "sign-in-form", ...rest } = props ?? {};
  return render(
    <div>
      <SignInForm id={id} {...rest} />
      <button form={id} type="submit">
        Sign in
      </button>
    </div>,
  );
};
