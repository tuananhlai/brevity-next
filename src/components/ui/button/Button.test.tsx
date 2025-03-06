import { render, screen } from "@testing-library/react";
import { act } from "react";
import { Button, ButtonProps } from "./Button";

it("has correct accessibility role", () => {
  render(<ExampleButton />);

  expect(screen.getByRole("button")).toBeInTheDocument();
});

it("is disabled once `isDisabled` is true", () => {
  render(<ExampleButton isDisabled />);

  expect(screen.getByRole("button")).toBeDisabled();
});

it("calls 'onFocus' and 'onFocusChange' when focused", () => {
  const onFocusChange = jest.fn();
  const onFocus = jest.fn();
  render(<ExampleButton onFocusChange={onFocusChange} onFocus={onFocus} />);

  const btn = screen.getByRole("button");
  act(() => btn.focus());

  expect(onFocus).toHaveBeenCalled();
  expect(onFocusChange).toHaveBeenCalledWith(true);
});

const ExampleButton = (props: Partial<ButtonProps>) => {
  return <Button {...props}>example</Button>;
};
