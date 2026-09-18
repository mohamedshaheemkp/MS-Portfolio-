import React from "react";

type SectionImageProps = {
  className?: string;
};

export default function SectionImage({
  className = "",
}: SectionImageProps) {
  return (
    <section className={`section-image  framer-nevqwo ${className}`.trim()} id="sectionimage" data-framer-name="Image">
      <div className="framer-1tdgcic" data-framer-name="Container">
        <div className="ssr-variant">
          <div className="framer-1ir1sp8" data-framer-name="Fill Your Image Here" style={({ willChange: "transform", opacity: "1", transform: "none" } as React.CSSProperties)}>
            <div data-framer-background-image-wrapper="true" style={({ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" } as React.CSSProperties)}>
              <img decoding="auto" width="1500" height="2100" sizes="(min-width: 1440px) calc(min(100vw, 1480px) - 60px), (min-width: 1200px) and (max-width: 1439.98px) calc(min(100vw, 1480px) - 60px), (min-width: 810px) and (max-width: 1199.98px) calc(min(100vw, 1480px) - 60px), (max-width: 809.98px) calc(min(100vw, 1480px) - 50px)" srcSet="https://framerusercontent.com/images/5PowIhjB0ZQS5Y0XRPSkGgAE2o8.png?scale-down-to=1024&amp;width=1500&amp;height=2100 731w,https://framerusercontent.com/images/5PowIhjB0ZQS5Y0XRPSkGgAE2o8.png?scale-down-to=2048&amp;width=1500&amp;height=2100 1462w,https://framerusercontent.com/images/5PowIhjB0ZQS5Y0XRPSkGgAE2o8.png?width=1500&amp;height=2100 1500w" alt="Man" style={({ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" } as React.CSSProperties)} src="/images/5PowIhjB0ZQS5Y0XRPSkGgAE2o8_9579.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
