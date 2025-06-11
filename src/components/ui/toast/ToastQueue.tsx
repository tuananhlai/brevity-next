import {
  UNSTABLE_ToastQueue as AriaToastQueue,
  ToastOptions,
} from "react-aria-components";
import { ErrorToastLayout, SuccessToastLayout } from "./Toast";

export interface ToastParams {
  title: string;
  description?: string;
}

export class ToastQueue {
  ariaQueue: AriaToastQueue<React.ReactNode>;

  constructor(opts?: { maxVisibleToasts?: number }) {
    this.ariaQueue = new AriaToastQueue<React.ReactNode>(opts);
  }

  /** Display a toast to notify the user that an action has been completed successfully. */
  success(params: ToastParams, options?: ToastOptions) {
    const { title, description } = params;

    this.ariaQueue.add(
      <SuccessToastLayout title={title} description={description} />,
      options,
    );
  }

  /** Display a toast to let the user know that an error has occurred. */
  error(params: ToastParams, options?: ToastOptions) {
    const { title, description } = params;

    this.ariaQueue.add(
      <ErrorToastLayout title={title} description={description} />,
      options,
    );
  }
}
