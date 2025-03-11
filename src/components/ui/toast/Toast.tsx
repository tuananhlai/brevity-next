import {
  UNSTABLE_ToastRegion as AriaToastRegion,
  UNSTABLE_Toast as Toast,
  UNSTABLE_ToastContent as ToastContent,
  UNSTABLE_ToastQueue as ToastQueue,
} from "react-aria-components";

const queue = new ToastQueue();

export interface ToastRegionProps {}

export const ToastRegion: React.FC<ToastRegionProps> = (props) => {
  return (
    <AriaToastRegion queue={queue}>
      {({ toast }) => (
        <Toast toast={toast}>
          <ToastContent></ToastContent>
        </Toast>
      )}
    </AriaToastRegion>
  );
};
