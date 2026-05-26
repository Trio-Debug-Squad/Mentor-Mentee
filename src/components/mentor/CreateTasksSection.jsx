import { useState } from "react";
import StatusBadge from "../ui/StatusBadge";
import { mentees } from "../../data/mentorData";

const inputClass =
  "w-full px-3.5 py-3 rounded-xl border border-slate-200 text-sm outline-none transition-colors focus:border-indigo-400 bg-white";

export default function CreateTasksSection({ tasks, onCreateTask }) {
  const [desc, setDesc] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [selectedMentee, setSelectedMentee] = useState("");

  const handleCreate = () => {
    if (!desc || !selectedMentee) {
      alert("Please provide a description and select a mentee.");
      return;
    }
    onCreateTask({ desc, deadline, priority, mentee: selectedMentee });
    setDesc("");
    setDeadline("");
    setPriority("Medium");
    setSelectedMentee("");
  };

  return (
    <div
      className="ml-8 bg-white rounded-2xl p-8 border border-slate-100 mb-8"
      style={{ boxShadow: "0 2px 16px rgba(99,102,241,0.07)" }}
    >
      <h2 className="m-0 mb-6 text-xl font-black text-slate-800">
        Create New Task
      </h2>

      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <div className="flex-1">
            <label className="block text-xs font-semibold text-slate-500 mb-1.5">
              Task Title / Description
            </label>
            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Task description…"
              className={inputClass}
              style={{ fontFamily: "inherit" }}
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-semibold text-slate-500 mb-1.5">
              Assign To Mentee
            </label>
            <select
              value={selectedMentee}
              onChange={(e) => setSelectedMentee(e.target.value)}
              className={inputClass}
              style={{ fontFamily: "inherit" }}
            >
              <option value="">-- Choose Mentee --</option>
              {mentees.map((m) => (
                <option key={m.id} value={m.name}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex-1">
            <label className="block text-xs font-semibold text-slate-500 mb-1.5">
              Deadline
            </label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className={inputClass}
              style={{ fontFamily: "inherit" }}
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-semibold text-slate-500 mb-1.5">
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className={inputClass}
              style={{ fontFamily: "inherit" }}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1.5">
            Attachments
          </label>
          <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center text-slate-400 cursor-pointer hover:border-indigo-400 transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="mx-auto mb-3"
            >
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
            <span className="text-xs font-medium">
              Drag & drop files here or click to upload
            </span>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1.5">
            (Optional) Link Guideline
          </label>
          <input
            placeholder="https://…"
            className={inputClass}
            style={{ fontFamily: "inherit" }}
          />
        </div>

        <button
          onClick={handleCreate}
          className="self-start border-0 rounded-xl px-6 py-3.5 font-bold text-sm text-white cursor-pointer mt-2"
          style={{
            background: "linear-gradient(135deg, #6366f1, #818cf8)",
            boxShadow: "0 4px 14px rgba(99,102,241,0.3)",
            fontFamily: "inherit",
          }}
        >
          Create Task
        </button>
      </div>

      {/* Created tasks list */}
      <h3 className="mt-8 mb-4 text-base font-black text-slate-800">
        Created Tasks
      </h3>
      {tasks.length === 0 ? (
        <p className="text-slate-500 text-sm">No tasks created yet.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {tasks.map((t) => (
            <div
              key={t.id}
              className="flex justify-between items-center px-4 py-4 bg-slate-50 rounded-xl border border-slate-200"
            >
              <div>
                <div className="font-bold text-slate-800 text-sm">
                  {t.title}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Assigned to: {t.mentee} • Deadline: {t.deadline}
                </div>
              </div>
              <StatusBadge status={t.status} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
