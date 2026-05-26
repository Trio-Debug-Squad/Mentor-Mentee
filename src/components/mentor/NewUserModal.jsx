const inputClass =
  "w-full px-3.5 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-400 transition-colors text-slate-700";

export default function NewUserModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ background: "rgba(15,23,42,0.45)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white rounded-3xl p-10 w-full max-w-sm"
        style={{ boxShadow: "0 24px 80px rgba(99,102,241,0.2)" }}
      >
        <h2 className="m-0 mb-1.5 text-xl font-black text-slate-800">
          Add New User
        </h2>
        <p className="m-0 mb-7 text-slate-400 text-sm">
          Invite a new mentee to MentorFlow
        </p>

        <div className="flex flex-col gap-4">
          {["Full Name", "Email Address", "Project"].map((f) => (
            <div key={f}>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                {f}
              </label>
              <input
                placeholder={`Enter ${f.toLowerCase()}`}
                className={inputClass}
                style={{ fontFamily: "inherit" }}
              />
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-7">
          <button
            onClick={onClose}
            className="flex-1 py-3.5 border border-slate-200 bg-white rounded-xl font-bold text-sm text-slate-500 cursor-pointer hover:border-slate-300 transition-colors"
            style={{ fontFamily: "inherit" }}
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3.5 border-0 rounded-xl font-bold text-sm text-white cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #6366f1, #818cf8)",
              boxShadow: "0 4px 16px rgba(99,102,241,0.35)",
              fontFamily: "inherit",
            }}
          >
            Create User
          </button>
        </div>
      </div>
    </div>
  );
}
