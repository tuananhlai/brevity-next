import { Row, RowProps } from "react-aria-components";
import { ReplaceAriaRenderProps } from "@/utils/misc";

export interface TableRowProps<T> extends ReplaceAriaRenderProps<RowProps<T>> {}

export const TableRow = <T extends object>(props: TableRowProps<T>) => {
  return <Row {...props} />;
};
