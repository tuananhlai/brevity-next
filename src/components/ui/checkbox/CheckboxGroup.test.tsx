import { expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { Checkbox } from "./Checkbox";
import { CheckboxGroup, type CheckboxGroupProps } from "./CheckboxGroup";

it("should be associated with label and description", async () => {
  const screen = await render(
    <TestCheckboxGroup
      aria-label={undefined}
      label="label"
      description="description"
    />,
  );

  const group = screen.getByRole("group");
  expect(group).toHaveAccessibleName(/label/i);
  expect(group).toHaveAccessibleDescription(/description/i);
});

it("should be associated with an error message when `isInvalid` and `errorMessage` props are provided", async () => {
  const screen = await render(
    <TestCheckboxGroup aria-label={undefined} isInvalid errorMessage="error" />,
  );
  const group = screen.getByRole("group");

  expect(group).toHaveAccessibleDescription(/error/i);
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
