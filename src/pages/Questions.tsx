import { PageHeader } from "../components/ui/PageHeader";
import { questions } from "../data/mockData";

export default function Questions() {
  return (
    <>
      <PageHeader title="Questions" subtitle="Attached to the exact task or capstone they concern" />
      <div className="space-y-3">
        {questions.map((q) => (
          <div key={q.id} className="border border-border rounded bg-surface p-4">
            <div className="flex justify-between items-start mb-1">
              <p className="text-sm text-text">{q.text}</p>
              <span className={`text-xs mono uppercase ${q.status === "Answered" ? "text-success" : "text-warning"}`}>{q.status}</span>
            </div>
            <p className="text-xs text-textMuted mb-2">On: {q.context} · {q.author}, {q.date}</p>
            {q.answer && (
              <p className="text-sm text-textSecondary border-l-2 border-accentSoft pl-3">
                {q.answer} <span className="text-textMuted">— {q.responder}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}