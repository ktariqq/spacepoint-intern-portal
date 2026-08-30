import { Bell, Moon, ChevronDown } from "lucide-react";
import { useAppState } from "../../state/AppState";
import { intern } from "../../data/mockData";

export function Topbar() {
  const { role, setRole, gamificationOn, setGamificationOn } = useAppState();

  const initials = intern.name.split(" ").map((n) => n[0]).join("");

  return (
    <div className="flex justify-end items-center gap-4 border-b border-border px-6 py-3 bg-bg">
      <label className="flex items-center gap-2 text-xs text-textSecondary mr-2">
        Gamification
        <input type="checkbox" checked={gamificationOn} onChange={(e) => setGamificationOn(e.target.checked)} />
      </label>

      <button className="relative text-textSecondary hover:text-text">
        <Bell size={17} />
        <span className="absolute -top-1 -right-1.5 bg-accent text-[9px] text-white rounded-full px-1 leading-tight mono">3</span>
      </button>

      <div className="relative">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as "Intern" | "Supervisor")}
          className="appearance-none bg-surfaceRaised border border-borderStrong rounded-full pl-3 pr-7 py-1.5 text-xs text-text cursor-pointer"
        >
          <option value="Intern">Intern</option>
          <option value="Supervisor">Supervisor</option>
        </select>
        <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-textMuted" />
      </div>

      <button className="text-textSecondary hover:text-text">
        <Moon size={16} />
      </button>

      <div className="text-right leading-tight">
        <p className="text-sm font-semibold text-text">{intern.name}</p>
        <p className="text-[10px] uppercase tracking-wide text-accentSoft">{role}</p>
      </div>

      <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-semibold shrink-0">
        {initials}
      </div>
    </div>
  );
}