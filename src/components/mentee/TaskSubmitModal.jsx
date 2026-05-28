export default function TaskSubmitModal({ task, onClose, onSubmit }) {
  if (!task) return null;

  const isRevision = task.status === "Revision Needed";

  return (
    <div
      className="fixed inset-0 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4"
      style={{ background: "rgba(15,23,42,0.5)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white w-full sm:max-w-md md:max-w-lg
          rounded-t-3xl sm:rounded-3xl
          p-5 sm:p-7 md:p-8 lg:p-10"
        style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.15)" }}
      >
        {/* Title */}
        <h2 className="m-0 mb-1.5 md:mb-2 text-base md:text-lg lg:text-xl font-black text-slate-800">
          {isRevision ? "Resubmit Task" : "Submit Task"}
        </h2>
        <p className="m-0 mb-4 md:mb-5 lg:mb-6 text-slate-500 text-xs md:text-sm font-medium">
          {task.title} • Deadline:{" "}
          <span className="text-red-500">{task.deadline}</span>
        </p>

        {/* Revision feedback */}
        {isRevision && (
          <div className="bg-red-50 border border-red-200 p-3 md:p-4 rounded-xl mb-4 md:mb-5 lg:mb-6">
            <div className="text-[10px] md:text-xs font-black text-red-500 uppercase mb-1 md:mb-1.5">
              Mentor Feedback:
            </div>
            <div className="text-[11px] md:text-xs text-red-900 leading-relaxed">
              "Good start, but we need to rethink the navigation bar. Please
              revise the layout before final submission."
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
          {/* Submission notes */}
          <div>
            <label className="block text-[11px] md:text-xs font-bold text-slate-500 mb-1.5 md:mb-2">
              Submission Notes
            </label>
            <textarea
              placeholder="Describe what you've done..."
              className="w-full px-3 py-3 md:px-3.5 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm outline-none resize-none focus:border-indigo-400 transition-colors"
              style={{
                minHeight: 80,
                fontFamily: "inherit",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Upload files */}
          <div>
            <label className="block text-[11px] md:text-xs font-bold text-slate-500 mb-1.5 md:mb-2">
              Upload Files
            </label>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 md:p-5 lg:p-6 text-center bg-slate-50 cursor-pointer hover:border-indigo-400 transition-colors">
              <div className="text-[11px] md:text-xs text-slate-500 font-semibold">
                Drag & Drop files here, or click to browse
              </div>
            </div>
          </div>

          {/* Project URL */}
          <div>
            <label className="block text-[11px] md:text-xs font-bold text-slate-500 mb-1.5 md:mb-2">
              Project URL / Link (Optional)
            </label>
            <input
              placeholder="https://github.com/..."
              className="w-full px-3 py-3 md:px-3.5 md:py-3.5 rounded-xl border border-slate-200 text-xs md:text-sm outline-none focus:border-indigo-400 transition-colors"
              style={{ fontFamily: "inherit", boxSizing: "border-box" }}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2.5 md:gap-3 mt-5 md:mt-6 lg:mt-8">
          <button
            onClick={onClose}
            className="flex-1 py-3 md:py-3.5 border border-slate-200 bg-white rounded-xl font-bold text-xs md:text-sm text-slate-500 cursor-pointer hover:border-slate-300 transition-colors"
            style={{ fontFamily: "inherit" }}
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="text-white border-0 rounded-xl font-bold text-xs md:text-sm cursor-pointer py-3 md:py-3.5"
            style={{
              flex: 2,
              background: "linear-gradient(135deg, #6366f1, #818cf8)",
              boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
              fontFamily: "inherit",
            }}
          >
            {isRevision ? "Resubmit for Review" : "Submit for Review"}
          </button>
        </div>
      </div>
    </div>
  );
}
