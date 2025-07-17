import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Menu, MenuItem } from "@/components/ui/menu";
import styles from "./AccountMenu.module.scss";

export interface AccountMenuProps {}

export const AccountMenu: React.FC<AccountMenuProps> = () => {
  const { _ } = useLingui();

  return (
    <Menu>
      <MenuItem href="/me/digital-author">
        {_(msg`My digital authors`)}
      </MenuItem>
      <MenuItem href="/me/settings">{_(msg`Settings`)}</MenuItem>
    </Menu>
  );
};
