import Image from "next/image";
import Link from "next/link";

import { spacings } from "@/styles/tokens";

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
  /** @default [] */
  categories?: string[];
}

export const BlogCard: React.FC<BlogCardProps> = (props) => {
  const {
    title,
    publishedAt,
    href,
    authorHref,
    author,
    description,
    categories = [],
  } = props;

  return (
    <article>
      <div>
        <h3>
          <Link href={href}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
      <div>
        <Image src={author.avatarURL} alt="" width={32} height={32} />
        <div>
          <p>
            <Link href={authorHref}>{author.name}</Link>
          </p>
          <p>{author.position}</p>
        </div>
      </div>
    </article>
  );
};
