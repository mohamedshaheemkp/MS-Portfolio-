import React from "react";

export type JourneyItemProps = {
  period?: string;
  role?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function JourneyItem({
  period,
  role,
  description,
  className = "",
  children,
}: JourneyItemProps) {
  if (children) {
    return <div className={"journey-item " + className}>{children}</div>;
  }

  return (
    <div className={"journey-item " + className}>
      {period && (
        <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-caption-size, 13px)", opacity: 0.5, textTransform: "uppercase", letterSpacing: "var(--type-label-letter-spacing, 0.1em)" }}>
          {period}
        </span>
      )}
      {role && (
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-subheading-size, 20px)", fontWeight: "var(--type-subheading-weight, 600)", margin: "6px 0 8px 0" }}>
          {role}
        </h3>
      )}
      {description && (
        <p style={{ fontFamily: "var(--font-body)", opacity: 0.75, fontSize: "var(--type-body-size, 14px)", lineHeight: "var(--type-body-line-height, 1.6)" }}>
          {description}
        </p>
      )}
    </div>
  );
}
