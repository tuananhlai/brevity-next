import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { Flex } from "@/components/ui/layout";
import { DangerToastLayout, SuccessToastLayout, Toast } from "./Toast";
import { ToastQueue } from "./ToastQueue";
import { ToastRegion } from "./ToastRegion";

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

export const VisualTest: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
  render: () => {
    return (
      <Flex direction="column" gap="var(--bw-space-2)">
        <Toast
          toast={{
            key: "test",
            content: null,
          }}
        >
          <SuccessToastLayout
            title="Success"
            description="This is a success toast"
          />
        </Toast>

        <Toast
          toast={{
            key: "test1",
            content: null,
          }}
        >
          <SuccessToastLayout title="Created new account successfully" />
        </Toast>

        <Toast
          toast={{
            key: "test1",
            content: null,
          }}
        >
          <SuccessToastLayout title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." />
        </Toast>

        <Toast
          toast={{
            key: "test2",
            content: null,
          }}
        >
          <DangerToastLayout
            title="Error"
            description="This is an error toast"
          />
        </Toast>

        <Toast
          toast={{
            key: "test3",
            content: null,
          }}
        >
          <DangerToastLayout title="Something went wrong" />
        </Toast>

        <Toast
          toast={{
            key: "test1",
            content: null,
          }}
        >
          <DangerToastLayout title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." />
        </Toast>
      </Flex>
    );
  },
};
