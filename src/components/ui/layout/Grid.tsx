import React from "react";

export interface GridProps {
  children: React.ReactNode;
  inline?: boolean;
  className?: string;
  templateColumns?: React.CSSProperties["gridTemplateColumns"];
  templateRows?: React.CSSProperties["gridTemplateRows"];
  templateAreas?: React.CSSProperties["gridTemplateAreas"];
  gap?: string;
  justifyItems?: React.CSSProperties["justifyItems"];
  alignItems?: React.CSSProperties["alignItems"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignContent?: React.CSSProperties["alignContent"];
  style?: React.CSSProperties;
}

export const Grid = ({
  children,
  className,
  templateColumns,
  templateRows,
  templateAreas,
  gap,
  justifyItems,
  alignItems,
  justifyContent,
  alignContent,
  inline,
  style,
}: GridProps) => {
  return (
    <div
      style={{
        display: inline ? "inline-grid" : "grid",
        gridTemplateColumns: templateColumns,
        gridTemplateRows: templateRows,
        gridTemplateAreas: templateAreas,
        gap: gap,
        justifyItems: justifyItems,
        alignItems: alignItems,
        justifyContent: justifyContent,
        alignContent: alignContent,
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
