export type VisualTestGridProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  cellWidth?: string;
};

export const VisualTestGrid = (props: VisualTestGridProps) => {
  const { children, cellWidth = "200px", style } = props;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, ${cellWidth})`,
        gap: "24px",
        alignItems: "center",
        justifyItems: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
