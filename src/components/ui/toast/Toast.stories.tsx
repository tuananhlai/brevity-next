import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { toast } from "./Toast";

const meta: Meta = {
  title: "ui/Toast",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

// Minimal code to render the component correctly.
export const Default: Story = {
  render: () => {
    return (
      <Button
        onPress={() =>
          toast.success({
            title: "Success",
            description: "This is a success toast",
          })
        }
      >
        Show toast
      </Button>
    );
  },
};
