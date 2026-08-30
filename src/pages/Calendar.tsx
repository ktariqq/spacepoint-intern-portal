import { PageHeader } from "../components/ui/PageHeader";
import { calendarEvents } from "../data/mockData";

const KIND_COLOR = { review: "bg-accentSoft", workshop: "bg-success", deadline: "bg-error", talk: "bg-warning" } as const;
const KIND_LABEL = { review: "Mentor Review", workshop: "Workshop", deadline: "Deadline", talk: "Intern Talk" } as const;

export default function CalendarPage() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const leading = 5; // August 2026 starts on a Saturday-ish offset for the mockup grid

  return (
    <>
      <PageHeader title="Calendar & Events" subtitle="Synced conceptually with Google Calendar" />
      <div className="grid grid-cols-7 gap-1.5 mb-2">
        {["MON","TUE","WED","THU","FRI","SAT","SUN"].map((d) => (
          <div key={d} className="text-[10px] mono text-textMuted text-center pb-1">{d}</div>
        ))}
        {Array.from({ length: leading }).map((_, i) => <div key={`b${i}`} />)}
        {days.map((d) => {
          const evs = calendarEvents.filter((e) => e.day === d);
          return (
            <div key={d} className={`border rounded p-1.5 min-h-[70px] ${d === 27 ? "border-accentSoft" : "border-border"} bg-surface`}>
              <p className="text-xs mono text-textSecondary">{d}</p>
              {evs.map((e) => (
                <div key={e.label} className="flex items-center gap-1 mt-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${KIND_COLOR[e.kind]}`} />
                  <span className="text-[10px] text-textSecondary truncate">{e.label}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="flex gap-5 mt-3">
        {Object.entries(KIND_LABEL).map(([k, label]) => (
          <span key={k} className="flex items-center gap-1.5 text-xs text-textSecondary">
            <span className={`w-1.5 h-1.5 rounded-full ${KIND_COLOR[k as keyof typeof KIND_COLOR]}`} />
            {label}
          </span>
        ))}
      </div>
    </>
  );
}