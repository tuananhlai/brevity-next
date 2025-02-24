import { Meta, StoryObj } from "@storybook/react";
import { ListBoxItem } from "react-aria-components";

import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Select",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Select>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    children: (
      <>
        <ListBoxItem>Option 1</ListBoxItem>
        <ListBoxItem>Option 2</ListBoxItem>
        <ListBoxItem>Option 3</ListBoxItem>
      </>
    ),
  },
};
