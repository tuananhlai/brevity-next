import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuProps as AriaMenuProps,
  MenuItemProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import { Popover, PopoverProps } from "../popover";
import styles from "./Menu.module.scss";

export interface MenuProps<T>
  extends Omit<AriaMenuProps<T>, "style" | "className">,
    Pick<
      PopoverProps,
      | "placement"
      | "offset"
      | "crossOffset"
      | "defaultOpen"
      | "isOpen"
      | "onOpenChange"
      | "isKeyboardDismissDisabled"
      | "shouldFlip"
      | "isNonModal"
    > {}

export function Menu<T extends object>(props: MenuProps<T>) {
  const {
    placement,
    offset,
    crossOffset,
    defaultOpen,
    isOpen,
    onOpenChange,
    isKeyboardDismissDisabled,
    shouldFlip,
    isNonModal,
    ...rest
  } = props;
  return (
    <Popover
      placement={placement}
      offset={offset}
      crossOffset={crossOffset}
      defaultOpen={defaultOpen}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      shouldFlip={shouldFlip}
      isNonModal={isNonModal}
    >
      <AriaMenu className={styles.menu} {...rest} />
    </Popover>
  );
}

export const MenuItem = ({ className, ...props }: MenuItemProps) => {
  return <AriaMenuItem className={cn(styles.menuItem, className)} {...props} />;
};

export { MenuTrigger } from "react-aria-components";
