export function PageHeader({ title, subtitle, meta }: { title: string; subtitle?: string; meta?: string[] }) {
  return (
    <div className="border-b border-border pb-4 mb-6">
      <div className="flex items-baseline gap-3 flex-wrap">
        <h1 className="text-2xl font-semibold text-text">{title}</h1>
        {subtitle && <span className="text-sm text-textMuted">{subtitle}</span>}
      </div>
      {meta && meta.length > 0 && (
        <div className="flex gap-6 mt-2 flex-wrap">
          {meta.map((m) => (
            <span key={m} className="text-xs mono text-textMuted">{m}</span>
          ))}
        </div>
      )}
    </div>
  );
}