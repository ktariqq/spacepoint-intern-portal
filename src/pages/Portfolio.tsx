import { PageHeader } from "../components/ui/PageHeader";
import { portfolioItems } from "../data/mockData";

export default function Portfolio() {
  return (
    <>
      <PageHeader title="Portfolio" subtitle="Built from completed work" />
      <div className="border border-border rounded bg-surface p-5 space-y-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-textMuted mb-1">Completed Capstones</p>
          <p className="text-sm text-text">{portfolioItems.completedCapstones.join(", ")}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-textMuted mb-1">In Progress</p>
          <p className="text-sm text-text">{portfolioItems.inProgress}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-textMuted mb-1">Supervisor Feedback</p>
          <p className="text-sm text-textSecondary italic">{portfolioItems.feedback}</p>
        </div>
      </div>
      <button className="mt-4 bg-accent hover:bg-accentHover px-4 py-2 rounded text-sm font-medium text-text">
        Download Completion Document
      </button>
    </>
  );
}