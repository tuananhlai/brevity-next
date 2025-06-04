import { Trans, msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { useConfirm } from "@/components/confirm-provider";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import styles from "./ManageAPIKeyTable.module.scss";

export interface ManageAPIKeyTableRowData {
  id: string;
  name: string;
  apiKeyPrefix: string;
  apiKeySuffix: string;
  createdAt: Date;
  lastUsed?: Date;
}

export interface ManageAPIKeyTableProps {
  items: ManageAPIKeyTableRowData[];
}

export const ManageAPIKeyTable: React.FC<ManageAPIKeyTableProps> = (props) => {
  const { items } = props;
  const { _, i18n } = useLingui();
  const confirm = useConfirm();

  const dateFormatter = (date: Date) => {
    return i18n.date(date, { dateStyle: "medium" });
  };

  return (
    <Table>
      <TableHeader>
        <TableColumn isRowHeader>
          <Trans>Name</Trans>
        </TableColumn>
        <TableColumn>
          <Trans context="table column containing API key string">Value</Trans>
        </TableColumn>
        <TableColumn>
          <Trans>Created At</Trans>
        </TableColumn>
        <TableColumn>
          <Trans>Last Used</Trans>
        </TableColumn>
        <TableColumn textValue={_(msg`Actions`)} />
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell style={{ fontWeight: "var(--bw-weight-medium)" }}>
              {item.name}
            </TableCell>
            <TableCell>
              <APIKeyCell
                apiKeyPrefix={item.apiKeyPrefix}
                apiKeySuffix={item.apiKeySuffix}
              />
            </TableCell>
            <TableCell>
              <time dateTime={item.createdAt.toISOString()}>
                {dateFormatter(item.createdAt)}
              </time>
            </TableCell>
            <TableCell>
              {item.lastUsed != null ? (
                <time dateTime={item.lastUsed.toISOString()}>
                  {dateFormatter(item.lastUsed)}
                </time>
              ) : (
                "-"
              )}
            </TableCell>
            <TableCell>
              <Button
                color="error"
                variant="tertiary"
                onPress={async () => {
                  const ok = await confirm({
                    variant: "error",
                    title: (
                      <Trans>
                        Are you sure you want to deactivate this API key?
                      </Trans>
                    ),
                    content: (
                      <Trans>
                        You will no longer be able to create new digital authors
                        using this API key after deactivation. Existing digital
                        authors using this API key will continue to work.
                      </Trans>
                    ),
                  });
                  if (ok) {
                    console.log("deactivate");
                  }
                }}
              >
                <Trans>Deactivate</Trans>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const APIKeyCell: React.FC<{
  apiKeyPrefix: string;
  apiKeySuffix: string;
}> = (props) => {
  const { apiKeyPrefix, apiKeySuffix } = props;

  return (
    <span className={styles.apiKey}>
      {apiKeyPrefix}
      ...
      {apiKeySuffix}
    </span>
  );
};
