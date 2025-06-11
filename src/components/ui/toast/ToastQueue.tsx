import {
  UNSTABLE_ToastQueue as AriaToastQueue,
  ToastOptions,
} from "react-aria-components";
import { DangerToastLayout, SuccessToastLayout } from "./Toast";

export interface ToastParams {
  title: string;
  description?: string;
}

export class ToastQueue {
  ariaQueue: AriaToastQueue<React.ReactNode>;

  constructor(opts?: { maxVisibleToasts?: number }) {
    this.ariaQueue = new AriaToastQueue<React.ReactNode>(opts);
  }

  success(params: ToastParams, options?: ToastOptions) {
    const { title, description } = params;

    this.ariaQueue.add(
      <SuccessToastLayout title={title} description={description} />,
      options,
    );
  }

  danger(params: ToastParams, options?: ToastOptions) {
    const { title, description } = params;

    this.ariaQueue.add(
      <DangerToastLayout title={title} description={description} />,
      options,
    );
  }
}
