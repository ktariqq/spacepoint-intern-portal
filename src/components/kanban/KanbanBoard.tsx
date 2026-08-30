import { DndContext, closestCenter } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Task, TaskStatus } from "../../types";

const COLUMNS: TaskStatus[] = ["Backlog", "Planned", "In Progress", "Review", "Complete"];
const PRIORITY_COLOR = { High: "text-error", Medium: "text-warning", Low: "text-success" } as const;

function SortableCard({ task }: { task: Task }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });
  const style = { transform: CSS.Transform.toString(transform), transition };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}
      className="bg-surfaceRaised border border-border rounded px-3 py-2.5 cursor-grab active:cursor-grabbing">
      <p className="text-sm text-text mb-2 leading-snug">{task.title}</p>
      <div className="flex justify-between items-center">
        <span className="text-[10px] mono text-textMuted">{task.tag}</span>
        <span className={`text-[10px] mono uppercase ${PRIORITY_COLOR[task.priority]}`}>{task.priority}</span>
      </div>
      {!task.official && <span className="text-[10px] mono text-accentSoft block mt-1">Intern-added</span>}
    </div>
  );
}

export function KanbanBoard({ tasks, onMove }: { tasks: Task[]; onMove: (id: string, status: TaskStatus) => void }) {
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;
    const overColumn = COLUMNS.find((c) => c === over.id) ??
      tasks.find((t) => t.id === over.id)?.status;
    if (overColumn) onMove(active.id as string, overColumn);
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {COLUMNS.map((col) => {
          const colTasks = tasks.filter((t) => t.status === col);
          return (
            <div key={col} id={col} className="flex-1 min-w-[210px] bg-surface border border-border rounded p-3">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-textSecondary">{col}</span>
                <span className="text-[10px] mono text-textMuted bg-surfaceRaised rounded px-1.5 py-0.5">{colTasks.length}</span>
              </div>
              <SortableContext items={colTasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
                <div className="flex flex-col gap-2 min-h-[60px]">
                  {colTasks.length === 0 && <p className="text-xs text-textMuted text-center py-4">Empty</p>}
                  {colTasks.map((t) => <SortableCard key={t.id} task={t} />)}
                </div>
              </SortableContext>
            </div>
          );
        })}
      </div>
    </DndContext>
  );
}