export function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-border rounded bg-surface px-6 py-10 text-center">
      <p className="text-sm text-textSecondary mb-1">{title}</p>
      <p className="text-xs text-textMuted">{body}</p>
    </div>
  );
}