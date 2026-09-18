import React from "react";

type AboutProps = {
  className?: string;
};

export default function About({
  className = "",
}: AboutProps) {
  return (
    <section className={`about  framer-rlmkbi ${className}`.trim()} id="about" data-framer-name="About">
      <div className="framer-1lqa2ba" data-framer-name="Top">
        <div className="ssr-variant hidden-13l4a8r">
          <div className="framer-y0obzy-container">
            <div className="framer-s4rLJ framer-0lBIK framer-90lj2t framer-v-90lj2t" data-framer-name="L" style={({ width: "100%", opacity: "1" } as React.CSSProperties)}>
              <div className="framer-1ag19kj" data-framer-name="Seperator" style={({ backgroundColor: "var(--token-3680e070-9a5f-4ccc-acdc-6b7bf653175a, rgb(22, 22, 22))", opacity: "1" } as React.CSSProperties)} />
              <div className="framer-kqx4f7" data-framer-name="Content" style={({ opacity: "1" } as React.CSSProperties)}>
                <div className="framer-wloapj" data-framer-name="1" style={({ opacity: "1" } as React.CSSProperties)}>
                  <div className="framer-1g6od91" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={({ transform: "none", opacity: "1" } as React.CSSProperties)}>
                    <p className="framer-text framer-styles-preset-1fyflak" data-styles-preset="o93BsUfXU" style={({ "--framer-text-alignment": "left" } as React.CSSProperties)}>01</p>
                  </div>
                </div>
                <div className="framer-1jmrcym" data-framer-name="2" style={({ opacity: "1" } as React.CSSProperties)}>
                  <div className="framer-1tre80m" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={({ transform: "none", opacity: "1" } as React.CSSProperties)}>
                    <p className="framer-text framer-styles-preset-1fyflak" data-styles-preset="o93BsUfXU" style={({ "--framer-text-alignment": "left" } as React.CSSProperties)}>// INTRO</p>
                  </div>
                </div>
                <div className="framer-1plcxxx" data-framer-name="3" style={({ opacity: "1" } as React.CSSProperties)}>
                  <div className="framer-171mczz" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={({ "--extracted-r6o4lv": "var(--token-fe2f0188-6a6d-41ef-a83f-a875042ba3b8, rgb(128, 128, 128))", transform: "none", opacity: "1" } as React.CSSProperties)}>
                    <p className="framer-text framer-styles-preset-1fyflak" data-styles-preset="o93BsUfXU" style={({ "--framer-text-alignment": "right", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fe2f0188-6a6d-41ef-a83f-a875042ba3b8, rgb(128, 128, 128)))" } as React.CSSProperties)}>TOOLS&FRAMEWORKS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-z4lelr" data-framer-name="Content">
          <div className="framer-5fbn0y" data-framer-name="Texts">
            <div className="framer-lx5r5x" data-framer-name="Title">
              <div className="framer-lzxff9" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={({ transform: "none" } as React.CSSProperties)}>
                <h3 className="framer-text framer-styles-preset-vsc6z" data-styles-preset="X06oMW2v8" dir="auto" style={({ "--framer-text-alignment": "center" } as React.CSSProperties)}>
                  <span data-motion-id="wx-desktop-0" style={({ display: "inline-block", opacity: "1", transform: "none" } as React.CSSProperties)}>I'M</span>
                  <span data-motion-id="wx-desktop-1" style={({ display: "inline-block", opacity: "1", transform: "none" } as React.CSSProperties)}>MOHAMED</span>
                  <span data-motion-id="wx-desktop-2" style={({ display: "inline-block", opacity: "1", transform: "none" } as React.CSSProperties)}>SHAHEEM</span>
                  <span data-motion-id="wx-desktop-3" style={({ display: "inline-block", opacity: "1", transform: "none" } as React.CSSProperties)}>KP</span>
                </h3>
              </div>
            </div>
            <div className="framer-1rd2ork" data-framer-name="Body Text" data-framer-component-type="RichTextContainer" style={({ transform: "none" } as React.CSSProperties)}>
              <p className="framer-text framer-styles-preset-gv6ry7" data-styles-preset="nHB6DZZAW" dir="auto" style={({ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-fe2f0188-6a6d-41ef-a83f-a875042ba3b8, rgb(128, 128, 128))" } as React.CSSProperties)}>I'm pursuing a dream of combining Design and AI development into a Productive Application.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
