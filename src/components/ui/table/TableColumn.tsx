import { Column, ColumnProps } from "react-aria-components";
import { cn } from "@/styles/utils";
import { ReplaceAriaRenderProps } from "@/utils";
import styles from "./Table.module.scss";

export interface TableColumnProps extends ReplaceAriaRenderProps<ColumnProps> {}

export const TableColumn: React.FC<TableColumnProps> = (props) => {
  const { className, ...rest } = props;
  return <Column className={cn(styles.column, className)} {...rest} />;
};
