import { PageHeader } from "../../components/ui/PageHeader";

const ROWS = [
  { role: "Intern", caps: "Own tasks, own planner, own submissions, own Drive folder, own attendance, ask questions, optional gamification" },
  { role: "Mentor", caps: "Everything above, plus: answer questions, moderate community, review beginner submissions" },
  { role: "Supervisor", caps: "Everything above, plus: assign tasks, approve capstones/submissions, approve/revoke mentor status, override records, trigger readiness exercises, approve plans" },
  { role: "Admin", caps: "Program- and system-level management" },
];

export default function Permissions() {
  return (
    <>
      <PageHeader title="Roles & Permissions" subtitle="The supervisor remains the final authority at every level" />
      <div className="space-y-2">
        {ROWS.map((r) => (
          <div key={r.role} className="border border-border rounded bg-surface px-4 py-3">
            <p className="text-sm font-medium text-text">{r.role}</p>
            <p className="text-xs text-textMuted mt-1">{r.caps}</p>
          </div>
        ))}
      </div>
    </>
  );
}