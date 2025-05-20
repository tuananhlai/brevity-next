import {
  TableHeader as AriaTableHeader,
  TableHeaderProps as AriaTableHeaderProps,
} from "react-aria-components";

export interface TableHeaderProps<T>
  extends Omit<AriaTableHeaderProps<T>, "className" | "style"> {
  className?: string;
  style?: React.CSSProperties;
}

export const TableHeader = <T extends object>(props: TableHeaderProps<T>) => {
  return <AriaTableHeader {...props} />;
};
