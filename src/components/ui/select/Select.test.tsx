import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select, SelectItem, SelectProps } from "@/components/ui/select";

it("should have the correct roles", async () => {
  render(<ExampleSelect />);

  await userEvent.click(screen.getByRole("button"));

  expect(screen.getByRole("listbox")).toBeInTheDocument();
  expect(screen.getAllByRole("option")).toHaveLength(3);
});

it("should be open by default when `defaultOpen` is true", () => {
  render(<ExampleSelect defaultOpen />);

  expect(screen.getByRole("listbox")).toBeInTheDocument();
});

it("should close the listbox when the user clicks outside", async () => {
  render(<ExampleSelect defaultOpen />);

  await userEvent.click(document.body);

  expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
});

it("should have label and description when provided", () => {
  render(<ExampleSelect label="label" description="description" />);

  expect(screen.getByRole("button")).toHaveAccessibleName(/label/);
  expect(screen.getByRole("button")).toHaveAccessibleDescription(/description/);
});

it("should be associated with an error message when `isInvalid` is true", () => {
  render(
    <ExampleSelect isInvalid errorMessage="error" description="description" />,
  );

  expect(screen.getByRole("button")).toHaveAccessibleDescription(
    "description error",
  );
});

it("should select an item when the user clicks on it", async () => {
  render(<ExampleSelect />);

  await userEvent.click(screen.getByRole("button"));
  await userEvent.click(screen.getByRole("option", { name: "Option 1" }));

  expect(screen.getByRole("button")).toHaveTextContent("Option 1");
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
