import { useState, useEffect } from "react";
import { PageHeader } from "../../components/ui/PageHeader";
import { urgentDecisionScenario as s } from "../../data/mockData";

export default function UrgentDecision() {
  const [secondsLeft, setSecondsLeft] = useState(90 * 60);
  const [choice, setChoice] = useState<string | null>(null);
  const [reasoning, setReasoning] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) return;
    const id = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [submitted]);

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  return (
    <>
      <PageHeader title="Urgent Decision" subtitle="Evaluated on reasoning, not on picking the 'correct' option" />
      <div className="border border-border rounded bg-surface p-5 space-y-3">
        <p className="text-xs mono uppercase text-error">Time remaining: {mm}:{ss}</p>
        <p className="text-sm text-textSecondary">{s.situation}</p>
        <div>
          <p className="text-xs uppercase tracking-wide text-textMuted mb-1">Available Information</p>
          <ul className="text-sm text-textSecondary list-disc pl-5 space-y-0.5">
            {s.information.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>

        {!submitted ? (
          <>
            <div className="flex gap-2 pt-2">
              {["Proceed", "Request Clarification", "Escalate / Stop"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setChoice(opt)}
                  className={`px-3 py-1.5 rounded text-sm border ${
                    choice === opt ? "border-accentSoft text-accentSoft bg-accentSoft/10" : "border-borderStrong text-textSecondary"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <textarea
              placeholder="Reasoning, risks identified, assumptions made, and what you'd tell your supervisor afterward"
              value={reasoning}
              onChange={(e) => setReasoning(e.target.value)}
              className="w-full bg-surfaceRaised border border-borderStrong rounded px-3 py-2 text-sm text-text"
              rows={4}
            />
            <button
              disabled={!choice || !reasoning}
              onClick={() => setSubmitted(true)}
              className="bg-accent hover:bg-accentHover disabled:opacity-40 px-4 py-2 rounded text-sm font-medium text-text"
            >
              Submit Decision
            </button>
          </>
        ) : (
          <div className="border-t border-border pt-3 text-sm text-textSecondary">
            <p className="text-success text-xs mono uppercase mb-1">Submitted — awaiting supervisor review</p>
            <p>Decision: {choice}</p>
            <p className="mt-1">{reasoning}</p>
          </div>
        )}
      </div>
    </>
  );
}