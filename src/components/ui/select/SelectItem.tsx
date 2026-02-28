import { ListBoxItem, type ListBoxItemProps } from "react-aria-components";
import { cn } from "@/styles/utils";
import type { ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./SelectItem.module.scss";

export type SelectItemProps<T> = ReplaceAriaRenderProps<ListBoxItemProps<T>>;

export const SelectItem = <T extends object>({
  className,
  ...props
}: SelectItemProps<T>) => {
  return <ListBoxItem className={cn(styles.root, className)} {...props} />;
};
