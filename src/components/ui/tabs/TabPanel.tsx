import {
  TabPanel as AriaTabPanel,
  TabPanelProps as AriaTabPanelProps,
} from "react-aria-components";
import { ReplaceAriaRenderProps } from "@/utils/misc";

export interface TabPanelProps
  extends ReplaceAriaRenderProps<AriaTabPanelProps> {}

export const TabPanel: React.FC<TabPanelProps> = (props) => {
  return <AriaTabPanel {...props} />;
};
