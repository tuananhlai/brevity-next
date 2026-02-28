import {
  Tab as AriaTab,
  type TabProps as AriaTabProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import type { ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./Tabs.module.scss";

export interface TabProps extends ReplaceAriaRenderProps<AriaTabProps> {}

export const Tab: React.FC<TabProps> = (props) => {
  const { className, ...rest } = props;

  return <AriaTab className={cn(styles.tab, className)} {...rest} />;
};
