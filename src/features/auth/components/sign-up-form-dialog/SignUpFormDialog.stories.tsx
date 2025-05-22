import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { SignUpFormDialog } from "./SignUpFormDialog";

const meta: Meta<typeof SignUpFormDialog> = {
  component: SignUpFormDialog,
  title: "features/auth/SignUpFormDialog",
  argTypes: {},
  decorators: [
    (story) => (
      <div style={{ width: "1200px", height: "800px" }}>{story()}</div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof SignUpFormDialog>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    defaultOpen: true,
    children: <Button>Open Dialog</Button>,
  },
};

export const VisualTest: Story = {
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
  args: {
    defaultOpen: true,
    children: <Button>Open Dialog</Button>,
  },
};
