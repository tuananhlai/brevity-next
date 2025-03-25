export interface FlexProps {
  children: React.ReactNode;
  inline?: boolean;
  className?: string;
  direction?: React.CSSProperties["flexDirection"];
  justify?: React.CSSProperties["justifyContent"];
  align?: React.CSSProperties["alignItems"];
  gap?: React.CSSProperties["gap"];
  wrap?: React.CSSProperties["flexWrap"];
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
      }}
      className={className}
    >
      {children}
    </div>
  );
};
