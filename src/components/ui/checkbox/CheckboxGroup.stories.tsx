import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { CheckboxGroup, CheckboxGroupProps } from "./CheckboxGroup";

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  title: "CheckboxGroup",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Select an option",
    description: "Choose one or more options",
    children: (
      <>
        <Checkbox value="1">Option 1</Checkbox>
        <Checkbox value="2">Option 2</Checkbox>
        <Checkbox value="3">Option 3</Checkbox>
      </>
    ),
  },
};

export const VisualTest: Story = {
  render: () => {
    return (
      <div
        css={{
          display: "flex",
          gap: "32px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <ExampleCheckboxGroup aria-label="Label" />
        <ExampleCheckboxGroup label="Label" />
        <ExampleCheckboxGroup label="Label" description="Description" />
        <ExampleCheckboxGroup
          label="Label"
          description="Description"
          isInvalid
          errorMessage="Error message"
        />
        <ExampleCheckboxGroup
          label="Label"
          description="Description"
          isDisabled
        />
      </div>
    );
  },
};

const ExampleCheckboxGroup = (props: Partial<CheckboxGroupProps>) => {
  return (
    <CheckboxGroup {...props}>
      <Checkbox value="1">Option 1</Checkbox>
      <Checkbox value="2">Option 2</Checkbox>
    </CheckboxGroup>
  );
};
