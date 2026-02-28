import { expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { Select, SelectItem, type SelectProps } from "@/components/ui/select";

it("should have the correct roles", async () => {
  const screen = await render(<ExampleSelect />);

  await screen.getByRole("button").click();

  expect(screen.getByRole("listbox")).toBeInTheDocument();
  expect(screen.getByRole("option", { name: "Option 1" })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: "Option 2" })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: "Option 3" })).toBeInTheDocument();
});

it("should be open by default when `defaultOpen` is true", async () => {
  const screen = await render(<ExampleSelect defaultOpen />);

  expect(screen.getByRole("listbox")).toBeInTheDocument();
});

it("should close the listbox when the user clicks outside", async () => {
  const screen = await render(<ExampleSelect defaultOpen />);

  expect(screen.getByRole("listbox")).toBeInTheDocument();

  await userEvent.click(document.body);

  await expect.poll(() => screen.getByRole("listbox")).not.toBeInTheDocument();
});

it("should have label and description when provided", async () => {
  const screen = await render(
    <ExampleSelect label="label" description="description" />,
  );

  expect(screen.getByRole("button")).toHaveAccessibleName(/label/);
  expect(screen.getByRole("button")).toHaveAccessibleDescription(/description/);
});

it("should be associated with an error message when `isInvalid` is true", async () => {
  const screen = await render(
    <ExampleSelect isInvalid errorMessage="error" description="description" />,
  );

  expect(screen.getByRole("button")).toHaveAccessibleDescription(
    "description error",
  );
});

it("should select an item when the user clicks on it", async () => {
  const screen = await render(<ExampleSelect />);

  const selectButton = screen.getByRole("button", { name: "example" });

  await selectButton.click();
  await screen.getByRole("option", { name: "Option 1" }).click();

  expect(selectButton).toHaveTextContent("Option 1");
});

const ExampleSelect = (props: Partial<SelectProps<object>>) => {
  return (
    <Select aria-label="example" {...props}>
      <SelectItem>Option 1</SelectItem>
      <SelectItem>Option 2</SelectItem>
      <SelectItem>Option 3</SelectItem>
    </Select>
  );
};
