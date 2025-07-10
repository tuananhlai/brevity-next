import {
  Collection,
  Row,
  RowProps,
  useTableOptions,
} from "react-aria-components";
import { Checkbox } from "@/components/ui/checkbox";
import { ReplaceAriaRenderProps } from "@/utils/misc";
import { TableCell } from "./TableCell";

export interface TableRowProps<T> extends ReplaceAriaRenderProps<RowProps<T>> {}

export const TableRow = <T extends object>(props: TableRowProps<T>) => {
  const { children, columns, ...rest } = props;
  const { selectionBehavior } = useTableOptions();

  return (
    <Row {...rest}>
      {selectionBehavior === "toggle" && (
        <TableCell>
          <Checkbox slot="selection" />
        </TableCell>
      )}
      <Collection items={columns}>{children}</Collection>
    </Row>
  );
};
