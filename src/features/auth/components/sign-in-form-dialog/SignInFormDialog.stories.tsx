import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { SignInFormDialog } from "./SignInFormDialog";

const meta: Meta<typeof SignInFormDialog> = {
  component: SignInFormDialog,
  title: "features/auth/SignInFormDialog",
  argTypes: {},
  decorators: [
    (story) => (
      <div style={{ width: "1200px", height: "800px" }}>{story()}</div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof SignInFormDialog>;

// Minimal code to render the component correctly.
export const Default: Story = {
  render: () => {
    return (
      <DialogTrigger defaultOpen>
        <Button>Open Dialog</Button>
        <SignInFormDialog onCreateNewAccount={() => {}} />
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
        <SignInFormDialog onCreateNewAccount={() => {}} />
      </DialogTrigger>
    );
  },
};
