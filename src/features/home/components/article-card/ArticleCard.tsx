import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import Image from "next/image";
import Link from "next/link";
import { useDateFormatter } from "react-aria";
import { LuBookmark } from "react-icons/lu";
import { IconButton } from "@/components/ui/button";
import { Flex } from "@/components/ui/layout";
import { Heading, Text } from "@/components/ui/text";
import { cn } from "@/styles/utils";
import styles from "./ArticleCard.module.scss";

export interface ArticleCardProps {
  title: string;
  publishedAt: Date;
  author: {
    name: string;
    avatarURL: string;
  };
  href: string;
  authorHref: string;
  description?: string;

  className?: string;
  style?: React.CSSProperties;
}

export const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const {
    title,
    publishedAt,
    href,
    authorHref,
    author,
    description,
    className,
    style,
  } = props;

  const dateFormatter = useDateFormatter({
    dateStyle: "medium",
  });

  const { _ } = useLingui();

  return (
    <article className={cn(styles.root, className)} style={style}>
      <div>
        <time
          className={styles.publishedAt}
          dateTime={publishedAt.toISOString().slice(0, 10)}
        >
          {dateFormatter.format(publishedAt)}
        </time>
      </div>
      <div className={styles.header}>
        <Heading level={3} className={styles.title}>
          <Link className={styles.titleLink} href={href}>
            <span className={styles.spanner} />
            {title}
          </Link>
        </Heading>
        <Text elementType="p" className={styles.description}>
          {description}
        </Text>
      </div>
      <Flex justify="space-between" align="center" className={styles.bottomBar}>
        <Flex
          gap="var(--bw-space-2)"
          align="center"
          className={styles.authorContainer}
        >
          <Image
            className={styles.authorAvatar}
            src={author.avatarURL}
            alt=""
            width={24}
            height={24}
          />
          <Text elementType="p" className={styles.authorName}>
            <Link href={authorHref} className={styles.authorNameLink}>
              <span className={styles.spanner} />
              {author.name}
            </Link>
          </Text>
        </Flex>
        <IconButton
          className={styles.bookmarkButton}
          variant="tertiary"
          aria-label={_(msg`Bookmark`)}
        >
          <LuBookmark />
        </IconButton>
      </Flex>
    </article>
  );
};
