import { HashRouter, Routes, Route } from "react-router-dom";
import { AppStateProvider } from "./state/AppState";
import { AppShell } from "./components/layout/AppShell";

import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import Planner from "./pages/Planner";
import Capstones from "./pages/Capstones";
import Learning from "./pages/Learning";
import AIMentor from "./pages/AIMentor";
import Questions from "./pages/Questions";
import CalendarPage from "./pages/Calendar";
import DailyLog from "./pages/DailyLog";
import DriveWorkspace from "./pages/DriveWorkspace";
import Community from "./pages/Community";
import Announcements from "./pages/Announcements";
import Resources from "./pages/Resources";
import InternTalks from "./pages/InternTalks";
import Reviews from "./pages/Reviews";
import Portfolio from "./pages/Portfolio";
import Progression from "./pages/Progression";
import WorkTransfer from "./pages/simulations/WorkTransfer";
import UrgentDecision from "./pages/simulations/UrgentDecision";
import SupervisorDashboard from "./pages/supervisor/SupervisorDashboard";
import Personalization from "./pages/supervisor/Personalization";
import StarterProjects from "./pages/supervisor/StarterProjects";
import Permissions from "./pages/supervisor/Permissions";
import AuditTrail from "./pages/supervisor/AuditTrail";

export default function App() {
  return (
    <AppStateProvider>
      <HashRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/capstones" element={<Capstones />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/mentor" element={<AIMentor />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/daily-log" element={<DailyLog />} />
            <Route path="/drive" element={<DriveWorkspace />} />
            <Route path="/community" element={<Community />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/talks" element={<InternTalks />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/progression" element={<Progression />} />
            <Route path="/simulations/work-transfer" element={<WorkTransfer />} />
            <Route path="/simulations/urgent-decision" element={<UrgentDecision />} />
            <Route path="/supervisor" element={<SupervisorDashboard />} />
            <Route path="/supervisor/personalization" element={<Personalization />} />
            <Route path="/supervisor/starter-projects" element={<StarterProjects />} />
            <Route path="/supervisor/permissions" element={<Permissions />} />
            <Route path="/supervisor/audit" element={<AuditTrail />} />
          </Route>
        </Routes>
      </HashRouter>
    </AppStateProvider>
  );
}