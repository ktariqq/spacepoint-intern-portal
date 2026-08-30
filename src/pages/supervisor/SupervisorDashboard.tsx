import { PageHeader } from "../../components/ui/PageHeader";
import { cohort, submissions } from "../../data/mockData";

export default function SupervisorDashboard() {
  return (
    <>
      <PageHeader title="Supervisor Dashboard" subtitle="Cohort overview" />
      <p className="text-sm font-semibold uppercase tracking-wide text-textSecondary border-b border-border pb-2 mb-3">Cohort</p>
      <div className="space-y-2 mb-8">
        {cohort.map((c) => (
          <div key={c.name} className="flex justify-between border border-border rounded bg-surface px-4 py-3">
            <div>
              <p className="text-sm text-text">{c.name}</p>
              <p className="text-xs text-textMuted mt-0.5">{c.capstone}</p>
            </div>
            <div className="text-right">
              <p className="text-sm mono text-text">{c.progress}%</p>
              {c.blockers > 0 && <p className="text-xs text-warning">{c.blockers} blocker</p>}
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm font-semibold uppercase tracking-wide text-textSecondary border-b border-border pb-2 mb-3">Awaiting Review</p>
      <div className="space-y-2">
        {submissions.filter((s) => s.status === "Pending Review" || s.status === "Changes Requested").map((s) => (
          <div key={s.id} className="flex justify-between border border-border rounded bg-surface px-4 py-3">
            <p className="text-sm text-text">{s.title}</p>
            <span className="text-xs mono uppercase text-warning">{s.status}</span>
          </div>
        ))}
      </div>
    </>
  );
}