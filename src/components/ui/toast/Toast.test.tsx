import { expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { ToastQueue } from "./ToastQueue";
import { ToastRegion } from "./ToastRegion";

it("toast region should have the correct aria role", async () => {
  const toastQueue = new ToastQueue();
  const screen = await render(<ToastRegion queue={toastQueue} />);

  // A toast region can only be rendered after a toast is added to the queue.
  toastQueue.success({ title: "Test Toast" });

  await expect.poll(() => screen.getByRole("region")).toBeInTheDocument();
});
