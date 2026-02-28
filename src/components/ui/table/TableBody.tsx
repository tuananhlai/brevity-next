import {
  TableBody as AriaTableBody,
  type TableBodyProps as AriaTableBodyProps,
} from "react-aria-components";

export interface TableBodyProps<T> extends Omit<
  AriaTableBodyProps<T>,
  "className" | "style"
> {
  className?: string;
  style?: React.CSSProperties;
}

export const TableBody = <T extends object>(props: TableBodyProps<T>) => {
  return <AriaTableBody {...props} />;
};
