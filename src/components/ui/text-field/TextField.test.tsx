import { expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { TextField, type TextFieldProps } from "./TextField";

it("should have the correct role", async () => {
  const screen = await renderTextField();
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

it("should be associated with a label", async () => {
  const screen = await render(<TextField label="Label" />);
  expect(screen.getByRole("textbox", { name: /label/i })).toBeInTheDocument();
});

it("should be described by a description when `description` prop is provided", async () => {
  const screen = await renderTextField({ description: "Description" });
  expect(screen.getByRole("textbox")).toHaveAccessibleDescription(
    "Description",
  );
});

it("should be described by an error message when `isInvalid` and `errorMessage` props are provided", async () => {
  const screen = await renderTextField({
    isInvalid: true,
    errorMessage: "Error",
  });
  expect(screen.getByRole("textbox")).toHaveAccessibleDescription("Error");
});

it("should be required when `isRequired` prop is provided", async () => {
  const screen = await renderTextField({ isRequired: true });
  expect(screen.getByRole("textbox")).toBeRequired();
});

it("should invoke `onChange` prop when the value changes", async () => {
  const onChange = vi.fn();
  const screen = await renderTextField({ onChange });

  await screen.getByRole("textbox").fill("test");

  expect(onChange).toHaveBeenLastCalledWith("test");
});

const renderTextField = (props: Partial<TextFieldProps> = {}) => {
  return render(<TextField aria-label="label" {...props} />);
};
