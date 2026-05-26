import { useState } from "react";
import Avatar from "../ui/Avatar";
import ProgressBar from "../ui/ProgressBar";
import StatusBadge from "../ui/StatusBadge";
import MentorStatCard from "../ui/MentorStatCard";
import {
  mentees,
  mentorStatCards,
  immediateActions,
} from "../../data/mentorData";

export default function MentorOverview({ projects }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [completedActions, setCompletedActions] = useState([]);

  const filteredMentees = mentees.filter(
    (m) =>
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.project.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const toggleAction = (id) =>
    setCompletedActions((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  return (
    <div>
      {/* Stat cards */}
      <div className="flex gap-5 mb-7 flex-wrap pl-8">
        {mentorStatCards.map((s) => (
          <MentorStatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Assigned projects */}
      <div
        className="bg-white rounded-2xl p-7 border border-slate-100 ml-8 mb-7"
        style={{ boxShadow: "0 2px 16px rgba(99,102,241,0.07)" }}
      >
        <h2 className="m-0 mb-4 text-base font-black text-slate-800">
          My Assigned Projects (Assigned by Admin)
        </h2>
        {projects.length === 0 ? (
          <p className="text-slate-500 text-sm">No projects assigned yet.</p>
        ) : (
          <div className="flex gap-4 flex-wrap">
            {projects.map((p) => (
              <div
                key={p.id}
                className="p-4 border border-slate-200 rounded-xl min-w-48"
              >
                <div className="text-sm font-bold text-slate-800 mb-1.5">
                  {p.name}
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  Status: <StatusBadge status={p.status} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mentees table + actions */}
      <div className="flex gap-5 items-start ml-8">
        {/* Table */}
        <div
          className="flex-1 bg-white rounded-2xl border border-slate-100 overflow-hidden"
          style={{ boxShadow: "0 2px 16px rgba(99,102,241,0.07)" }}
        >
          <div className="px-7 pt-6 pb-4 flex justify-between items-center">
            <h2 className="m-0 text-base font-black text-slate-800">
              Current Mentees Overview
            </h2>
            <input
              placeholder="Search mentees…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3.5 py-2 rounded-xl border border-slate-200 outline-none text-xs text-slate-600 bg-slate-50 w-44"
              style={{ fontFamily: "inherit" }}
            />
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50">
                {[
                  "#",
                  "Mentee Name",
                  "Assigned Project",
                  "Last Meeting",
                  "Progress",
                  "Status",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left text-xs font-bold text-slate-400 tracking-wide border-b border-slate-100"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredMentees.map((m, i) => (
                <tr
                  key={m.id}
                  className="border-b border-slate-50 cursor-pointer transition-colors hover:bg-indigo-50/30"
                >
                  <td className="px-4 py-3.5 text-xs text-slate-400 font-semibold">
                    {i + 1}.
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <Avatar initials={m.avatar} color={m.color} size={34} />
                      <span className="font-semibold text-slate-800 text-sm">
                        {m.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-xs text-slate-500">
                    {m.project}
                  </td>
                  <td className="px-4 py-3.5 text-xs text-slate-500">
                    {m.lastMeeting}
                  </td>
                  <td className="px-4 py-3.5">
                    <ProgressBar value={m.progress} />
                  </td>
                  <td className="px-4 py-3.5">
                    <StatusBadge status={m.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Immediate actions */}
        <div
          className="w-64 bg-white rounded-2xl border border-slate-100 p-6 flex-shrink-0"
          style={{ boxShadow: "0 2px 16px rgba(99,102,241,0.07)" }}
        >
          <h2 className="m-0 mb-4 text-sm font-black text-slate-800">
            Immediate Actions
          </h2>
          <div className="flex flex-col gap-3">
            {immediateActions.map((action) => {
              const done = completedActions.includes(action.id);
              return (
                <div
                  key={action.id}
                  onClick={() => toggleAction(action.id)}
                  className="rounded-xl p-3.5 cursor-pointer transition-all duration-200"
                  style={{
                    background: done ? "#f0fdf4" : "#f8fafc",
                    border: `1px solid ${done ? "#86efac" : "#f1f5f9"}`,
                  }}
                >
                  <div className="flex gap-2.5 items-start">
                    <span className="text-lg">{action.icon}</span>
                    <span
                      className="text-xs font-semibold leading-snug"
                      style={{
                        color: done ? "#16a34a" : "#334155",
                        textDecoration: done ? "line-through" : "none",
                      }}
                    >
                      {action.text}
                    </span>
                  </div>
                  {done && (
                    <div className="text-xs text-green-600 mt-1.5 ml-7 font-semibold">
                      ✓ Done
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div
            className="mt-5 p-3.5 rounded-2xl"
            style={{ background: "linear-gradient(135deg, #ede9fe, #dbeafe)" }}
          >
            <div className="text-xs font-bold text-indigo-500 mb-1">
              💡 Quick Tip
            </div>
            <div className="text-xs text-slate-500 leading-relaxed">
              David Chen's project is at 90% — a review now keeps momentum
              strong!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
