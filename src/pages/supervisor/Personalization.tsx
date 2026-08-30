import { PageHeader } from "../../components/ui/PageHeader";
import { profileSkills, starterProjects, planProposals } from "../../data/mockData";

export default function Personalization() {
  return (
    <>
      <PageHeader title="Plan Generation" subtitle="CV + Application → Skill Profile → Matched Starter Projects → AI Wording → Supervisor Approval" />

      <p className="text-sm font-semibold uppercase tracking-wide text-textSecondary border-b border-border pb-2 mb-3">Sample Profile — Youssef Nabil</p>
      <div className="border border-border rounded bg-surface p-4 mb-6 grid grid-cols-2 gap-2 text-sm">
        {Object.entries(profileSkills).map(([k, v]) => (
          <p key={k} className="text-textSecondary"><span className="text-textMuted uppercase text-xs mr-2">{k}</span>{v}</p>
        ))}
      </div>

      <p className="text-sm font-semibold uppercase tracking-wide text-textSecondary border-b border-border pb-2 mb-3">Rule-Based Matches</p>
      <div className="space-y-2 mb-6">
        {starterProjects.slice(0, 2).map((p) => (
          <div key={p.title} className="border border-border rounded bg-surface px-4 py-3">
            <p className="text-sm text-text">{p.title}</p>
            <p className="text-xs text-textMuted mt-0.5">{p.domain} · matches: {p.skills.join(", ")}</p>
          </div>
        ))}
      </div>

      <p className="text-sm font-semibold uppercase tracking-wide text-textSecondary border-b border-border pb-2 mb-3">Proposals Awaiting Approval</p>
      {planProposals.map((p) => (
        <div key={p.intern} className="border border-border rounded bg-surface p-4">
          <p className="text-sm text-text">{p.intern} — {p.capstone}</p>
          <p className="text-xs text-textMuted mt-1">Based on: {p.basedOn}</p>
          <div className="flex gap-2 mt-3">
            <button className="bg-accent hover:bg-accentHover px-3 py-1.5 rounded text-xs font-medium text-text">Approve</button>
            <button className="border border-borderStrong px-3 py-1.5 rounded text-xs text-textSecondary">Edit</button>
            <button className="border border-borderStrong px-3 py-1.5 rounded text-xs text-textSecondary">Remove Tasks</button>
          </div>
        </div>
      ))}
    </>
  );
}