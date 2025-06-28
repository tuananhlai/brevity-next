import { Meta, StoryObj } from "@storybook/nextjs";
import { ManageAPIKeyTable } from "./ManageAPIKeyTable";

const meta: Meta<typeof ManageAPIKeyTable> = {
  component: ManageAPIKeyTable,
  title: "features/digital-author/ManageAPIKeyTable",
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
        apiKeyPrefix: "sk-or-v1-56715",
        apiKeySuffix: "a88d",
        createdAt: new Date(),
      },
      {
        id: "2",
        name: "API Key 2",
        apiKeyPrefix: "sk-or-v1-56715",
        apiKeySuffix: "a88d",
        createdAt: new Date(),
        lastUsed: new Date(),
      },
    ],
  },
};
