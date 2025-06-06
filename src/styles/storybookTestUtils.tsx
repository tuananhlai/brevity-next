export type VisualTestGridProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  cellWidth?: string;
  gap?: React.CSSProperties["gap"];
};

export const VisualTestGrid = (props: VisualTestGridProps) => {
  const { children, gap = "24px", cellWidth = "200px", style } = props;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, ${cellWidth})`,
        gap,
        alignItems: "center",
        justifyItems: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
