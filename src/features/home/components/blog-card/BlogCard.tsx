import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { DateFormatter, useDateFormatter, useLocale } from "react-aria";

import { Heading, Text } from "@/components/ui/text";
import {
  borderRadiuses,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  spacings,
} from "@/styles/tokens";
import { darkModeSelector } from "@/styles/utils";

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

  const dateFormatter = useDateFormatter({
    dateStyle: "medium",
  });

  return (
    <article css={root}>
      <div>
        <time
          css={publishedAtStyles}
          dateTime={publishedAt.toISOString().slice(0, 10)}
        >
          {dateFormatter.format(publishedAt)}
        </time>
      </div>
      <div className="header" css={header}>
        <Heading level={3} css={titleStyles}>
          <Link css={titleLink} href={href}>
            <span css={spanner} />
            {title}
          </Link>
        </Heading>
        <Text elementType="p" css={descriptionStyles}>
          {description}
        </Text>
      </div>
      <div css={authorContainer}>
        <Image
          css={authorAvatar}
          src={author.avatarURL}
          alt=""
          width={40}
          height={40}
        />
        <div>
          <Text elementType="p" css={authorName}>
            <Link href={authorHref} css={authorNameLink}>
              <span css={spanner} />
              {author.name}
            </Link>
          </Text>
          <Text elementType="p" css={authorPosition}>
            {author.position}
          </Text>
        </div>
      </div>
    </article>
  );
};

const root = css`
  --title-color: ${colors["zinc-900"]};
  --hover-title-color: ${colors["zinc-600"]};
  --description-color: ${colors["zinc-600"]};
  --author-name-color: ${colors["zinc-900"]};
  --author-position-color: ${colors["zinc-600"]};

  ${darkModeSelector} {
    --title-color: ${colors["zinc-300"]};
    --hover-title-color: ${colors["zinc-400"]};
    --description-color: ${colors["zinc-400"]};
    --author-name-color: ${colors["zinc-300"]};
    --author-position-color: ${colors["zinc-500"]};
  }
`;

const publishedAtStyles = css`
  font-size: ${fontSizes.sm};
  color: ${colors["zinc-500"]};
`;

const header = css`
  position: relative;
  margin-top: ${spacings[3]};

  &:hover > h3 {
    color: var(--hover-title-color);
  }
`;

const titleStyles = css`
  font-size: ${fontSizes.lg};
  color: var(--title-color);
`;

const titleLink = css`
  color: inherit;
  text-decoration: none;
`;

const descriptionStyles = css`
  margin-top: ${spacings[5]};
  font-size: ${fontSizes.sm};
  line-height: ${lineHeights[6]};
  color: var(--description-color);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const authorContainer = css`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${spacings[4]};
  margin-top: ${spacings[8]};
`;

const authorAvatar = css`
  border-radius: ${borderRadiuses.full};
  background-color: ${colors["zinc-50"]};
`;

const authorName = css`
  font-size: ${fontSizes.sm};
  color: var(--author-name-color);
  font-weight: ${fontWeights.semibold};
`;

const authorNameLink = css`
  color: inherit;
  text-decoration: none;
`;

const authorPosition = css`
  color: var(--author-position-color);
  font-size: ${fontSizes.sm};
`;

const spanner = css`
  position: absolute;
  inset: 0;
`;
