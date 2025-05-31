import { Meta, StoryObj } from "@storybook/react";
import { ManageAPIKeyTable } from "./ManageAPIKeyTable";

const meta: Meta<typeof ManageAPIKeyTable> = {
  component: ManageAPIKeyTable,
  title: "ManageAPIKeyTable",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ManageAPIKeyTable>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    items: [
      {
        id: "1",
        name: "API Key 1",
        apiKeyPrefix: "1234567890",
        createdAt: new Date(),
      },
      {
        id: "2",
        name: "API Key 2",
        apiKeyPrefix: "1234567890",
        createdAt: new Date(),
        lastUsed: new Date(),
      },
    ],
  },
};
