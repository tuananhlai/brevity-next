import Image from "next/image";
import Link from "next/link";
import { useDateFormatter } from "react-aria";
import { Heading, Text } from "@/components/ui/text";
import { cn } from "@/styles/utils";
import styles from "./BlogCard.module.scss";

export interface BlogCardProps {
  title: string;
  publishedAt: Date;
  author: {
    name: string;
    avatarURL: string;
    position: string;
  };
  href: string;
  authorHref: string;
  description?: string;

  className?: string;
  style?: React.CSSProperties;
}

export const BlogCard: React.FC<BlogCardProps> = (props) => {
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
      <div className={styles.authorContainer}>
        <Image
          className={styles.authorAvatar}
          src={author.avatarURL}
          alt=""
          width={40}
          height={40}
        />
        <div>
          <Text elementType="p" className={styles.authorName}>
            <Link href={authorHref} className={styles.authorNameLink}>
              <span className={styles.spanner} />
              {author.name}
            </Link>
          </Text>
          <Text elementType="p" className={styles.authorPosition}>
            {author.position}
          </Text>
        </div>
      </div>
    </article>
  );
};
