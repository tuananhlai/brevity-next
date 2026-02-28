import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
import { Trans } from "@lingui/react/macro";
import { LuRefreshCcw } from "react-icons/lu";
import { useConfirm } from "@/components/confirm-provider";
import { Button } from "@/components/ui/button";
import { Flex } from "@/components/ui/layout";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Text } from "@/components/ui/text";
import styles from "./ManageAPIKeyTable.module.scss";

export interface ManageAPIKeyTableRowData {
  id: string;
  name: string;
  apiKeyPrefix: string;
  apiKeySuffix: string;
  createdAt: Date;
  lastUsed?: Date;
}

// TODO: add a loading state.
export interface ManageAPIKeyTableProps {
  items: ManageAPIKeyTableRowData[];
  className?: string;
  // TODO: reconsider the field name.
  errorState?: "unknown";
  /** Invoked when the user presses the retry request button. */
  onRetry?: () => void;
}

export const ManageAPIKeyTable: React.FC<ManageAPIKeyTableProps> = (props) => {
  const { items, className, errorState, onRetry } = props;
  const { _, i18n } = useLingui();
  const confirm = useConfirm();

  const dateFormatter = (date: Date) => {
    return i18n.date(date, { dateStyle: "medium" });
  };

  return (
    <Table aria-label={_(msg`API keys`)} className={className}>
      <TableHeader>
        <TableColumn isRowHeader>{_(msg`Name`)}</TableColumn>
        <TableColumn>
          <Trans context="table column containing API key string">Value</Trans>
        </TableColumn>
        <TableColumn>{_(msg`Created at`)}</TableColumn>
        <TableColumn>{_(msg`Last used`)}</TableColumn>
        <TableColumn textValue={_(msg`Actions`)} />
      </TableHeader>
      <TableBody
        renderEmptyState={() => {
          if (errorState === "unknown") {
            return (
              <Flex
                className={styles.emptyState}
                justify="center"
                align="center"
                gap="var(--bw-space-3)"
                direction="column"
              >
                <Text>{_(msg`Failed to fetch API keys`)}</Text>
                <Button
                  onPress={() => {
                    onRetry?.();
                  }}
                  prefixIcon={<LuRefreshCcw />}
                  variant="secondary"
                >
                  {_(msg`Retry`)}
                </Button>
              </Flex>
            );
          }

          return (
            <Flex justify="center" align="center" className={styles.emptyState}>
              <Text>{_(msg`No API keys found`)}</Text>
            </Flex>
          );
        }}
        items={items}
      >
        {(item) => (
          <TableRow>
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
        )}
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
