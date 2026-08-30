import { PageHeader } from "../components/ui/PageHeader";
import { dailyLogs } from "../data/mockData";

export default function DailyLog() {
  return (
    <>
      <PageHeader title="Daily Log & Attendance" subtitle="Synced conceptually with the existing tracker sheet" />
      <div className="border border-border rounded bg-surface p-4 mb-6 space-y-3">
        <p className="text-sm font-medium text-text">Add today's entry</p>
        <div className="grid grid-cols-2 gap-3">
          <input type="date" className="bg-surfaceRaised border border-borderStrong rounded px-3 py-2 text-sm text-text" />
          <input type="number" placeholder="Hours" defaultValue={6} className="bg-surfaceRaised border border-borderStrong rounded px-3 py-2 text-sm text-text" />
        </div>
        <textarea placeholder="Task worked on" className="w-full bg-surfaceRaised border border-borderStrong rounded px-3 py-2 text-sm text-text" rows={2} />
        <textarea placeholder="Blockers (optional)" className="w-full bg-surfaceRaised border border-borderStrong rounded px-3 py-2 text-sm text-text" rows={2} />
        <button className="bg-accent hover:bg-accentHover px-4 py-2 rounded text-sm font-medium text-text">Log Entry</button>
      </div>

      <p className="text-sm font-semibold uppercase tracking-wide text-textSecondary border-b border-border pb-2 mb-3">Recent Entries</p>
      <div className="space-y-2">
        {dailyLogs.map((l) => (
          <div key={l.date} className="border border-border rounded bg-surface px-4 py-3 flex justify-between">
            <div>
              <p className="text-sm text-text">{l.task}</p>
              <p className="text-xs text-textMuted mt-0.5">{l.notes}{l.blockers && ` · Blocker: ${l.blockers}`}</p>
            </div>
            <div className="text-right shrink-0 ml-4">
              <p className="text-xs mono text-textSecondary">{l.date}</p>
              <p className="text-xs mono text-textMuted">{l.hours} hrs</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}