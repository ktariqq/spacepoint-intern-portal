import { useState } from "react";

import { NavLink } from "react-router-dom";

import {
  LayoutDashboard, ClipboardCheck, Kanban, Rocket, CalendarClock, HardDrive,
  BookOpen, Bot, Library, TrendingUp, HelpCircle, Calendar, Users, Megaphone,
  Presentation, ClipboardList, RefreshCw, AlertTriangle, Award,
  ShieldCheck, ListChecks, Boxes, Lock, History,
  ChevronDown, ChevronRight, ChevronsLeft, ChevronsRight, LogOut,
} from "lucide-react";

import { useAppState } from "../../state/AppState";

import logo from "../../assets/spacepoint-logo.png";

type NavItem = { to: string; label: string; icon: React.ComponentType<{ size?: number }> };
type NavSection = { label: string; items: NavItem[] };

const INTERN_SECTIONS: NavSection[] = [
  { label: "Overview", items: [
    { to: "/", label: "Dashboard", icon: LayoutDashboard },
    { to: "/onboarding", label: "Onboarding", icon: ClipboardCheck },
  ]},
  { label: "Work", items: [
    { to: "/planner", label: "Tasks & Planner", icon: Kanban },
    { to: "/capstones", label: "Capstones", icon: Rocket },
    { to: "/daily-log", label: "Daily Log", icon: CalendarClock },
    { to: "/drive", label: "Drive Workspace", icon: HardDrive },
  ]},
  { label: "Grow", items: [
    { to: "/learning", label: "Learning", icon: BookOpen },
    { to: "/mentor", label: "AI Mentor", icon: Bot },
    { to: "/resources", label: "Resources", icon: Library },
    { to: "/progression", label: "Progression", icon: TrendingUp },
  ]},
  { label: "Connect", items: [
    { to: "/questions", label: "Questions", icon: HelpCircle },
    { to: "/calendar", label: "Calendar", icon: Calendar },
    { to: "/community", label: "Community", icon: Users },
    { to: "/announcements", label: "Announcements", icon: Megaphone },
    { to: "/talks", label: "Intern Talks", icon: Presentation },
    { to: "/reviews", label: "Reviews", icon: ClipboardList },
  ]},
  { label: "Readiness", items: [
    { to: "/simulations/work-transfer", label: "Work Transfer", icon: RefreshCw },
    { to: "/simulations/urgent-decision", label: "Urgent Decision", icon: AlertTriangle },
  ]},
  { label: "Career", items: [
    { to: "/portfolio", label: "Portfolio", icon: Award },
  ]},
];

const SUPERVISOR_SECTION: NavSection = {
  label: "Supervisor",
  items: [
    { to: "/supervisor", label: "Supervisor Dashboard", icon: ShieldCheck },
    { to: "/supervisor/personalization", label: "Plan Generation", icon: ListChecks },
    { to: "/supervisor/starter-projects", label: "Starter Projects", icon: Boxes },
    { to: "/supervisor/permissions", label: "Permissions", icon: Lock },
    { to: "/supervisor/audit", label: "Audit Trail", icon: History },
  ],
};

export function Sidebar() {
  const { role } = useAppState();

  const sections =
    role === "Supervisor"
      ? [...INTERN_SECTIONS, SUPERVISOR_SECTION]
      : INTERN_SECTIONS;

  const [collapsed, setCollapsed] = useState(false);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    Object.fromEntries(sections.map((s) => [s.label, true]))
  );

  function toggleSection(label: string) {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  }

  return (
    <>
      {/* Permanent company logo */}
      <div className="fixed left-3 top-5 z-50">
        <img
          src={logo}
          alt="SpacePoint"
          className="w-36 h-auto object-contain shrink-0"
        />
      </div>

      {/* Expand button when sidebar is hidden */}
      {collapsed && (
        <button
          onClick={() => setCollapsed(false)}
          className="fixed left-3 top-[68px] z-50 flex items-center justify-center rounded-lg p-2 text-textSecondary hover:bg-surfaceRaised hover:text-text"
          title="Expand Sidebar"
          aria-label="Expand Sidebar"
        >
          <ChevronsRight size={16} />
        </button>
      )}

      {/* Sidebar */}
      {!collapsed && (
        <aside
          className="shrink-0 bg-surface border-r border-border h-screen sticky top-0 flex flex-col w-60"
        >
          {/* Logo space */}
          <div className="px-3 pt-5 pb-12">
            <div className="w-36 h-auto" />
          </div>

          {/* Nav */}
          <nav className="flex-1 overflow-y-auto px-2 pb-2">
            {sections.map((section) => {
              const isOpen = openSections[section.label];

              return (
                <div key={section.label} className="mb-1">
                  <button
                    onClick={() => toggleSection(section.label)}
                    className="w-full flex items-center justify-between px-2 py-1.5 text-[10px] uppercase tracking-widest text-textMuted font-semibold hover:text-textSecondary"
                  >
                    {section.label}
                    {isOpen ? (
                      <ChevronDown size={12} />
                    ) : (
                      <ChevronRight size={12} />
                    )}
                  </button>

                  {isOpen && (
                    <div>
                      {section.items.map(({ to, label, icon: Icon }) => (
                        <NavLink
                          key={to}
                          to={to}
                          end={to === "/" || to === "/supervisor"}
                          aria-label={label}
                          className={({ isActive }) =>
                            `flex items-center gap-2.5 rounded-lg text-sm mb-0.5 transition-colors px-2.5 py-1.5 ${
                              isActive
                                ? "bg-accent/15 text-accentSoft font-medium shadow-[0_0_0_1px_rgba(139,92,246,0.25)]"
                                : "text-textSecondary hover:bg-surfaceRaised hover:text-text"
                            }`
                          }
                        >
                          <Icon size={16} />
                          <span>{label}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="border-t border-border px-2 py-2">
            <button
              onClick={() => setCollapsed(true)}
              className="flex items-center gap-2.5 rounded-lg text-sm text-textSecondary hover:bg-surfaceRaised hover:text-text w-full mb-0.5 px-2.5 py-1.5"
            >
              <ChevronsLeft size={16} />
              <span>Collapse</span>
            </button>

            <button
              className="flex items-center gap-2.5 rounded-lg text-sm text-textSecondary hover:bg-surfaceRaised hover:text-text w-full px-2.5 py-1.5"
              title="Sign Out"
            >
              <LogOut size={16} />
              <span>Sign Out</span>
            </button>
          </div>
        </aside>
      )}
    </>
  );
}