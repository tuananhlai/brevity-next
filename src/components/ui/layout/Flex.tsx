export interface FlexProps {
  children: React.ReactNode;
  inline?: boolean;
  className?: string;
  direction?: React.CSSProperties["flexDirection"];
  justify?: React.CSSProperties["justifyContent"];
  align?: React.CSSProperties["alignItems"];
  gap?: React.CSSProperties["gap"];
  wrap?: React.CSSProperties["flexWrap"];
  style?: React.CSSProperties;
}

export const Flex = ({
  children,
  className,
  direction,
  justify,
  align,
  gap,
  wrap,
  inline,
  style,
}: FlexProps) => {
  return (
    <div
      style={{
        display: inline ? "inline-flex" : "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap: gap,
        flexWrap: wrap,
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
