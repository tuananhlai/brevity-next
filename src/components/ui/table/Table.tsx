import {
  Table as AriaTable,
  TableProps as AriaTableProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import { ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./Table.module.scss";

export interface TableProps extends ReplaceAriaRenderProps<AriaTableProps> {
  foo?: boolean;
}

export const Table: React.FC<TableProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <AriaTable {...rest} className={cn(styles.table, className)}>
      {children}
    </AriaTable>
  );
};
