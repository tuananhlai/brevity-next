import {
  Table as AriaTable,
  type TableProps as AriaTableProps,
} from "react-aria-components";
import { cn } from "@/styles/utils";
import type { ReplaceAriaRenderProps } from "@/utils/misc";
import styles from "./Table.module.scss";

export interface TableProps extends ReplaceAriaRenderProps<AriaTableProps> {
  foo?: boolean;
}

export const Table: React.FC<TableProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div className={cn(styles.tableContainer, className)}>
      <AriaTable {...rest} className={styles.table}>
        {children}
      </AriaTable>
    </div>
  );
};
