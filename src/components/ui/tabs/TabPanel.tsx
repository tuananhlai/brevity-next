import {
  TabPanel as AriaTabPanel,
  type TabPanelProps as AriaTabPanelProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import type { ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./Tabs.module.scss";

export interface TabPanelProps extends ReplaceAriaRenderProps<AriaTabPanelProps> {}

export const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { className, ...rest } = props;
  return <AriaTabPanel className={cn(styles.tabPanel, className)} {...rest} />;
};
