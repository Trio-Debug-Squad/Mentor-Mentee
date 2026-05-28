import { useState } from "react";
import Avatar from "../ui/Avatar";
import ProgressBar from "../ui/ProgressBar";
import StatusBadge from "../ui/StatusBadge";
import MentorStatCard from "./MentorStatCard";
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
      {/* ── Stat cards ── */}
      <div className="grid grid-cols-2 lg:flex gap-3 md:gap-4 lg:gap-5 mb-5 md:mb-6 lg:mb-7 pl-0 md:pl-4 lg:pl-8">
        {mentorStatCards.map((s) => (
          <MentorStatCard key={s.label} {...s} />
        ))}
      </div>

      {/* ── Assigned projects ── */}
      <div
        className="bg-white rounded-2xl p-4 md:p-5 lg:p-7 border border-slate-100 ml-0 md:ml-4 lg:ml-8 mb-4 md:mb-5 lg:mb-7"
        style={{ boxShadow: "0 2px 16px rgba(99,102,241,0.07)" }}
      >
        <h2 className="m-0 mb-3 md:mb-4 text-sm md:text-base lg:text-lg font-black text-slate-800">
          My Assigned Projects (Assigned by Admin)
        </h2>
        {projects.length === 0 ? (
          <p className="text-slate-500 text-xs md:text-sm">
            No projects assigned yet.
          </p>
        ) : (
          <div className="flex gap-3 md:gap-4 flex-wrap">
            {projects.map((p) => (
              <div
                key={p.id}
                className="p-3 md:p-4 border border-slate-200 rounded-xl min-w-40 md:min-w-48"
              >
                <div className="text-xs md:text-sm font-bold text-slate-800 mb-1 md:mb-1.5">
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

      {/* ── Mentees table + actions ── */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-5 items-start ml-0 md:ml-4 lg:ml-8">
        {/* Table */}
        <div
          className="w-full lg:flex-1 bg-white rounded-2xl border border-slate-100 overflow-hidden"
          style={{ boxShadow: "0 2px 16px rgba(99,102,241,0.07)" }}
        >
          <div className="px-4 md:px-5 lg:px-7 pt-4 md:pt-5 lg:pt-6 pb-3 md:pb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <h2 className="m-0 text-sm md:text-base lg:text-lg font-black text-slate-800">
              Current Mentees Overview
            </h2>
            <input
              placeholder="Search mentees…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1.5 md:px-3.5 md:py-2 rounded-xl border border-slate-200 outline-none text-xs text-slate-600 bg-slate-50 w-full sm:w-36 md:w-44"
              style={{ fontFamily: "inherit" }}
            />
          </div>

          {/* Scrollable on mobile */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-130">
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
                      className="px-3 md:px-4 py-2.5 md:py-3 text-left text-xs font-bold text-slate-400 tracking-wide border-b border-slate-100"
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
                    <td className="px-3 md:px-4 py-3 md:py-3.5 text-xs text-slate-400 font-semibold">
                      {i + 1}.
                    </td>
                    <td className="px-3 md:px-4 py-3 md:py-3.5">
                      <div className="flex items-center gap-2 md:gap-2.5">
                        <Avatar initials={m.avatar} color={m.color} size={28} />
                        <span className="font-semibold text-slate-800 text-xs md:text-sm">
                          {m.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 md:px-4 py-3 md:py-3.5 text-xs text-slate-500">
                      {m.project}
                    </td>
                    <td className="px-3 md:px-4 py-3 md:py-3.5 text-xs text-slate-500">
                      {m.lastMeeting}
                    </td>
                    <td className="px-3 md:px-4 py-3 md:py-3.5">
                      <ProgressBar value={m.progress} />
                    </td>
                    <td className="px-3 md:px-4 py-3 md:py-3.5">
                      <StatusBadge status={m.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Immediate actions ── */}
        <div
          className="w-full lg:w-64 bg-white rounded-2xl border border-slate-100 p-4 md:p-5 lg:p-6 lg:shrink-0"
          style={{ boxShadow: "0 2px 16px rgba(99,102,241,0.07)" }}
        >
          <h2 className="m-0 mb-3 md:mb-4 text-sm font-black text-slate-800">
            Immediate Actions
          </h2>
          <div className="flex flex-col gap-2.5 md:gap-3">
            {immediateActions.map((action) => {
              const done = completedActions.includes(action.id);
              return (
                <div
                  key={action.id}
                  onClick={() => toggleAction(action.id)}
                  className="rounded-xl p-3 md:p-3.5 cursor-pointer transition-all duration-200"
                  style={{
                    background: done ? "#f0fdf4" : "#f8fafc",
                    border: `1px solid ${done ? "#86efac" : "#f1f5f9"}`,
                  }}
                >
                  <div className="flex gap-2 md:gap-2.5 items-start">
                    <span className="text-base md:text-lg">{action.icon}</span>
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
                    <div className="text-xs text-green-600 mt-1.5 ml-6 md:ml-7 font-semibold">
                      ✓ Done
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div
            className="mt-4 md:mt-5 p-3 md:p-3.5 rounded-2xl"
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
