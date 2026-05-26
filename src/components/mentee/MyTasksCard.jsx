import { statusColors } from "../../data/menteeData";

export default function MyTasksCard({ tasks, onManageTasks, onTaskClick }) {
  return (
    <div
      className="bg-white rounded-2xl p-7 border border-slate-100"
      style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.02)" }}
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="m-0 text-lg font-black text-slate-800">My Tasks</h2>
        <button
          onClick={onManageTasks}
          className="bg-transparent border-0 text-indigo-500 text-xs font-bold cursor-pointer hover:text-indigo-700 transition-colors"
          style={{ fontFamily: "inherit" }}
        >
          Manage Tasks
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-slate-100">
            {["Task Name", "Status", "Deadline", "Action"].map((h, i) => (
              <th
                key={h}
                className={`pb-3 text-xs font-bold text-slate-400 ${i === 3 ? "text-right" : "text-left"}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => {
            const s = statusColors[t.status] || statusColors["To Do"];
            return (
              <tr key={t.id} className="border-b border-slate-50">
                <td className="py-4 font-semibold text-slate-800 text-sm">
                  {t.title}
                </td>
                <td className="py-4">
                  <span
                    className="px-2.5 py-1 rounded-md text-xs font-bold"
                    style={{ background: s.bg, color: s.text }}
                  >
                    {t.status}
                  </span>
                </td>
                <td
                  className="py-4 text-xs font-semibold"
                  style={{
                    color:
                      t.status === "Revision Needed" ? "#ef4444" : "#64748b",
                  }}
                >
                  {t.deadline}
                </td>
                <td className="py-4 text-right">
                  {t.status !== "Completed" && t.status !== "Under Review" && (
                    <button
                      onClick={() => onTaskClick(t)}
                      className="bg-white border border-slate-200 px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-800 cursor-pointer hover:border-slate-800 transition-colors"
                      style={{ fontFamily: "inherit" }}
                    >
                      {t.status === "Revision Needed" ? "Resubmit" : "Submit"}
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
