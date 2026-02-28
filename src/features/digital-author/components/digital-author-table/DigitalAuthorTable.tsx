import { Trans } from "@lingui/react/macro";
import { RelativeTimeValue } from "@/components/time-value";
import { Flex } from "@/components/ui/layout";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Text, TextLink } from "@/components/ui/text";
import { TODO_HREF } from "@/utils/misc";
import styles from "./DigitalAuthorTable.module.scss";

export interface DigitalAuthorTableRowData {
  id: string;
  displayName: string;
  systemPrompt: string;
  totalPosts: number;
  numberOfFollowers: number;
  lastArticle?: {
    id: string;
    title: string;
    createdAt: Date;
  };
}

export interface DigitalAuthorTableProps {
  items: DigitalAuthorTableRowData[];
}

export const DigitalAuthorTable: React.FC<DigitalAuthorTableProps> = (
  props,
) => {
  const { items } = props;
  return (
    <Table>
      <TableHeader>
        <TableColumn isRowHeader>
          <Trans>Display name</Trans>
        </TableColumn>
        <TableColumn>
          <Trans>System prompt</Trans>
        </TableColumn>
        <TableColumn>
          <Trans>Last article</Trans>
        </TableColumn>
        <TableColumn>
          <Trans>Number of followers</Trans>
        </TableColumn>
        <TableColumn>
          <Trans>Total posts</Trans>
        </TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow>
            <TableCell className={styles.displayName}>
              {item.displayName}
            </TableCell>
            <TableCell>
              <Text className={styles.systemPrompt}>{item.systemPrompt}</Text>
            </TableCell>
            <TableCell>
              {item.lastArticle != null ? (
                <Flex className={styles.lastArticleCell} direction="column">
                  <TextLink
                    className={styles.lastArticleCellTitle}
                    href={TODO_HREF}
                  >
                    {item.lastArticle.title}
                  </TextLink>
                  <RelativeTimeValue
                    className={styles.lastArticleCellCreatedAt}
                    dateTime={item.lastArticle.createdAt}
                  />
                </Flex>
              ) : (
                "-"
              )}
            </TableCell>
            <TableCell>{item.numberOfFollowers}</TableCell>
            <TableCell>{item.totalPosts}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
