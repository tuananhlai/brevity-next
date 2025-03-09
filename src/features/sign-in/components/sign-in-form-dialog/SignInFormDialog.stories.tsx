import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { SignInFormDialog } from "./SignInFormDialog";

const meta: Meta<typeof SignInFormDialog> = {
  component: SignInFormDialog,
  title: "features/sign-in/SignInFormDialog",
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
  parameters: {
    layout: "centered",
  },
  args: {
    children: <Button>Open Dialog</Button>,
  },
};
