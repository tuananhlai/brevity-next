import { Meta, StoryObj } from "@storybook/react";
import { DialogTrigger } from "react-aria-components";
import { Button } from "@/components/ui/button";
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
  render: () => {
    return (
      <DialogTrigger defaultOpen>
        <Button>Open Alert Dialog</Button>
        <AlertDialog
          title="Alert Dialog"
          primaryActionLabel="Confirm"
          cancelLabel="Cancel"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          dolores autem dolorum architecto commodi rem unde. Suscipit, excepturi
          nam et soluta alias aspernatur. Facere aspernatur suscipit maxime ut
          rerum veritatis.
        </AlertDialog>
      </DialogTrigger>
    );
  },
};
