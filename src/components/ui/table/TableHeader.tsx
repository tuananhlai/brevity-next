import {
  TableHeader as AriaTableHeader,
  TableHeaderProps as AriaTableHeaderProps,
  Collection,
  useTableOptions,
} from "react-aria-components";
import { Checkbox } from "@/components/ui/checkbox";
import { TableColumn } from "./TableColumn";

export interface TableHeaderProps<T>
  extends Omit<AriaTableHeaderProps<T>, "className" | "style"> {
  className?: string;
  style?: React.CSSProperties;
}

export const TableHeader = <T extends object>(props: TableHeaderProps<T>) => {
  const { children, columns, ...rest } = props;
  const { selectionBehavior } = useTableOptions();

  return (
    <AriaTableHeader {...rest}>
      {selectionBehavior === "toggle" && (
        <TableColumn>
          <Checkbox slot="selection" />
        </TableColumn>
      )}
      <Collection items={columns}>{children}</Collection>
    </AriaTableHeader>
  );
};
