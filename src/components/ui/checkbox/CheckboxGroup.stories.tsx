import { Meta, StoryObj } from "@storybook/nextjs";
import { VisualTestGrid } from "@/styles/storybookTestUtils";
import { Checkbox } from "./Checkbox";
import { CheckboxGroup, CheckboxGroupProps } from "./CheckboxGroup";

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  title: "ui/CheckboxGroup",
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
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
  render: () => {
    return (
      <VisualTestGrid cellWidth="150px">
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
      </VisualTestGrid>
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
