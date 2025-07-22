import {
  UNSTABLE_ToastQueue as AriaToastQueue,
  ToastOptions,
} from "react-aria-components";
import { ErrorToastLayout, SuccessToastLayout } from "./Toast";

export interface ToastParams {
  title: string;
  description?: string;
}

export const DEFAULT_TOAST_TIMEOUT_MS = 5000;

export class ToastQueue {
  ariaQueue: AriaToastQueue<React.ReactNode>;

  constructor(opts?: { maxVisibleToasts?: number }) {
    this.ariaQueue = new AriaToastQueue<React.ReactNode>(opts);
  }

  /**
   * Display a toast to notify the user that an action has been completed
   * successfully.
   *
   * @returns The key of the newly created toast. Can be closed programmatically
   * by calling `close(key)`.
   */
  success(params: ToastParams, options?: ToastOptions): string {
    const { title, description } = params;

    return this.ariaQueue.add(
      <SuccessToastLayout title={title} description={description} />,
      this.getOptions(options),
    );
  }

  /**
   * Display a toast to let the user know that an error has occurred.
   *
   * @returns The key of the newly created toast. Can be closed programmatically
   * by calling `close(key)`.
   */
  error(params: ToastParams, options?: ToastOptions): string {
    const { title, description } = params;

    return this.ariaQueue.add(
      <ErrorToastLayout title={title} description={description} />,
      this.getOptions(options),
    );
  }

  /** Close the toast with the given key. */
  close(key: string): void {
    this.ariaQueue.close(key);
  }

  private getOptions(options?: ToastOptions): ToastOptions {
    return {
      timeout: DEFAULT_TOAST_TIMEOUT_MS,
      ...options,
    };
  }
}
