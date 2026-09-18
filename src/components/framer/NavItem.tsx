import React from "react";

type NavItemProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function NavItem({
  children,
  className = "",
}: NavItemProps) {
  return (
    <div className={"nav-item " + className}>
      {children}
    </div>
  );
}
