import { PageHeader } from "../components/ui/PageHeader";
import { intern } from "../data/mockData";
import { useAppState } from "../state/AppState";

export default function Progression() {
  const { gamificationOn } = useAppState();
  if (!gamificationOn) {
    return (
      <>
        <PageHeader title="Progression" />
        <p className="text-sm text-textMuted">Gamification is turned off. Progression tracking is available if you opt back in from the top bar.</p>
      </>
    );
  }
  const pct = Math.round((intern.xp / intern.xpTarget) * 100);
  return (
    <>
      <PageHeader title="Progression" subtitle="Experience → Demonstrated Competence → Supervisor Approval → Increased Responsibility" />
      <div className="border border-border rounded bg-surface p-4 mb-6">
        <p className="text-xs uppercase tracking-wide text-textMuted mb-2">Experience — {intern.xp} / {intern.xpTarget}</p>
        <div className="h-2 bg-surfaceRaised rounded overflow-hidden">
          <div className="h-full bg-accent" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <p className="text-sm font-semibold uppercase tracking-wide text-textSecondary border-b border-border pb-2 mb-3">Mentor Status — Not Yet Eligible</p>
      <div className="text-sm text-textSecondary space-y-1">
        <p>Answer questions: <span className="text-textMuted">Not granted</span></p>
        <p>Moderate community: <span className="text-textMuted">Not granted</span></p>
        <p>Review beginner submissions: <span className="text-textMuted">Not granted</span></p>
        <p>Assign tasks: <span className="text-textMuted">No — supervisor only</span></p>
      </div>
    </>
  );
}