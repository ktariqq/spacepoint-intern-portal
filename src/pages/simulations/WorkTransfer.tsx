import { useState } from "react";
import { PageHeader } from "../../components/ui/PageHeader";
import { workTransferScenario as s } from "../../data/mockData";

export default function WorkTransfer() {
  const [started, setStarted] = useState(false);
  return (
    <>
      <PageHeader title="Work Transfer" subtitle="A real handoff, not a simulated colleague" />
      <div className="border border-border rounded bg-surface p-5 space-y-3">
        <p className="text-sm text-text font-medium">{s.title}</p>
        <p className="text-xs text-textMuted">Domain: {s.domain} · Deadline: {s.deadlineHours} hours from acceptance</p>
        <div>
          <p className="text-xs uppercase tracking-wide text-textMuted mb-1">Provided</p>
          <ul className="text-sm text-textSecondary list-disc pl-5 space-y-0.5">
            {s.provided.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-textMuted mb-1">Expected on Completion</p>
          <ul className="text-sm text-textSecondary list-disc pl-5 space-y-0.5">
            {s.expected.map((e) => <li key={e}>{e}</li>)}
          </ul>
        </div>
        {!started ? (
          <button onClick={() => setStarted(true)} className="bg-accent hover:bg-accentHover px-4 py-2 rounded text-sm font-medium text-text">
            Accept & Start
          </button>
        ) : (
          <div className="border-t border-border pt-3">
            <p className="text-xs mono text-warning uppercase">Deadline running — 47h 58m remaining</p>
            <textarea placeholder="Work notes / documentation as you go" className="w-full mt-2 bg-surfaceRaised border border-borderStrong rounded px-3 py-2 text-sm text-text" rows={4} />
            <button className="mt-2 bg-accent hover:bg-accentHover px-4 py-2 rounded text-sm font-medium text-text">Submit Completed Handoff</button>
          </div>
        )}
      </div>
    </>
  );
}