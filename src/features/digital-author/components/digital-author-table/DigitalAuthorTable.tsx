import { Trans } from "@lingui/macro";
import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
} from "@/components/ui/table";
import styles from "./DigitalAuthorTable.module.scss";

export interface DigitalAuthorTableRowData {
  id: string;
  displayName: string;
}

export interface DigitalAuthorTableProps {
  // Add component props.
}

export const DigitalAuthorTable: React.FC<DigitalAuthorTableProps> = (
  props,
) => {
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
          <Trans>Total posts</Trans>
        </TableColumn>
        <TableColumn>
          <Trans>Number of followers</Trans>
        </TableColumn>
        <TableColumn>
          <Trans>Last article</Trans>
        </TableColumn>
        <TableColumn>
          <Trans>Status</Trans>
        </TableColumn>
      </TableHeader>
      <TableBody></TableBody>
    </Table>
  );
};
