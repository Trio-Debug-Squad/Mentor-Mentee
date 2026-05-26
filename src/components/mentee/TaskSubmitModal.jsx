export default function TaskSubmitModal({ task, onClose, onSubmit }) {
  if (!task) return null;

  const isRevision = task.status === "Revision Needed";

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ background: "rgba(15,23,42,0.5)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white rounded-3xl p-10 w-full max-w-lg"
        style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.15)" }}
      >
        <h2 className="m-0 mb-2 text-xl font-black text-slate-800">
          {isRevision ? "Resubmit Task" : "Submit Task"}
        </h2>
        <p className="m-0 mb-6 text-slate-500 text-sm font-medium">
          {task.title} • Deadline:{" "}
          <span className="text-red-500">{task.deadline}</span>
        </p>

        {isRevision && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-xl mb-6">
            <div className="text-xs font-black text-red-500 uppercase mb-1.5">
              Mentor Feedback:
            </div>
            <div className="text-xs text-red-900 leading-relaxed">
              "Good start, but we need to rethink the navigation bar. Please
              revise the layout before final submission."
            </div>
          </div>
        )}

        <div className="flex flex-col gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2">
              Submission Notes
            </label>
            <textarea
              placeholder="Describe what you've done..."
              className="w-full px-3.5 py-3.5 rounded-xl border border-slate-200 text-sm outline-none resize-none focus:border-indigo-400 transition-colors"
              style={{
                minHeight: 100,
                fontFamily: "inherit",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2">
              Upload Files
            </label>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center bg-slate-50 cursor-pointer hover:border-indigo-400 transition-colors">
              <div className="text-xs text-slate-500 font-semibold">
                Drag & Drop files here, or click to browse
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-2">
              Project URL / Link (Optional)
            </label>
            <input
              placeholder="https://github.com/..."
              className="w-full px-3.5 py-3.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-400 transition-colors"
              style={{ fontFamily: "inherit", boxSizing: "border-box" }}
            />
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={onClose}
            className="flex-1 py-3.5 border border-slate-200 bg-white rounded-xl font-bold text-sm text-slate-500 cursor-pointer hover:border-slate-300 transition-colors"
            style={{ fontFamily: "inherit" }}
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="text-white border-0 rounded-xl font-bold text-sm cursor-pointer py-3.5"
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
