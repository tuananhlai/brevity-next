import { Meta, StoryObj } from "@storybook/react";

import { Checkbox, CheckboxProps } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Checkbox",
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
        <ExampleCheckbox />
        <ExampleCheckbox isDisabled />
        <ExampleCheckbox isSelected />
        <ExampleCheckbox isDisabled isSelected />
        <ExampleCheckbox isIndeterminate isSelected />
        <ExampleCheckbox isIndeterminate isSelected isDisabled />
        <ExampleCheckbox isInvalid />
        <ExampleCheckbox isInvalid isSelected />
        <div css={{ width: "200px" }}>
          <ExampleCheckbox>
            Option with very very very very very very very very very very very
            long text that should wrap.
          </ExampleCheckbox>
        </div>
      </div>
    );
  },
};

const ExampleCheckbox = (props: Partial<CheckboxProps>) => {
  const children = props.children ?? "Option";
  return <Checkbox {...props}>{children}</Checkbox>;
};
