import Avatar from "../ui/Avatar";
import ProgressBar from "../ui/ProgressBar";
import { assignedProjects } from "../../data/menteeData";

export default function AssignedProjectsCard({ onViewAll }) {
  return (
    <div
      className="bg-white rounded-2xl p-7 border border-slate-100"
      style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.02)" }}
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="m-0 text-lg font-black text-slate-800">
          Assigned Projects
        </h2>
        <button
          onClick={onViewAll}
          className="bg-transparent border-0 text-indigo-500 text-xs font-bold cursor-pointer hover:text-indigo-700 transition-colors"
          style={{ fontFamily: "inherit" }}
        >
          View All
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {assignedProjects.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-5 p-4 border border-slate-100 rounded-2xl bg-slate-50"
          >
            <div className="flex-1">
              <h3 className="m-0 mb-1.5 text-sm font-bold text-slate-800">
                {p.name}
              </h3>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Avatar initials={p.avatar} color={p.color} size={22} />
                Mentor: <strong className="text-slate-600">{p.mentor}</strong>
              </div>
            </div>
            <div className="w-36">
              <div className="text-xs text-slate-500 mb-1.5 font-semibold">
                Progress
              </div>
              <ProgressBar value={p.progress} />
            </div>
            <div className="w-36 text-right">
              <div className="text-xs text-slate-500 mb-1 font-semibold">
                Next Deadline
              </div>
              <div
                className="text-xs font-bold"
                style={{
                  color: p.nextDeadline.includes("Tomorrow")
                    ? "#ef4444"
                    : "#1e293b",
                }}
              >
                {p.nextDeadline}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
