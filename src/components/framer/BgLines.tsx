import React from "react";

type BgLinesProps = {
  className?: string;
};

export default function BgLines({
  className = "",
}: BgLinesProps) {
  return (
    <section className={`bg-lines  framer-u6x64y ${className}`.trim()} id="bglines" data-framer-name="BG Lines">
      <div className="framer-14fm9rn" data-framer-name="Line" />
      <div className="framer-hulc7t" data-framer-name="Line" />
      <div className="framer-yfg5lm" data-framer-name="Line" />
    </section>
  );
}
