import type { Milestone } from "../../types";

export function Pipeline({ items }: { items: Milestone[] }) {
  return (
    <div className="border border-border rounded bg-surface">
      {items.map((m, i) => (
        <div key={m.name} className={`flex items-center gap-4 px-4 py-3 ${i !== items.length - 1 ? "border-b border-border" : ""}`}>
          <span className="text-xs mono text-textMuted w-6">{String(i + 1).padStart(2, "0")}</span>
          <span className="flex-1 text-sm text-textSecondary">{m.name}</span>
          <StatusForState state={m.state} />
        </div>
      ))}
    </div>
  );
}

function StatusForState({ state }: { state: Milestone["state"] }) {
  const map = { done: ["Complete", "text-success"], current: ["In Progress", "text-warning"], pending: ["Queued", "text-textMuted"] } as const;
  const [label, cls] = map[state];
  return <span className={`text-xs mono uppercase tracking-wide ${cls}`}>{label}</span>;
}