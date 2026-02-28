import { type Meta, type StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "ui/Text",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Text>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Hello, world!",
  },
};
