import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabListProps as AriaTabListProps,
  TabProps as AriaTabProps,
  Tabs as AriaTabs,
  TabsProps as AriaTabsProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import { ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./Tabs.module.scss";

export interface TabsProps extends ReplaceAriaRenderProps<AriaTabsProps> {}

export const Tabs: React.FC<TabsProps> = (props) => {
  return <AriaTabs {...props} />;
};

export interface TabListProps<T>
  extends ReplaceAriaRenderProps<AriaTabListProps<T>> {}

export const TabList = <T extends object>(props: TabListProps<T>) => {
  const { className, ...rest } = props;

  return <AriaTabList className={cn(styles.tabList, className)} {...rest} />;
};

export interface TabProps extends ReplaceAriaRenderProps<AriaTabProps> {}

export const Tab: React.FC<TabProps> = (props) => {
  const { className, ...rest } = props;

  return <AriaTab className={cn(styles.tab, className)} {...rest} />;
};
