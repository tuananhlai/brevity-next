import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog } from "./AlertDialog";

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
  title: "AlertDialog",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof AlertDialog>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => (
    <DialogTrigger>
      <Button>Open Dialog</Button>
      <AlertDialog
        title="Alert Dialog"
        onPrimaryAction={(close) => close()}
        onSecondaryAction={(close) => close()}
      >
        This is an alert dialog
      </AlertDialog>
    </DialogTrigger>
  ),
};
