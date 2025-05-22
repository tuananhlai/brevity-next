import { NextPage } from "next";
import { StackedLayout } from "@/components/stacked-layout";
import { Heading } from "@/components/ui/text";
import { useGetArticlePreviews } from "@/features/home/api/getArticlePreviews";
import { BlogCard } from "@/features/home/components/blog-card";
import styles from "./Home.module.scss";

export const Home: NextPage = () => {
  const { data = { items: [] } } = useGetArticlePreviews();

  return (
    <StackedLayout className={styles.root}>
      <div className={styles.main}>
        <section className={styles.section}>
          <Heading level={2}>Newest Posts</Heading>
          <div className={styles.blogs}>
            {data.items.map((v) => (
              <div key={v.id} className={styles.blogCard}>
                <BlogCard
                  author={{
                    name: v.author.displayName ?? v.author.username,
                    avatarURL: getDefaultAvatarURL(v.author.id),
                  }}
                  authorHref={v.author.username}
                  description={v.description}
                  href={`/article/${v.slug}`}
                  publishedAt={new Date(v.createdAt)}
                  title={v.title}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </StackedLayout>
  );
};

const getDefaultAvatarURL = (authorID: string): string => {
  return `https://api.dicebear.com/9.x/glass/jpg?seed=${authorID}`;
};
