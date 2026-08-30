import { PageHeader } from "../components/ui/PageHeader";
import { capstones } from "../data/mockData";

const FOLDERS = ["Onboarding", "Daily Logs", "Capstone 1", "Resources", "Other Work"];

export default function DriveWorkspace() {
  return (
    <>
      <PageHeader title="Drive Workspace" subtitle={capstones[0].driveFolder} />
      <div className="space-y-2">
        {FOLDERS.map((f) => (
          <div key={f} className="flex items-center justify-between border border-border rounded bg-surface px-4 py-3">
            <span className="text-sm text-text">{f}</span>
            <a href="#" className="text-xs text-accentSoft underline">Open in Drive</a>
          </div>
        ))}
      </div>
    </>
  );
}