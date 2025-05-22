import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog } from "./AlertDialog";

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
  title: "ui/AlertDialog",
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
        title="Are you sure you want to refund this payment?"
        onPrimaryAction={(close) => close()}
        onCancel={(close) => close()}
      >
        The refund will be reflected in the customer’s bank account 2 to 3
        business days after processing.
      </AlertDialog>
    </DialogTrigger>
  ),
};
