import type { ComponentProps } from "react";
import { TooltipTrigger } from "react-aria-components";
import { Tooltip, type TooltipProps } from "./Tooltip";

export { Tooltip, TooltipTrigger };
export type { TooltipProps };
export type TooltipTriggerProps = ComponentProps<typeof TooltipTrigger>;
