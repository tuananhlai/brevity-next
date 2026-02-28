import type { ComponentProps } from "react";
import { DialogTrigger } from "react-aria-components";
import { Dialog, DialogActions, DialogBody, DialogTitle } from "./Dialog";

export { Dialog, DialogActions, DialogBody, DialogTitle, DialogTrigger };
export type { DialogProps, DialogSize } from "./Dialog";
export type DialogTriggerProps = ComponentProps<typeof DialogTrigger>;
