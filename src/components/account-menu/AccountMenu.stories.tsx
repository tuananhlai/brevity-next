import { type Meta, type StoryObj } from "@storybook/react-vite";
import { AccountMenuTrigger } from "./AccountMenu";

const meta: Meta<typeof AccountMenuTrigger> = {
  component: AccountMenuTrigger,
  title: "AccountMenu",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof AccountMenuTrigger>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    displayName: "John Doe",
    avatarURL: "https://github.com/shadcn.png",
  },
};
