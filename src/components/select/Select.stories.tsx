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
        <ExampleSelect items={longListOfOptions}>
          {(item) => <SelectItem>{item.label}</SelectItem>}
        </ExampleSelect>
        <ExampleSelect isDisabled />
        <ExampleSelect isInvalid />
      </div>
    );
  },
};

const longListOfOptions = Array(10).map((_, index) => ({
  id: index,
  label: `Option ${index + 1}`,
}));

const ExampleSelect = <T extends object>(props: Partial<SelectProps<T>>) => {
  const defaultChildren: SelectProps<T>["children"] = (
    <>
      <SelectItem>Option 1</SelectItem>
      <SelectItem>Option 2</SelectItem>
      <SelectItem>Option 3</SelectItem>
    </>
  );
  const { children = defaultChildren, items, ...rest } = props;

  return (
    <Select css={{ width: 200 }} items={items} {...rest}>
      {children}
    </Select>
  );
};
