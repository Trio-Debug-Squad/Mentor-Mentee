import { useState } from "react";
import StatCard from "../ui/StatCard";
import ProgressBar from "../ui/ProgressBar";
import { statCards, recentActivities } from "../../data/adminData";

const statusStyle = {
  Active: "bg-green-100 text-green-700",
  "On Hold": "bg-amber-100 text-amber-700",
  Completed: "bg-blue-100 text-blue-700",
};

export default function DashboardOverview({ projects, onAddProject }) {
  const [newProjectName, setNewProjectName] = useState("");

  const handleAdd = () => {
    if (!newProjectName.trim()) return;
    onAddProject(newProjectName.trim());
    setNewProjectName("");
  };

  return (
    <div>
      {/* Stat cards */}
      <div className="flex gap-5 mb-7 flex-wrap">
        {statCards.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 items-start">
        {/* Projects table */}
        <div
          className="bg-white rounded-2xl border border-slate-100 overflow-hidden w-full"
          style={{ flex: 2, boxShadow: "0 2px 16px rgba(59,130,246,0.05)" }}
        >
          <div className="px-4 md:px-6 lg:px-7 pt-4 md:pt-5 lg:pt-6 pb-3 md:pb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <h2 className="m-0 text-sm md:text-base lg:text-lg xl:text-xl font-black text-slate-800">
              Active Projects Overview
            </h2>
            <div className="flex gap-2">
              <input
                value={newProjectName}
                onChange={(e) => setNewProjectName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                placeholder="New project name…"
                className="px-2.5 py-1.5 md:px-3 lg:px-4 lg:py-2 rounded-lg border border-slate-200 outline-none text-xs lg:text-sm flex-1 sm:flex-none"
                style={{ fontFamily: "inherit" }}
              />
              <button
                onClick={handleAdd}
                className="bg-blue-500 text-white border-0 px-2.5 py-1.5 md:px-3 lg:px-4 lg:py-2 rounded-lg cursor-pointer text-xs lg:text-sm font-semibold hover:bg-blue-600 transition-colors"
                style={{ fontFamily: "inherit" }}
              >
                Add
              </button>
            </div>
          </div>

          {/* Scrollable on mobile */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[480px]">
              <thead>
                <tr className="bg-slate-50">
                  {["Project Name", "Mentor", "Status", "Progress"].map((h) => (
                    <th
                      key={h}
                      className="px-3 md:px-4 lg:px-6 py-2.5 md:py-3 lg:py-4 text-left text-xs lg:text-sm font-bold text-slate-400 tracking-wide border-b border-slate-100"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr
                    key={p.id}
                    className="border-b border-slate-50 hover:bg-slate-50 transition-colors duration-150"
                  >
                    <td className="px-3 md:px-4 lg:px-6 py-3 md:py-3.5 lg:py-4 font-semibold text-slate-800 text-xs md:text-sm lg:text-base">
                      {p.name}
                    </td>
                    <td className="px-3 md:px-4 lg:px-6 py-3 md:py-3.5 lg:py-4 text-xs lg:text-sm text-slate-500">
                      {p.mentor}
                    </td>
                    <td className="px-3 md:px-4 lg:px-6 py-3 md:py-3.5 lg:py-4">
                      <span
                        className={`px-2.5 py-0.5 md:px-3 md:py-1 lg:px-4 lg:py-1.5 rounded-full text-xs lg:text-sm font-semibold ${statusStyle[p.status] || statusStyle.Active}`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="px-3 md:px-4 lg:px-6 py-3 md:py-3.5 lg:py-4">
                      <ProgressBar value={p.progress} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity feed */}
        <div
          className="bg-white rounded-2xl border border-slate-100 p-4 md:p-5 lg:p-7 w-full"
          style={{ flex: 1, boxShadow: "0 2px 16px rgba(59,130,246,0.05)" }}
        >
          <h2 className="m-0 mb-4 lg:mb-5 text-sm md:text-base lg:text-lg xl:text-xl font-black text-slate-800">
            Recent Activity Feed
          </h2>
          <div className="flex flex-col gap-3 lg:gap-4">
            {recentActivities.map((act) => (
              <div key={act.id} className="flex gap-3 lg:gap-4 items-start">
                <div
                  className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-xs md:text-sm lg:text-base font-black flex-shrink-0"
                  style={{ background: act.bg, color: act.color }}
                >
                  {act.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs lg:text-sm xl:text-base text-slate-600 font-medium leading-snug">
                    {act.text}
                  </div>
                  <div className="text-xs lg:text-sm text-slate-400 mt-1">
                    {act.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
