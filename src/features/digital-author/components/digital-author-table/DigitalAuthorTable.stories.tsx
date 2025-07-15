import { Meta, StoryObj } from "@storybook/nextjs";
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
    items: [
      {
        id: "1",
        displayName: "John Doe",
        systemPrompt: "You are a helpful assistant.",
        totalPosts: 10,
        numberOfFollowers: 100,
        lastArticle: {
          id: "1",
          title: "Article 1",
          createdAt: new Date("2025-01-01"),
        },
      },
      {
        id: "2",
        displayName: "Jane Doe",
        systemPrompt:
          "You are a helpful assistant. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        totalPosts: 20,
        numberOfFollowers: 200,
      },
      {
        id: "3",
        displayName: "John Doe with a very long name",
        systemPrompt: "You are a helpful assistant.",
        totalPosts: 10,
        numberOfFollowers: 100,
        lastArticle: {
          id: "3",
          title:
            "My article title that is very very very very very long and will be truncated",
          createdAt: new Date(Date.now() - 1000 * 60 * 30),
        },
      },
    ],
  },
};
