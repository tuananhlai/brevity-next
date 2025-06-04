import { Meta, StoryObj } from "@storybook/react";
import { DigitalAuthorTable } from "./DigitalAuthorTable";

const meta: Meta<typeof DigitalAuthorTable> = {
  component: DigitalAuthorTable,
  title: "features/digital-author/DigitalAuthorTable",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DigitalAuthorTable>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    // Add arguments.
  },
};
