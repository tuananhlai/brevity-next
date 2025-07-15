import { Meta, StoryObj } from "@storybook/nextjs";
import { SignUpForm } from "./SignUpForm";

const meta: Meta<typeof SignUpForm> = {
  component: SignUpForm,
  title: "features/auth/SignUpForm",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SignUpForm>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    // Add arguments.
  },
};
