import { Trans } from "@lingui/macro";
import { RelativeTimeValue } from "@/components/time-value/TimeValue";
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
          <Trans>Number of followers</Trans>
        </TableColumn>
        <TableColumn>
          <Trans>Total posts</Trans>
        </TableColumn>
        <TableColumn>
          <Trans>Last article</Trans>
        </TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow>
            <TableCell style={{ fontWeight: "var(--bw-weight-medium)" }}>
              {item.displayName}
            </TableCell>
            <TableCell>{item.systemPrompt}</TableCell>
            <TableCell>{item.numberOfFollowers}</TableCell>
            <TableCell>{item.totalPosts}</TableCell>
            <TableCell>
              {item.lastArticle != null ? (
                <>
                  <TextLink href={TODO_HREF}>{item.lastArticle.title}</TextLink>
                  <RelativeTimeValue dateTime={item.lastArticle.createdAt} />
                </>
              ) : (
                "-"
              )}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
