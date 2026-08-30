export type Role = "Intern" | "Supervisor";
export type TaskStatus = "Backlog" | "Planned" | "In Progress" | "Review" | "Complete";
export type Priority = "Low" | "Medium" | "High";
export type SubmissionStatus = "Pending Review" | "Approved" | "Changes Requested" | "Rejected";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  deadline: string;
  official: boolean; // official supervisor requirement vs intern-added subtask
  capstoneId?: string;
  tag: string;
}

export interface Milestone {
  name: string;
  state: "done" | "current" | "pending";
}

export interface Capstone {
  id: string;
  title: string;
  domain: string;
  progress: number;
  milestones: Milestone[];
  driveFolder: string;
}

export interface Submission {
  id: string;
  capstoneId: string;
  title: string;
  status: SubmissionStatus;
  submittedAt: string;
  note: string;
  feedback?: string;
}

export interface LearningResource {
  id: string;
  title: string;
  domain: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  minutes: number;
  requiredFor?: string;
  completed: boolean;
}

export interface Question {
  id: string;
  text: string;
  context: string;
  author: string;
  date: string;
  status: "Open" | "Answered";
  answer?: string;
  responder?: string;
}

export interface CalendarEvent {
  day: number;
  label: string;
  kind: "review" | "workshop" | "deadline" | "talk";
}

export interface DailyLogEntry {
  date: string;
  hours: number;
  task: string;
  notes: string;
  blockers: string;
}