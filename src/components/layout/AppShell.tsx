import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function AppShell() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <Topbar />
        <main className="px-8 py-6 max-w-5xl mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}