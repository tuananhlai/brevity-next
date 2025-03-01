import { Meta, StoryObj } from "@storybook/react";

import { Select, SelectProps } from "./Select";
import { SelectItem } from "./SelectItem";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Select",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    children: (
      <>
        <SelectItem>Option 1</SelectItem>
        <SelectItem>Option 2</SelectItem>
        <SelectItem>Option 3</SelectItem>
      </>
    ),
  },
};

export const VisualTest: Story = {
  render: () => {
    return (
      <div
        style={{
          display: "flex",
          gap: "32px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <ExampleSelect />
        <ExampleSelect defaultSelectedKey={0} />
        <ExampleSelect defaultSelectedKey={2} />
        <ExampleSelect isDisabled />
        <ExampleSelect isInvalid />
      </div>
    );
  },
};

const ExampleSelect = (props: Partial<SelectProps<object>>) => (
  <Select css={{ width: 200 }} {...props}>
    <SelectItem id={0}>Animal Crossing</SelectItem>
    <SelectItem id={1}>Super Mario Odyssey</SelectItem>
    <SelectItem id={2}>Legend of Zelda: Breath of the Wild</SelectItem>
  </Select>
);
