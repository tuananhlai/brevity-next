import { Trans, msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { DialogTrigger } from "react-aria-components";
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

export interface ManageAPIKeyTableRowData {
  id: string;
  name: string;
  apiKeyPrefix: string;
  createdAt: Date;
  lastUsed?: Date;
}

export interface ManageAPIKeyTableProps {
  items: ManageAPIKeyTableRowData[];
}

export const ManageAPIKeyTable: React.FC<ManageAPIKeyTableProps> = (props) => {
  const { items } = props;
  const { _ } = useLingui();
  const confirm = useConfirm();

  return (
    <Table>
      <TableHeader>
        <TableColumn isRowHeader>
          <Trans>Name</Trans>
        </TableColumn>
        <TableColumn>
          <Trans>Value</Trans>
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
            <TableCell>{item.apiKeyPrefix}</TableCell>
            <TableCell>{item.createdAt.toString()}</TableCell>
            <TableCell>{item.lastUsed?.toString() ?? "-"}</TableCell>
            <TableCell>
              <DialogTrigger>
                <Button
                  variant="tertiary"
                  onPress={async () => {
                    const ok = await confirm({
                      title: (
                        <Trans>
                          Are you sure you want to deactivate this API key?
                        </Trans>
                      ),
                      content: (
                        <Trans>
                          You will no longer be able to create new digital
                          authors using this API key after deactivation.
                          Existing digital authors using this API key will
                          continue to work.
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
              </DialogTrigger>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
