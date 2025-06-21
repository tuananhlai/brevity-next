import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabListProps as AriaTabListProps,
  TabPanel as AriaTabPanel,
  TabPanelProps as AriaTabPanelProps,
  TabProps as AriaTabProps,
  Tabs as AriaTabs,
  TabsProps as AriaTabsProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import { ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./Tabs.module.scss";

export interface TabsProps extends ReplaceAriaRenderProps<AriaTabsProps> {}

export const Tabs: React.FC<TabsProps> = (props) => {
  const { className, ...rest } = props;
  return <AriaTabs className={cn(styles.tabs, className)} {...rest} />;
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

export interface TabPanelProps
  extends ReplaceAriaRenderProps<AriaTabPanelProps> {}

export const TabPanel: React.FC<TabPanelProps> = (props) => {
  return <AriaTabPanel {...props} />;
};
