import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SignUpForm, SignUpFormProps } from "./SignUpForm";

it("should submit successfully", async () => {
  const onSubmit = jest.fn();
  renderSignUpForm({ onSubmit });

  const email = "test@test.com";
  const password = "password";
  const username = "username";
  const displayName = "display name";

  await userEvent.type(
    screen.getByRole("textbox", { name: /username/i }),
    username,
  );
  await userEvent.type(
    screen.getByRole("textbox", { name: /display name/i }),
    displayName,
  );
  await userEvent.type(screen.getByRole("textbox", { name: /email/i }), email);
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(getSignUpButton());

  expect(onSubmit).toHaveBeenCalledWith({
    email,
    password,
    username,
    displayName,
  });
});

const getSignUpButton = () => screen.getByRole("button", { name: "Sign up" });

const renderSignUpForm = (props?: Omit<SignUpFormProps, "id">) => {
  const id = "sign-up-form";

  return render(
    <div>
      <SignUpForm id={id} {...props} />
      <button form={id} type="submit">
        Sign up
      </button>
    </div>,
  );
};
