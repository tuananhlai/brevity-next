import { UNSTABLE_ToastRegion as AriaToastRegion } from "react-aria-components";
import { Toast } from "./Toast";
import { ToastQueue } from "./ToastQueue";
import styles from "./Toast.module.scss";

export interface ToastRegionProps {
  queue: ToastQueue;
}

export const ToastRegion: React.FC<ToastRegionProps> = (props) => {
  const { queue } = props;

  return (
    <AriaToastRegion className={styles.toastRegion} queue={queue.ariaQueue}>
      {({ toast }) => <Toast toast={toast}>{toast.content}</Toast>}
    </AriaToastRegion>
  );
};
