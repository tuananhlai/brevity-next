import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
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
  render: () => {
    return (
      <DialogTrigger defaultOpen>
        <Button>Open Dialog</Button>
        <SignUpFormDialog />
      </DialogTrigger>
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
      <DialogTrigger defaultOpen>
        <Button>Open Dialog</Button>
        <SignUpFormDialog />
      </DialogTrigger>
    );
  },
};
