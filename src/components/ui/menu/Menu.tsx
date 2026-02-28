import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  type MenuProps as AriaMenuProps,
  type MenuItemProps,
} from "react-aria-components";
import { Popover, type PopoverProps } from "@/components/ui/popover";
import { cn } from "@/styles/utils";
import styles from "./Menu.module.scss";

export interface MenuProps<T>
  extends
    Omit<AriaMenuProps<T>, "style" | "className">,
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
      className={styles.popover}
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
