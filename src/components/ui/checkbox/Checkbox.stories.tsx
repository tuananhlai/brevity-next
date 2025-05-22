import { Meta, StoryObj } from "@storybook/react";
import { VisualTestGrid } from "@/styles/storybookTestUtils";
import { Checkbox, CheckboxProps } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "ui/Checkbox",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Enable",
    defaultSelected: true,
    isDisabled: false,
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
      <VisualTestGrid>
        <ExampleCheckbox />
        <ExampleCheckbox isDisabled />
        <ExampleCheckbox isSelected />
        <ExampleCheckbox isDisabled isSelected />
        <ExampleCheckbox isIndeterminate />
        <ExampleCheckbox isIndeterminate isSelected />
        <ExampleCheckbox isIndeterminate isSelected isDisabled />
        <ExampleCheckbox isInvalid />
        <ExampleCheckbox isInvalid isSelected />
        <ExampleCheckbox>
          Option with very very very very very very very very very very very
          long text that should wrap.
        </ExampleCheckbox>
      </VisualTestGrid>
    );
  },
};

const ExampleCheckbox = (props: Partial<CheckboxProps>) => {
  const children = props.children ?? "Option";
  return <Checkbox {...props}>{children}</Checkbox>;
};
