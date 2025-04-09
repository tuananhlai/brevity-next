import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../avatar";
import { Select, SelectProps } from "./Select";
import { SelectItem } from "./SelectItem";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "ui/Select",
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
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
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
        <ExampleSelect defaultSelectedKey={2} />
        <ExampleSelect defaultSelectedKey="allison">
          <SelectItem id="allison">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Avatar color="blue" size="sm" initials="A" alt="" />
              Allison
            </div>
          </SelectItem>
          <SelectItem>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Avatar size="sm" initials="B" alt="" />
              Brock
            </div>
          </SelectItem>
        </ExampleSelect>
        <ExampleSelect items={longListOfOptions} defaultSelectedKey={50}>
          {(item) => <SelectItem>{item.label}</SelectItem>}
        </ExampleSelect>
        <ExampleSelect label="Label" />
        <ExampleSelect label="Label" description="Description" />
        <ExampleSelect
          label="Label"
          description="Description"
          isInvalid
          errorMessage="Error message"
        />
        <ExampleSelect label="Label" description="Description" isDisabled />
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
    <Select aria-label="Example" style={{ width: 200 }} items={items} {...rest}>
      {children}
    </Select>
  );
};
