import {
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
