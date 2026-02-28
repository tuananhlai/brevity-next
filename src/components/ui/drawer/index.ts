import type { ComponentProps } from "react";
import { DialogTrigger } from "react-aria-components";
import { Drawer, DrawerTitle } from "./Drawer";

export { Drawer, DrawerTitle, DialogTrigger as DrawerTrigger };
export type { DrawerPosition, DrawerProps, DrawerSize } from "./Drawer";
export type DrawerTriggerProps = ComponentProps<typeof DialogTrigger>;
