import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button";
import { Menu, MenuItem, MenuTrigger } from "./Menu";

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: "Menu",
  argTypes: {},
  decorators: [
    (story) => (
      <div style={{ width: "1200px", height: "800px" }}>{story()}</div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Menu>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => (
    <MenuTrigger defaultOpen>
      <Button>Open Menu</Button>
      <Menu>
        <MenuItem href="https://google.com">Use this to go to Google</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </MenuTrigger>
  ),
};
