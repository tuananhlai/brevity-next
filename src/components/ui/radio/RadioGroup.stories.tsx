import { Meta, StoryObj } from "@storybook/nextjs";
import { VisualTestGrid } from "@/styles/storybookTestUtils";
import { Radio, RadioProps } from "./Radio";
import { RadioGroup, RadioGroupProps } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: "ui/Radio",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Select one option",
    children: (
      <>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
        <Radio value="3">Option 3</Radio>
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
      <VisualTestGrid>
        <ExampleRadio />
        <ExampleRadio isDisabled />
        <ExampleRadio isSelected />
        <ExampleRadio isSelected isDisabled />
        <ExampleRadio>
          Option with very very very very very very very very very very very
          long text that should wrap.
        </ExampleRadio>
      </VisualTestGrid>
    );
  },
};

export const VisualTestRadioGroup: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
  render: () => {
    return (
      <VisualTestGrid cellWidth="150px">
        <ExampleRadioGroup aria-label="Label" />
        <ExampleRadioGroup label="Label" />
        <ExampleRadioGroup label="Label" description="Description" />
        <ExampleRadioGroup
          label="Label"
          description="Description"
          isInvalid
          errorMessage="Error message"
        />
        <ExampleRadioGroup label="Label" description="Description" isDisabled />
      </VisualTestGrid>
    );
  },
};

const ExampleRadio = (
  props: Partial<RadioProps> & { isSelected?: boolean },
) => {
  const { isSelected, ...radioProps } = props;
  const children = props.children ?? "Option";
  return (
    <RadioGroup defaultValue={isSelected ? "example" : undefined}>
      <Radio value="example" {...radioProps}>
        {children}
      </Radio>
    </RadioGroup>
  );
};

const ExampleRadioGroup = (props: Partial<RadioGroupProps>) => {
  return (
    <RadioGroup {...props}>
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
    </RadioGroup>
  );
};
