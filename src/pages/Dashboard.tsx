import { PageHeader } from "../components/ui/PageHeader";
import { Pipeline } from "../components/ui/Pipeline";
import { intern, capstones } from "../data/mockData";

export default function Dashboard() {
  const cap = capstones[0];
  return (
    <>
      <PageHeader title="Dashboard" subtitle={`${intern.track} · ${intern.week}`} />

      <div className="border border-border rounded bg-surface p-4 mb-6">
        <p className="text-xs uppercase tracking-wide text-textMuted mb-1">Next action</p>
        <p className="text-sm text-text">Finish the ESP32 int8 quantization — due Aug 31, currently in progress.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <Metric label="Capstone Progress" value={`${cap.progress}%`} sub="Firmware stage in progress" />
        <Metric label="Tasks Due" value="2" sub="This week" />
        <Metric label="Submissions" value="1" sub="Changes requested" />
      </div>

      <p className="text-sm font-semibold uppercase tracking-wide text-textSecondary border-b border-border pb-2 mb-3">
        Capstone Pipeline — {cap.title}
      </p>
      <Pipeline items={cap.milestones} />

      <p className="text-sm font-semibold uppercase tracking-wide text-textSecondary border-b border-border pb-2 mb-3 mt-8">
        This Week
      </p>
      <ul className="text-sm text-textSecondary space-y-1.5 list-disc pl-5">
        <li>Mentor review — Friday, 16:00</li>
        <li>Intern talk — Wednesday, 14:00</li>
        <li>Capstone checkpoint — Sunday</li>
      </ul>
    </>
  );
}

function Metric({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="border border-border rounded bg-surface p-4">
      <p className="text-[11px] uppercase tracking-wide text-textMuted mb-1">{label}</p>
      <p className="text-2xl font-semibold mono text-text">{value}</p>
      <p className="text-xs text-textMuted mt-1">{sub}</p>
    </div>
  );
}