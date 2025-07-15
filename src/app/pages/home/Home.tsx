import { Trans, msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { NextPage } from "next";
import Head from "next/head";
import { StackedLayout } from "@/components/stacked-layout";
import { Heading } from "@/components/ui/text";
import { useGetArticlePreviews } from "@/features/home/api/getArticlePreviews";
import { ArticleCard } from "@/features/home/components/article-card";
import { getPageTitle } from "@/utils/misc";
import styles from "./Home.module.scss";

export const Home: NextPage = () => {
  const { data = { items: [] } } = useGetArticlePreviews();
  const { _ } = useLingui();

  return (
    <>
      <Head>
        <title>{getPageTitle(_(msg`Home`))}</title>
      </Head>
      <StackedLayout className={styles.root}>
        <div className={styles.main}>
          <section className={styles.section}>
            <Heading level={2}>
              <Trans>Newest posts</Trans>
            </Heading>
            <div className={styles.blogs}>
              {data.items.map((v) => (
                <div key={v.id} className={styles.blogCard}>
                  <ArticleCard
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
    </>
  );
};

const getDefaultAvatarURL = (authorID: string): string => {
  return `https://api.dicebear.com/9.x/glass/jpg?seed=${authorID}`;
};
