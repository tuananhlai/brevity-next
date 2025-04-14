import { NextPage } from "next";
import { LuArrowRight } from "react-icons/lu";
import { StackedLayout } from "@/components/stacked-layout";
import { LinkButton } from "@/components/ui/button";
import { Heading } from "@/components/ui/text";
import { useGetArticlePreviews } from "@/features/home/api/getArticlePreviews";
import { BlogCard } from "@/features/home/components/blog-card";
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
                    avatarURL: getDefaultAvatarURL(v.authorID),
                  }}
                  authorHref={v.authorID}
                  description={v.description}
                  href={`/blog/${v.slug}`}
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

const getDefaultAvatarURL = (authorID: string): string => {
  return `https://api.dicebear.com/9.x/glass/jpg?seed=${authorID}`;
};
