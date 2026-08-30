import React, { createContext, useContext, useState } from "react";
import type { Role, Task } from "../types";
import { tasks as initialTasks } from "../data/mockData";

interface AppStateShape {
  role: Role;
  setRole: (r: Role) => void;
  gamificationOn: boolean;
  setGamificationOn: (v: boolean) => void;
  tasks: Task[];
  moveTask: (id: string, status: Task["status"]) => void;
}

const AppStateContext = createContext<AppStateShape | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>("Intern");
  const [gamificationOn, setGamificationOn] = useState(true);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  function moveTask(id: string, status: Task["status"]) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  }

  return (
    <AppStateContext.Provider value={{ role, setRole, gamificationOn, setGamificationOn, tasks, moveTask }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used within AppStateProvider");
  return ctx;
}