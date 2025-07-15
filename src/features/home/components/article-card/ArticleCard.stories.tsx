import { Meta, StoryObj } from "@storybook/nextjs";
import { ArticleCard } from "./ArticleCard";

const meta: Meta<typeof ArticleCard> = {
  component: ArticleCard,
  title: "features/home/ArticleCard",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ArticleCard>;

// Minimal code to render the component correctly.
export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    author: {
      avatarURL:
        "https://gravatar.com/avatar/515c8955d83d1a52b0e253576916b991?s=400&d=robohash&r=x",
      name: "Author Name",
    },
    authorHref: "/author",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi iure itaque reprehenderit tenetur reiciendis sint asperiores quos aperiam cupiditate? Natus voluptates exercitationem eius eveniet asperiores reiciendis delectus ipsum quos!",
    href: "/article",
    publishedAt: new Date(2021, 1, 1),
    title: "Article Title",
  },
};
