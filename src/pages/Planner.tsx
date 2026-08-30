import { PageHeader } from "../components/ui/PageHeader";
import { KanbanBoard } from "../components/kanban/KanbanBoard";
import { useAppState } from "../state/AppState";

export default function Planner() {
  const { tasks, moveTask } = useAppState();
  return (
    <>
      <PageHeader title="Tasks & Planner" subtitle="Your execution plan — supervisor deadlines remain authoritative" />
      <KanbanBoard tasks={tasks} onMove={moveTask} />
    </>
  );
}