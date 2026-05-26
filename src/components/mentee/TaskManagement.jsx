import { taskStatusGroups, statusColors } from "../../data/menteeData";

export default function TaskManagement({ tasks, onTaskClick }) {
  return (
    <div
      className="bg-white rounded-2xl p-8 border border-slate-100"
      style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.02)" }}
    >
      <h2 className="m-0 mb-6 text-xl font-black text-slate-800">All Tasks</h2>

      {taskStatusGroups.map((statusGroup) => {
        const groupTasks = tasks.filter((t) => t.status === statusGroup);
        if (groupTasks.length === 0) return null;

        return (
          <div key={statusGroup} className="mb-8">
            <h3 className="text-sm font-bold text-slate-500 mb-4 pb-2 border-b-2 border-slate-100">
              {statusGroup}
            </h3>
            <div className="flex flex-col gap-3">
              {groupTasks.map((t) => (
                <div
                  key={t.id}
                  className="flex justify-between items-center px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl"
                >
                  <div>
                    <div className="text-sm font-bold text-slate-800 mb-1.5">
                      {t.title}
                    </div>
                    <div className="text-xs text-slate-500">
                      Deadline:{" "}
                      <strong
                        style={{
                          color:
                            t.status === "Revision Needed"
                              ? "#ef4444"
                              : "inherit",
                        }}
                      >
                        {t.deadline}
                      </strong>{" "}
                      • Assigner: {t.assigner}
                    </div>
                  </div>
                  {t.status !== "Completed" && t.status !== "Under Review" && (
                    <button
                      onClick={() => onTaskClick(t)}
                      className="text-white border-0 px-5 py-2.5 rounded-lg text-xs font-bold cursor-pointer"
                      style={{ background: "#1e293b", fontFamily: "inherit" }}
                    >
                      {t.status === "Revision Needed"
                        ? "Resubmit Task"
                        : "Submit Task"}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
