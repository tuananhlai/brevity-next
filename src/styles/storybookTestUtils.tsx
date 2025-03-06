export type VisualTestGridProps = {
  children: React.ReactNode;
  cellWidth?: string;
};

export const VisualTestGrid = (props: VisualTestGridProps) => {
  const { children, cellWidth = "200px" } = props;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, ${cellWidth})`,
        gap: "24px",
        alignItems: "start",
        justifyItems: "center",
      }}
    >
      {children}
    </div>
  );
};
