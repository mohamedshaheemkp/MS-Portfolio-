import CaseStudyLayout from "../components/CaseStudyLayout";
import { projects } from "../data/projects";

export default function AgriAIPage() {
  return <CaseStudyLayout project={projects[0]} nextProject={projects[1]} />;
}
