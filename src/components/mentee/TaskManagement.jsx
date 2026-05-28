import { taskStatusGroups, statusColors } from "../../data/menteeData";

export default function TaskManagement({ tasks, onTaskClick }) {
  return (
    <div
      className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 border border-slate-100"
      style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.02)" }}
    >
      <h2 className="m-0 mb-4 md:mb-5 lg:mb-6 text-base md:text-lg lg:text-xl font-black text-slate-800">
        All Tasks
      </h2>

      {taskStatusGroups.map((statusGroup) => {
        const groupTasks = tasks.filter((t) => t.status === statusGroup);
        if (groupTasks.length === 0) return null;

        return (
          <div key={statusGroup} className="mb-5 md:mb-6 lg:mb-8">
            {/* Group heading */}
            <h3 className="text-[11px] md:text-xs lg:text-sm font-bold text-slate-500 mb-3 md:mb-4 pb-2 border-b-2 border-slate-100">
              {statusGroup}
            </h3>

            <div className="flex flex-col gap-2.5 md:gap-3">
              {groupTasks.map((t) => (
                <div
                  key={t.id}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center
                    gap-3 sm:gap-4
                    px-3.5 py-3 md:px-4 md:py-3.5 lg:px-5 lg:py-4
                    bg-slate-50 border border-slate-100 rounded-xl"
                >
                  {/* Task info */}
                  <div className="min-w-0">
                    <div className="text-xs md:text-sm lg:text-base font-bold text-slate-800 mb-1 md:mb-1.5 truncate">
                      {t.title}
                    </div>
                    <div className="text-[11px] md:text-xs lg:text-sm text-slate-500">
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

                  {/* Submit button */}
                  {t.status !== "Completed" && t.status !== "Under Review" && (
                    <button
                      onClick={() => onTaskClick(t)}
                      className="text-white border-0
                        px-3.5 py-2 text-[11px]
                        md:px-4 md:py-2.5 md:text-xs
                        lg:px-5 lg:py-2.5 lg:text-sm
                        rounded-lg font-bold cursor-pointer shrink-0 self-start sm:self-auto"
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
