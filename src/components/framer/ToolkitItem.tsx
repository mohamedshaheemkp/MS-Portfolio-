import React from "react";

export type ToolkitItemProps = {
  name?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function ToolkitItem({
  name,
  className = "",
  children,
}: ToolkitItemProps) {
  if (children) {
    return <span className={"toolkit-item " + className}>{children}</span>;
  }

  return (
    <span
      className={"toolkit-item " + className}
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "10px 18px",
        borderRadius: "8px",
        fontFamily: "var(--font-mono, monospace)",
        fontSize: "var(--type-caption-size, 14px)",
        fontWeight: 500,
      }}
    >
      {name}
    </span>
  );
}
