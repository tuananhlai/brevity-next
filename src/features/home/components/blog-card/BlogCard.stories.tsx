import { Meta, StoryObj } from "@storybook/react";

import { BlogCard } from "./BlogCard";

const meta: Meta<typeof BlogCard> = {
  component: BlogCard,
  title: "features/home/BlogCard",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof BlogCard>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    author: {
      avatarURL: "https://example.com/avatar.png",
      name: "Author Name",
      position: "Author Position",
    },
    authorHref: "/author",
    categories: ["Category 1", "Category 2"],
    description: "Description",
    href: "/blog",
    publishedAt: new Date(2021, 1, 1),
    title: "Blog Title",
  },
};
