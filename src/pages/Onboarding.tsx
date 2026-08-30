import { PageHeader } from "../components/ui/PageHeader";
import { Pipeline } from "../components/ui/Pipeline";
import { intern } from "../data/mockData";

export default function Onboarding() {
  return (
    <>
      <PageHeader title="Onboarding" subtitle="Day 1 → Supervisor Approved" />
      <Pipeline items={[
        { name: "Company & program overview", state: "done" },
        { name: "How-We-Work reference card", state: "done" },
        { name: "Supervisor & Drive workspace linked", state: "done" },
        { name: "First technical task", state: "done" },
        { name: "Supervisor sign-off", state: "current" },
      ]} />
      <div className="mt-6 text-sm text-textSecondary space-y-1">
        <p>Supervisor: <span className="text-text">{intern.supervisor}</span></p>
        <p>Drive folder: <span className="mono text-textMuted">Interns/{intern.name}</span></p>
      </div>
    </>
  );
}