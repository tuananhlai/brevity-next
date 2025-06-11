import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { Flex } from "@/components/ui/layout";
import { ErrorToastLayout, SuccessToastLayout, Toast } from "./Toast";
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
            toast.error({
              title: "Error",
              description: "This is an error toast",
            })
          }
        >
          Show error toast
        </Button>
        <Button
          variant="secondary"
          onPress={() =>
            toast.success({
              title:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            })
          }
        >
          Show incredibly long success toast
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
      <Flex
        align="start"
        direction="column"
        gap="var(--bw-space-2)"
        style={{ maxWidth: "var(--bw-space-80)" }}
      >
        <Toast
          toast={{
            key: "test",
            content: null,
          }}
        >
          <SuccessToastLayout
            title="Success"
            description="This is a success toast."
          />
        </Toast>

        <Toast
          toast={{
            key: "test1",
            content: null,
          }}
        >
          <SuccessToastLayout title="New account created" />
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
          <ErrorToastLayout
            title="Error"
            description="This is an error toast."
          />
        </Toast>

        <Toast
          toast={{
            key: "test3",
            content: null,
          }}
        >
          <ErrorToastLayout title="Something went wrong" />
        </Toast>

        <Toast
          toast={{
            key: "test1",
            content: null,
          }}
        >
          <ErrorToastLayout title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." />
        </Toast>
      </Flex>
    );
  },
};
