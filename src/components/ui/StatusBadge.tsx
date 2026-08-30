const STYLES: Record<string, string> = {
  done: "text-success", ok: "text-success", Approved: "text-success", Complete: "text-success",
  current: "text-warning", warning: "text-warning", "Changes Requested": "text-warning", "In Progress": "text-warning", "Pending Review": "text-info",
  pending: "text-textMuted", neutral: "text-textMuted",
  danger: "text-error", Rejected: "text-error",
};

export function StatusBadge({ label }: { label: string }) {
  return <span className={`text-xs mono uppercase tracking-wide ${STYLES[label] ?? "text-textMuted"}`}>{label}</span>;
}