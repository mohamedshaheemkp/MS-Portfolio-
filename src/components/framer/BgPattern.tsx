import React from "react";

type BgPatternProps = {
  className?: string;
};

export default function BgPattern({
  className = "",
}: BgPatternProps) {
  return (
    <section className={`bg-pattern  framer-1jejior ${className}`.trim()} id="bgpattern" data-as="section" data-framer-name="BG Pattern">
      <div data-framer-background-image-wrapper="true" style={({ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0", backgroundImage: "url(https://framerusercontent.com/images/ldf53R2pKtKErtQpdz1GxxWt2I.svg?width=128&height=128)", backgroundRepeat: "repeat", backgroundPosition: "left top", border: "0", backgroundSize: "13px auto" } as React.CSSProperties)} />
    </section>
  );
}
