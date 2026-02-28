import {
  TabList as AriaTabList,
  type TabListProps as AriaTabListProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import type { ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./Tabs.module.scss";

export interface TabListProps<T> extends ReplaceAriaRenderProps<
  AriaTabListProps<T>
> {}

export const TabList = <T extends object>(props: TabListProps<T>) => {
  const { className, ...rest } = props;

  return <AriaTabList className={cn(styles.tabList, className)} {...rest} />;
};
