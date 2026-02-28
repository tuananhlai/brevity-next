import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { select } from "@/utils/testutils";
import { Checkbox, type CheckboxProps } from "./Checkbox";

it("should have the correct role", async () => {
  const screen = await render(<ExampleCheckbox />);
  expect(screen.getByRole("checkbox")).toBeInTheDocument();
});

it("should be controlled when `isSelected` prop is provided", async () => {
  const handleChange = vi.fn();
  const screen = await render(
    <ExampleCheckbox isSelected={false} onChange={handleChange} />,
  );
  const checkbox = screen.getByRole("checkbox", {
    name: "label",
  });
  expect(checkbox).not.toBeChecked();

  await select(checkbox);
  expect(handleChange).toHaveBeenCalledWith(true);
});

it("should be uncontrolled when `isSelected` prop is not provided", async () => {
  const handleChange = vi.fn();
  const screen = await render(<ExampleCheckbox onChange={handleChange} />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();

  await select(checkbox);
  expect(checkbox).toBeChecked();
  expect(handleChange).toHaveBeenCalledWith(true);
});

it("should be indeterminate when `isIndeterminate` prop is true", async () => {
  const screen = await render(<ExampleCheckbox isIndeterminate />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toBePartiallyChecked();
});

it("should invoke focus events", async () => {
  const handleFocus = vi.fn();
  const handleBlur = vi.fn();
  const handleFocusChange = vi.fn();
  const screen = await render(
    <ExampleCheckbox
      onFocus={handleFocus}
      onFocusChange={handleFocusChange}
      onBlur={handleBlur}
    />,
  );
  const checkbox = screen.getByRole("checkbox");
  checkbox.element().focus();

  expect(handleFocus).toHaveBeenCalled();
  expect(handleFocusChange).toHaveBeenCalledWith(true);

  checkbox.element().blur();

  expect(handleBlur).toHaveBeenCalled();
  expect(handleFocusChange).toHaveBeenCalledWith(false);
});

/** @see https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/ */
describe("WAI-ARIA Compliance", () => {
  it("should have a label", async () => {
    const screen = await render(<ExampleCheckbox>label</ExampleCheckbox>);
    expect(screen.getByRole("checkbox", { name: "label" })).toBeInTheDocument();
  });

  it("should select the checkbox when the space key is pressed", async () => {
    const screen = await render(<ExampleCheckbox />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
    checkbox.element().focus();
    await userEvent.keyboard(" ");
    expect(checkbox).toBeChecked();
  });
});

const ExampleCheckbox = (props: Partial<CheckboxProps>) => {
  const children = props.children ?? "example";
  return (
    <Checkbox aria-label="label" {...props}>
      {children}
    </Checkbox>
  );
};
