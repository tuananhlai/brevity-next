import { Meta, StoryObj } from "@storybook/react";
import { SignInForm } from "./SignInForm";

const meta: Meta<typeof SignInForm> = {
  component: SignInForm,
  title: "features/sign-in/SignInForm",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SignInForm>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => (
    <div style={{ width: 300 }}>
      <SignInForm />
    </div>
  ),
};
