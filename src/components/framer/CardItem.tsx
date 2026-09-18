import React from "react";

type CardItemProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function CardItem({
  children,
  className = "",
}: CardItemProps) {
  return (
    <div className={"card-item " + className}>
      {children}
    </div>
  );
}
