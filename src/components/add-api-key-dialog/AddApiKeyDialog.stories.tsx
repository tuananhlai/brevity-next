import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { AddApiKeyDialog } from "./AddApiKeyDialog";

const meta: Meta<typeof AddApiKeyDialog> = {
  component: AddApiKeyDialog,
  title: "AddApiKeyDialog",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof AddApiKeyDialog>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    return (
      <DialogTrigger>
        <Button>Open Dialog</Button>
        <AddApiKeyDialog />
      </DialogTrigger>
    );
  },
};
