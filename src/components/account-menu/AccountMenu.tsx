import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
import { LuChevronDown } from "react-icons/lu";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Flex } from "@/components/ui/layout";
import { Menu, MenuItem, MenuTrigger } from "@/components/ui/menu";
import { Text } from "@/components/ui/text";
import styles from "./AccountMenu.module.scss";

export interface AccountMenuTriggerProps {
  displayName: string;
  avatarURL: string;
}

export const AccountMenuTrigger: React.FC<AccountMenuTriggerProps> = (
  props,
) => {
  const { displayName, avatarURL } = props;

  return (
    <MenuTrigger>
      <AccountButton displayName={displayName} avatarURL={avatarURL} />
      <AccountMenu />
    </MenuTrigger>
  );
};

interface AccountMenuProps {}

const AccountMenu: React.FC<AccountMenuProps> = () => {
  const { _ } = useLingui();

  return (
    <Menu placement="bottom end">
      <MenuItem href="/me/digital-author">
        {_(msg`My digital authors`)}
      </MenuItem>
      <MenuItem href="/me/settings">{_(msg`Settings`)}</MenuItem>
    </Menu>
  );
};

interface AccountButtonProps {
  displayName: string;
  avatarURL: string;
}

const AccountButton: React.FC<AccountButtonProps> = (props) => {
  const { displayName, avatarURL } = props;
  const { _ } = useLingui();

  return (
    <Button
      className={styles.accountButton}
      variant="tertiary"
      aria-label={_(msg`Open account menu`)}
      suffixIcon={<LuChevronDown />}
    >
      <Flex gap="var(--bw-space-2)" align="center">
        {/* TODO: Remove initials */}
        <Avatar src={avatarURL} alt="" initials="A" size="sm" />
        <Text className={styles.accountButtonDisplayName}>{displayName}</Text>
      </Flex>
    </Button>
  );
};
