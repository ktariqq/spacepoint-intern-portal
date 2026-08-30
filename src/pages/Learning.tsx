import { PageHeader } from "../components/ui/PageHeader";
import { learningResources } from "../data/mockData";

export default function Learning() {
  return (
    <>
      <PageHeader title="Learning" subtitle="Recommended for your current capstone" />
      <div className="space-y-2">
        {learningResources.map((r) => (
          <div key={r.id} className="flex items-center justify-between border border-border rounded bg-surface px-4 py-3">
            <div>
              <p className="text-sm text-text">{r.title}</p>
              <p className="text-xs text-textMuted mt-0.5">
                {r.domain} · {r.difficulty} · {r.minutes} min
                {r.requiredFor && <> · Required for: {r.requiredFor}</>}
              </p>
            </div>
            <span className={`text-xs mono uppercase ${r.completed ? "text-success" : "text-textMuted"}`}>
              {r.completed ? "Complete" : "Not Started"}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}