import React from "react";
import { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export default function ProjectCard({
  project,
  className = "",
}: ProjectCardProps) {
  return (
    <article className={"project-card " + className}>
      {project.image && (
        <div
          className="project-card-image"
          style={{
            width: "100%",
            height: "200px",
            overflow: "hidden",
            borderRadius: "10px",
            marginBottom: "16px",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      )}
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-subheading-size, 24px)", fontWeight: "var(--type-subheading-weight, 600)", margin: "0 0 12px 0" }}>
        {project.title}
      </h3>
      {project.description && (
        <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body-size, 14px)", lineHeight: "var(--type-body-line-height, 1.6)", opacity: 0.75, marginBottom: "20px" }}>
          {project.description}
        </p>
      )}
      {project.tags && project.tags.length > 0 && (
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {project.tags.map((tag, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--type-caption-size, 12px)",
                padding: "4px 10px",
                borderRadius: "9999px",
                background: "rgba(255, 255, 255, 0.08)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
