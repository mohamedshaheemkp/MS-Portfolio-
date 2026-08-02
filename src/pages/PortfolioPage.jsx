import CaseStudyLayout from '../components/CaseStudyLayout'
import { projects } from '../data/projects'

export default function PortfolioPage() {
  return <CaseStudyLayout project={projects[2]} nextProject={projects[0]} />
}
