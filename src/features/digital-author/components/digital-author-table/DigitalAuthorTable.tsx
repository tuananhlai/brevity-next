import { Trans } from "@lingui/react/macro";
import { RelativeTimeValue } from "@/components/time-value";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Text } from "@/components/ui/text";
import styles from "./DigitalAuthorTable.module.scss";

export interface DigitalAuthorTableRowData {
  id: string;
  displayName: string;
  systemPrompt: string;
  createdAt: Date;
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
          <Trans>Created at</Trans>
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
              <RelativeTimeValue dateTime={item.createdAt} />
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
