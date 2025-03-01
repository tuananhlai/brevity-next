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

const longListOfOptions = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  label: `Option ${i + 1}`,
}));

const ExampleSelect = <T extends object>(props: Partial<SelectProps<T>>) => {
  const defaultChildren: SelectProps<T>["children"] = (
    <>
      <SelectItem id={0}>Animal Crossing</SelectItem>
      <SelectItem id={1}>Super Mario Odyssey</SelectItem>
      <SelectItem id={2}>The legend of Zelda: Breath of the Wild</SelectItem>
    </>
  );
  const { children = defaultChildren, items, ...rest } = props;

  return (
    <Select aria-label="Example" css={{ width: 200 }} items={items} {...rest}>
      {children}
    </Select>
  );
};
