import CaseStudyLayout from '../components/CaseStudyLayout'
import { projects } from '../data/projects'

export default function SmartFolderPage() {
  return (
    <CaseStudyLayout project={projects[1]} nextProject={projects[2]}>
      <section className="mx-auto max-w-[1100px] px-6 pb-24 md:px-12 md:pb-36">
        <div className="overflow-hidden border border-border bg-[#070A0E] font-mono text-sm">
          <div className="border-b border-border px-5 py-4 text-text-secondary">
            watcher.py — activity log
          </div>
          <div className="space-y-3 p-6">
            <div className="text-mint-signal">$ python watcher.py --daemon</div>
            <div className="text-text-secondary">[INFO] Monitoring Downloads</div>
            <div className="text-soft-ivory">[EVENT] report_final.pdf</div>
            <div className="text-cyber-teal">↳ Documents / Reports</div>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  )
}
