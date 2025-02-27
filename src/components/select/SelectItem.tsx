import { ListBoxItem, ListBoxItemProps } from "react-aria-components";

import { ReplaceAriaRenderProps } from "@/utils";

export type SelectItemProps<T> = ReplaceAriaRenderProps<ListBoxItemProps<T>>;

export const SelectItem = <T extends object>(props: SelectItemProps<T>) => {
  return <ListBoxItem {...props} />;
};
