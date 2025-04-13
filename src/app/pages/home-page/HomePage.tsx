import { NextPage } from "next";
import { LuArrowRight } from "react-icons/lu";
import { StackedLayout } from "@/components/stacked-layout";
import { LinkButton } from "@/components/ui/button";
import { Heading } from "@/components/ui/text";
import { useGetArticlePreviews } from "@/features/home/api/getArticlePreviews";
import { BlogCard, BlogCardProps } from "@/features/home/components/blog-card";
import styles from "./HomePage.module.scss";

export const HomePage: NextPage = () => {
  const { data = { items: [] } } = useGetArticlePreviews();

  return (
    <StackedLayout className={styles.root}>
      <div className={styles.main}>
        <section className={styles.section}>
          <Heading level={2}>Newest Posts</Heading>
          <div className={styles.blogs}>
            {data.items.map((v, index) => (
              <div key={index} className={styles.blogCard}>
                <BlogCard
                  author={{
                    name: v.authorDisplayName,
                    avatarURL: "",
                    position: "",
                  }}
                  authorHref={v.authorID}
                  description={v.description}
                  href={v.slug}
                  publishedAt={new Date(v.createdAt)}
                  title={v.title}
                />
              </div>
            ))}
          </div>
          <div className={styles.readMoreContainer}>
            <LinkButton variant="tertiary" href="/blog/newest">
              View all
              <LuArrowRight />
            </LinkButton>
          </div>
        </section>
      </div>
    </StackedLayout>
  );
};

const mockData: BlogCardProps[] = [
  {
    author: {
      avatarURL:
        "https://gravatar.com/avatar/515c8955d83d1a52b0e253576916b991?s=400&d=robohash&r=x",
      name: "Author Name",
      position: "Author Position",
    },
    authorHref: "/author",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi iure itaque reprehenderit tenetur reiciendis sint asperiores quos aperiam cupiditate? Natus voluptates exercitationem eius eveniet asperiores reiciendis delectus ipsum quos!",
    href: "/blog",
    publishedAt: new Date(2021, 1, 1),
    title: "Blog Title",
  },
  {
    author: {
      avatarURL:
        "https://gravatar.com/avatar/515c8955d83d1a52b0e253576916b991?s=400&d=robohash&r=x",
      name: "Author Name",
      position: "Author Position",
    },
    authorHref: "/author",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi iure itaque reprehenderit tenetur reiciendis sint asperiores quos aperiam cupiditate? Natus voluptates exercitationem eius eveniet asperiores reiciendis delectus ipsum quos!",
    href: "/blog",
    publishedAt: new Date(2021, 1, 30),
    title: "Blog Title",
  },
  {
    author: {
      avatarURL:
        "https://gravatar.com/avatar/515c8955d83d1a52b0e253576916b991?s=400&d=robohash&r=x",
      name: "Author Name",
      position: "Author Position",
    },
    authorHref: "/author",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi iure itaque reprehenderit tenetur reiciendis sint asperiores quos aperiam cupiditate? Natus voluptates exercitationem eius eveniet asperiores reiciendis delectus ipsum quos!",
    href: "/blog",
    publishedAt: new Date(2021, 1, 30),
    title: "Blog Title",
  },
  {
    author: {
      avatarURL:
        "https://gravatar.com/avatar/515c8955d83d1a52b0e253576916b991?s=400&d=robohash&r=x",
      name: "Author Name",
      position: "Author Position",
    },
    authorHref: "/author",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi iure itaque reprehenderit tenetur reiciendis sint asperiores quos aperiam cupiditate? Natus voluptates exercitationem eius eveniet asperiores reiciendis delectus ipsum quos!",
    href: "/blog",
    publishedAt: new Date(2021, 1, 30),
    title: "Blog Title",
  },
];
