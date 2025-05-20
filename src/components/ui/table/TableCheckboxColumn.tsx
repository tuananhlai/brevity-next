import { Checkbox } from "@/components/ui/checkbox";
import {
  TableColumn,
  TableColumnProps,
} from "@/components/ui/table/TableColumn";

export interface TableCheckboxColumnProps
  extends Omit<TableColumnProps, "children"> {}

export const TableCheckboxColumn: React.FC<TableCheckboxColumnProps> = (
  props,
) => {
  return (
    <TableColumn {...props}>
      <Checkbox slot="selection" />
    </TableColumn>
  );
};
