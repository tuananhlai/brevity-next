import { ToastOptions } from "react-aria-components";
import { UNSTABLE_ToastQueue as AriaToastQueue } from "react-aria-components";
import { LuCircleCheckBig, LuTriangleAlert } from "react-icons/lu";
import { DefaultToastLayout } from "@/components/ui/toast/Toast";

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
      <DefaultToastLayout
        variant="success"
        title={title}
        description={description}
        icon={<LuCircleCheckBig />}
      />,
      options,
    );
  }

  danger(params: ToastParams, options?: ToastOptions) {
    const { title, description } = params;

    this.ariaQueue.add(
      <DefaultToastLayout
        variant="danger"
        title={title}
        description={description}
        icon={<LuTriangleAlert />}
      />,
      options,
    );
  }
}
