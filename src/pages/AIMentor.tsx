import { useState } from "react";
import { PageHeader } from "../components/ui/PageHeader";

const REPLIES = [
  "Here's a diagnostic question to start with: what does the error say, and at which step does it first appear?",
  "That's worth checking against the held-out validation set first — is the drift consistent across classes or concentrated in one?",
  "I can suggest a resource for that, but I'd flag this as something to bring to your next mentor review too.",
];

export default function AIMentor() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "What are you working on? I can explain a concept, suggest a resource, or help break down a task." },
  ]);
  const [input, setInput] = useState("");

  function send() {
    if (!input.trim()) return;
    const reply = REPLIES[messages.length % REPLIES.length];
    setMessages((m) => [...m, { role: "user", text: input }, { role: "assistant", text: reply }]);
    setInput("");
  }

  return (
    <>
      <PageHeader title="AI Mentor" subtitle="Engineering assistance — not supervisory approval" meta={["Read-only", "Scoped to your tasks & capstone"]} />
      <div className="border border-border rounded bg-surface p-4 mb-4 space-y-3 max-h-96 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={`text-sm ${m.role === "user" ? "text-text" : "text-textSecondary"}`}>
            <span className="text-[10px] mono uppercase text-textMuted block mb-0.5">{m.role === "user" ? "You" : "AI Mentor"}</span>
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask the mentor..."
          className="flex-1 bg-surfaceRaised border border-borderStrong rounded px-3 py-2 text-sm text-text"
        />
        <button onClick={send} className="bg-accent hover:bg-accentHover px-4 py-2 rounded text-sm font-medium text-text">Send</button>
      </div>
    </>
  );
}