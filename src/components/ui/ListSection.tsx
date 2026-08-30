export function ListSection({ title, caption, children }: { title: string; caption?: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline gap-3 border-b border-border pb-2 mb-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-textSecondary">{title}</h2>
        {caption && <span className="text-xs text-textMuted">{caption}</span>}
      </div>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

export function ListRow({ primary, secondary, right }: { primary: string; secondary?: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border border-border rounded px-4 py-3 bg-surface">
      <div>
        <p className="text-sm text-text">{primary}</p>
        {secondary && <p className="text-xs text-textMuted mt-0.5">{secondary}</p>}
      </div>
      {right && <div className="text-xs mono text-textMuted shrink-0">{right}</div>}
    </div>
  );
}