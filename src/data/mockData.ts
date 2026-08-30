import type {
  Task,
  Capstone,
  Submission,
  LearningResource,
  Question,
  CalendarEvent,
  DailyLogEntry,
} from "../types";

export const intern = {
  name: "Kommal Tariq",
  role: "Intern",
  track: "Embedded Systems & Remote Sensing",
  supervisor: "Abdullah AlSalmani",
  week: "Week 6 of 8",
  xp: 340,
  xpTarget: 500,
};

export const capstones: Capstone[] = [
  {
    id: "cap-1",
    title: "Edge AI Land Cover Classification",
    domain: "Embedded Systems / Remote Sensing",
    progress: 63,
    driveFolder: "SpacePoint Internship / Interns / Kommal Tariq / Capstone 1",
    milestones: [
      { name: "Requirements", state: "done" },
      { name: "Sensor Selection", state: "done" },
      { name: "Hardware Design", state: "done" },
      { name: "Firmware", state: "current" },
      { name: "Data Acquisition", state: "pending" },
      { name: "Analysis", state: "pending" },
      { name: "Testing", state: "pending" },
      { name: "Final Documentation", state: "pending" },
    ],
  },
];

export const tasks: Task[] = [
  { id: "t1", title: "Literature review: FPGA accelerators for onboard inference", description: "Survey existing FPGA-based classifiers relevant to the land-cover pipeline.", status: "Backlog", priority: "Low", deadline: "Sep 2", official: true, capstoneId: "cap-1", tag: "Research" },
  { id: "t2", title: "Draft Task 9 mapping page notes", description: "Outline the mapping tool page for the Streamlit app.", status: "Backlog", priority: "Medium", deadline: "Sep 4", official: false, capstoneId: "cap-1", tag: "Software" },
  { id: "t3", title: "Wire OV2640 camera module to ESP32", description: "Confirm pinout against the wiring schematic from Task 6.", status: "Planned", priority: "Medium", deadline: "Sep 3", official: true, capstoneId: "cap-1", tag: "Hardware" },
  { id: "t4", title: "Quantize ESP32 land-cover model to int8", description: "Convert the trained model to TFLite Micro, verify accuracy loss stays acceptable.", status: "In Progress", priority: "High", deadline: "Aug 31", official: true, capstoneId: "cap-1", tag: "Embedded" },
  { id: "t5", title: "Generate X-CUBE-AI flash/RAM report", description: "Compare small/medium/large candidate models for the STM32H743 tier.", status: "In Progress", priority: "Medium", deadline: "Sep 1", official: true, capstoneId: "cap-1", tag: "Embedded" },
  { id: "t6", title: "Phase 0 dataset augmentation script", description: "Add rotation/flip/brightness augmentation to the training set builder.", status: "Review", priority: "Medium", deadline: "Aug 29", official: true, capstoneId: "cap-1", tag: "Data" },
  { id: "t7", title: "Payload CAD enclosure (Task 5)", description: "Finalize the FreeCAD enclosure model.", status: "Complete", priority: "Low", deadline: "Aug 20", official: true, capstoneId: "cap-1", tag: "Hardware" },
  { id: "t8", title: "Wiring schematic (Task 6)", description: "KiCad schematic for sensor and camera wiring.", status: "Complete", priority: "Low", deadline: "Aug 18", official: true, capstoneId: "cap-1", tag: "Hardware" },
];

export const submissions: Submission[] = [
  { id: "s1", capstoneId: "cap-1", title: "Phase 0 dataset augmentation script", status: "Changes Requested", submittedAt: "Aug 27", note: "Added rotation and brightness augmentation, held-out split included.", feedback: "See comment on the split ratio — 80/20 is too tight for this class balance, try 70/30." },
  { id: "s2", capstoneId: "cap-1", title: "Wiring schematic (Task 6)", status: "Approved", submittedAt: "Aug 18", note: "KiCad schematic + PDF export attached." },
];

export const learningResources: LearningResource[] = [
  { id: "l1", title: "TensorFlow Lite Micro — Getting Started", domain: "Embedded Systems", difficulty: "Intermediate", minutes: 25, requiredFor: "Quantize ESP32 land-cover model", completed: true },
  { id: "l2", title: "X-CUBE-AI Workflow (ST)", domain: "Embedded Systems", difficulty: "Intermediate", minutes: 20, requiredFor: "X-CUBE-AI flash/RAM report", completed: false },
  { id: "l3", title: "nyc-sentinel: Jetson Land Cover Pipeline", domain: "Remote Sensing", difficulty: "Advanced", minutes: 40, completed: false },
  { id: "l4", title: "IDW Interpolation for Heat Maps", domain: "GIS", difficulty: "Beginner", minutes: 15, completed: true },
  { id: "l5", title: "ADCS Fundamentals", domain: "Satellite Engineering", difficulty: "Intermediate", minutes: 35, completed: false },
];

export const questions: Question[] = [
  { id: "q1", text: "Why SPI instead of I2C for this sensor?", context: "Wiring schematic (Task 6)", author: "Kommal Tariq", date: "Aug 15", status: "Answered", answer: "SPI gives us the sample rate we need for the IMU stream; I2C would bottleneck at this update rate.", responder: "Abdullah AlSalmani" },
  { id: "q2", text: "Should the augmentation split be stratified by class?", context: "Phase 0 dataset augmentation script", author: "Kommal Tariq", date: "Aug 27", status: "Open" },
];

export const calendarEvents: CalendarEvent[] = [
  { day: 5, label: "RF Workshop", kind: "workshop" },
  { day: 12, label: "Mentor Review", kind: "review" },
  { day: 14, label: "Intern Talk", kind: "talk" },
  { day: 19, label: "Mentor Review", kind: "review" },
  { day: 21, label: "Capstone Checkpoint", kind: "deadline" },
  { day: 26, label: "Mentor Review", kind: "review" },
  { day: 28, label: "CubeSat ADCS Workshop", kind: "workshop" },
];

export const dailyLogs: DailyLogEntry[] = [
  { date: "Aug 27", hours: 6, task: "Sensor firmware", notes: "Completed SPI test, readings stable across 3 trials.", blockers: "" },
  { date: "Aug 26", hours: 5.5, task: "Dataset augmentation", notes: "Rotation + brightness variants added.", blockers: "Split ratio flagged in review." },
  { date: "Aug 25", hours: 6, task: "X-CUBE-AI candidates", notes: "Ran small/medium model comparison.", blockers: "" },
];

export const internTalks = [
  { title: "Lessons from Debugging an ESP32 Sensor System", presenter: "Kommal Tariq", date: "Sep 2", status: "Upcoming" as const },
  { title: "How CubeSat ADCS Works", presenter: "Youssef Nabil", date: "Aug 20", status: "Past" as const },
];

export const announcements = [
  { title: "CubeSat ADCS Fundamentals workshop, Thu 15:30", date: "Aug 26", mandatory: false },
  { title: "Cohort submission deadline moved to Sep 15", date: "Aug 24", mandatory: true },
];

export const communityPosts = [
  { title: "CV land-cover overlay pipeline — feedback wanted", author: "Kommal Tariq", replies: 4 },
  { title: "Anyone else hitting flash overflow on X-CUBE-AI medium model?", author: "Youssef Nabil", replies: 2 },
];

export const portfolioItems = {
  completedCapstones: ["Payload CAD & Enclosure", "Wiring & Firmware (Task 6)"],
  inProgress: "Edge AI Land Cover Classification",
  feedback: "Strong grasp of the hardware/software boundary. — Abdullah AlSalmani",
};

export const starterProjects = [
  { title: "Environmental Sensor", domain: "Embedded Systems", skills: ["C/C++", "Sensors"] },
  { title: "ESP32 Data Logger", domain: "Embedded Systems", skills: ["C/C++", "SPI/I2C"] },
  { title: "Satellite Image Classification", domain: "Remote Sensing / AI-ML", skills: ["Python", "CV"] },
  { title: "REST API", domain: "Software", skills: ["TypeScript", "Databases"] },
];

export const profileSkills = { python: "Advanced", cpp: "Intermediate", ml: "Advanced", gis: "Beginner", cad: "None" };

export const cohort = [
  { name: "Kommal Tariq", capstone: "Edge AI Land Cover Classification", progress: 63, blockers: 0 },
  { name: "Youssef Nabil", capstone: "CubeSat ADCS Fundamentals Demo", progress: 41, blockers: 1 },
];

export const planProposals = [
  { intern: "Youssef Nabil", capstone: "ADCS Attitude Estimation Demo", basedOn: "Python: Advanced, Controls: Intermediate, CAD: None", status: "Awaiting Approval" },
];

export const auditLog = [
  { action: "Submission status changed to Changes Requested", actor: "Abdullah AlSalmani", time: "Aug 27, 14:02", object: "Phase 0 dataset augmentation script" },
  { action: "Mentor status granted", actor: "Abdullah AlSalmani", time: "Aug 20, 10:15", object: "Youssef Nabil" },
  { action: "Plan approved", actor: "Abdullah AlSalmani", time: "Aug 10, 09:40", object: "Kommal Tariq — Edge AI Land Cover Classification" },
];

export const workTransferScenario = {
  title: "Incomplete Sensor Firmware Handoff",
  domain: "Embedded Systems",
  deadlineHours: 48,
  provided: ["handoff_notes.md", "README.md", "prior test results (CSV)", "GitHub repository (branch: firmware-wip)"],
  expected: ["Firmware compiles", "Sensor readings validate against prior test data", "Changes documented in handoff_notes.md"],
};

export const urgentDecisionScenario = {
  situation: "Sensor readings appear unstable shortly before a scheduled validation run. Abdullah is in an external meeting and unreachable for the next two hours. The test window closes in 90 minutes.",
  information: ["Readings drifted ~12% over the last 3 samples", "No error flags from the sensor driver", "A diagnostic procedure exists in the Task 6 documentation but hasn't been run today"],
  constraints: ["Test window closes in 90 minutes", "Supervisor unreachable", "Rescheduling costs a full week on the shared test rig"],
};