import { Column, ColumnProps } from "react-aria-components";
import { cn } from "@/styles/utils";
import { ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./Table.module.scss";

export interface TableColumnProps
  extends Omit<
    ReplaceAriaRenderProps<ColumnProps>,
    "defaultWidth" | "width" | "minWidth" | "maxWidth"
  > {}

export const TableColumn: React.FC<TableColumnProps> = (props) => {
  const { className, ...rest } = props;
  return <Column className={cn(styles.column, className)} {...rest} />;
};
