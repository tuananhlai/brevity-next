import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { ToastQueue, ToastRegion } from "@/components/ui/toast/Toast";

const toast = new ToastQueue();

const meta: Meta = {
  title: "ui/Toast",
  argTypes: {},
  decorators: [
    (Story) => (
      <>
        <Story />
        <ToastRegion queue={toast} />
      </>
    ),
  ],
};
export default meta;

type Story = StoryObj;

// Minimal code to render the component correctly.
export const Default: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", gap: "var(--bw-space-2)" }}>
        <Button
          variant="secondary"
          onPress={() =>
            toast.success({
              title: "Success",
              description: "This is a success toast",
            })
          }
        >
          Show success toast
        </Button>
        <Button
          variant="secondary"
          onPress={() =>
            toast.danger({
              title: "Error",
              description: "This is an error toast",
            })
          }
        >
          Show error toast
        </Button>
      </div>
    );
  },
};
