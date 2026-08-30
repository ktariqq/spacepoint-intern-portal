import { PageHeader } from "../components/ui/PageHeader";
import { Pipeline } from "../components/ui/Pipeline";
import { capstones, submissions } from "../data/mockData";
import { useState } from "react";

export default function Capstones() {
  const cap = capstones[0];
  const capSubmissions = submissions.filter((s) => s.capstoneId === cap.id);
  const [note, setNote] = useState("");

  return (
    <>
      <PageHeader title="Capstones" subtitle={cap.title} meta={[cap.domain, cap.driveFolder]} />
      <p className="text-sm font-semibold uppercase tracking-wide text-textSecondary border-b border-border pb-2 mb-3">Milestones</p>
      <Pipeline items={cap.milestones} />

      <p className="text-sm font-semibold uppercase tracking-wide text-textSecondary border-b border-border pb-2 mb-3 mt-8">Submissions</p>
      <div className="space-y-3 mb-8">
        {capSubmissions.map((s) => (
          <div key={s.id} className="border border-border rounded bg-surface p-4">
            <div className="flex justify-between items-start mb-1">
              <p className="text-sm text-text">{s.title}</p>
              <span className={`text-xs mono uppercase ${
                s.status === "Approved" ? "text-success" : s.status === "Changes Requested" ? "text-warning" : "text-textMuted"
              }`}>{s.status}</span>
            </div>
            <p className="text-xs text-textMuted mb-2">Submitted {s.submittedAt}</p>
            <p className="text-sm text-textSecondary">{s.note}</p>
            {s.feedback && <p className="text-sm text-warning mt-2 border-l-2 border-warning pl-3">{s.feedback}</p>}
          </div>
        ))}
      </div>

      <p className="text-sm font-semibold uppercase tracking-wide text-textSecondary border-b border-border pb-2 mb-3">Submit for Review</p>
      <div className="border border-border rounded bg-surface p-4 space-y-3">
        <input type="file" multiple className="text-sm text-textSecondary" />
        <textarea
          placeholder="Notes for your supervisor"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full bg-surfaceRaised border border-borderStrong rounded px-3 py-2 text-sm text-text"
          rows={3}
        />
        <input placeholder="Links (GitHub / Drive / demo)" className="w-full bg-surfaceRaised border border-borderStrong rounded px-3 py-2 text-sm text-text" />
        <button className="bg-accent hover:bg-accentHover text-text px-4 py-2 rounded text-sm font-medium">
          Submit for Review
        </button>
      </div>
    </>
  );
}