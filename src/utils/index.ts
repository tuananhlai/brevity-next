import { FieldErrorProps } from "react-aria-components";

export type ReplaceAriaRenderProps<T> = Omit<
  T,
  "style" | "className" | "children"
> & {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

export type FieldsetProps = {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: FieldErrorProps["children"];
};
