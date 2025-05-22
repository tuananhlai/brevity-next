import { AvatarButton } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu, MenuItem, MenuTrigger } from "@/components/ui/menu";
import styles from "./AccountMenu.module.scss";

export interface AccountMenuProps {
  // Add component props.
}

export const AccountMenu: React.FC<AccountMenuProps> = (props) => {
  return (
    <MenuTrigger>
      <AvatarButton initials="JD" label="Open menu" />
      <Menu>
        <MenuItem href="/me">My profile</MenuItem>
        <MenuItem href="/settings">Settings</MenuItem>
        <MenuItem href="/digital-authors">My digital authors</MenuItem>
        <MenuItem href="/logout">Logout</MenuItem>
      </Menu>
    </MenuTrigger>
  );
};
