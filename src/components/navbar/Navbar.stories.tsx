import { Meta, StoryObj } from "@storybook/react";
import { LuLogIn } from "react-icons/lu";
import { AvatarButton } from "@/components/ui/avatar";
import { Menu, MenuItem, MenuTrigger } from "@/components/ui/menu";
import { Navbar, NavbarLink, NavbarSpacer } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: "Navbar",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Navbar>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    return (
      <Navbar>
        <NavbarLink href="/home">Home</NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="/contact">Contact</NavbarLink>
        <NavbarSpacer />
        <NavbarLink aria-label="Login" href="/login">
          <LuLogIn />
        </NavbarLink>
        <MenuTrigger>
          <AvatarButton initials="JD" label={"Open Menu"} />
          <Menu>
            <MenuItem href="/profile">Profile</MenuItem>
            <MenuItem href="/settings">Settings</MenuItem>
            <MenuItem href="/logout">Logout</MenuItem>
          </Menu>
        </MenuTrigger>
      </Navbar>
    );
  },
};
