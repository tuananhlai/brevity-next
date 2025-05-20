import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableCellProps } from "@/components/ui/table/TableCell";

export interface TableCheckboxCellProps
  extends Omit<TableCellProps, "children"> {}

export const TableCheckboxCell: React.FC<TableCheckboxCellProps> = (props) => {
  return (
    <TableCell {...props}>
      <Checkbox slot="selection" />
    </TableCell>
  );
};
