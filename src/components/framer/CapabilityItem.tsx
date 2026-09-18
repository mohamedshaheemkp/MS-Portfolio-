import React from "react";

export type CapabilityItemProps = {
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function CapabilityItem({
  title,
  description,
  className = "",
  children,
}: CapabilityItemProps) {
  if (children) {
    return <div className={"capability-item " + className}>{children}</div>;
  }

  return (
    <div className={"capability-item " + className} style={{ background: "rgba(255, 255, 255, 0.03)", padding: "24px", borderRadius: "12px" }}>
      {title && (
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-subheading-size, 20px)", fontWeight: "var(--type-subheading-weight, 600)", marginBottom: "8px" }}>
          {title}
        </h3>
      )}
      {description && (
        <p style={{ fontFamily: "var(--font-body)", opacity: 0.7, fontSize: "var(--type-body-size, 15px)", lineHeight: "var(--type-body-line-height, 1.5)" }}>
          {description}
        </p>
      )}
    </div>
  );
}
