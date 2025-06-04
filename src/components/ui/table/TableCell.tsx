import { Cell, CellProps } from "react-aria-components";
import { cn } from "@/styles/utils";
import { ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./Table.module.scss";

export interface TableCellProps extends ReplaceAriaRenderProps<CellProps> {}

export const TableCell: React.FC<TableCellProps> = (props) => {
  const { className, ...rest } = props;
  return <Cell className={cn(styles.cell, className)} {...rest} />;
};
