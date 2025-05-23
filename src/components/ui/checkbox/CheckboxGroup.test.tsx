import { render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";
import { CheckboxGroup, CheckboxGroupProps } from "./CheckboxGroup";

it("should be associated with label and description", () => {
  render(<TestCheckboxGroup label="label" description="description" />);

  expect(screen.getByRole("group")).toHaveAccessibleName(/label/);
  expect(screen.getByRole("group")).toHaveAccessibleDescription("description");
});

it("should be associated with an error message when `isInvalid` and `errorMessage` props are provided", () => {
  render(<TestCheckboxGroup isInvalid errorMessage="error" />);

  expect(screen.getByRole("group")).toHaveAccessibleDescription("error");
});

const TestCheckboxGroup = (props: CheckboxGroupProps) => {
  return (
    <CheckboxGroup aria-label="label" {...props}>
      <Checkbox value="1">Option 1</Checkbox>
      <Checkbox value="2">Option 2</Checkbox>
      <Checkbox value="3">Option 3</Checkbox>
    </CheckboxGroup>
  );
};
