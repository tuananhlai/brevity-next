import { Meta, StoryObj } from "@storybook/react";
import { LuCircleCheckBig, LuTriangleAlert } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Flex } from "@/components/ui/layout";
import { DefaultToastLayout, Toast } from "./Toast";
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
  render: () => {
    return (
      <Flex direction="column" gap="var(--bw-space-2)">
        <Toast
          toast={{
            key: "test",
            content: <div>Test</div>,
          }}
        >
          <DefaultToastLayout
            variant="success"
            title="Success"
            description="This is a success toast"
            icon={<LuCircleCheckBig />}
          />
        </Toast>

        <Toast
          toast={{
            key: "test2",
            content: <div>Test</div>,
          }}
        >
          <DefaultToastLayout
            variant="danger"
            title="Error"
            description="This is an error toast"
            icon={<LuTriangleAlert />}
          />
        </Toast>
      </Flex>
    );
  },
};
