const inputStyle =
  "w-full px-3.5 py-3 rounded-xl border border-slate-200 text-sm outline-none transition-colors focus:border-blue-400";

export default function CreateUserModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ background: "rgba(15,23,42,0.5)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white rounded-3xl p-10 w-full max-w-sm"
        style={{ boxShadow: "0 24px 80px rgba(59,130,246,0.15)" }}
      >
        <h2 className="m-0 mb-1.5 text-xl font-black text-slate-800">
          Create New User
        </h2>
        <p className="m-0 mb-7 text-slate-400 text-sm">
          Add a mentor or mentee to the system.
        </p>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1.5">
              Full Name
            </label>
            <input
              placeholder="e.g., John Doe"
              className={inputStyle}
              style={{ fontFamily: "inherit" }}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1.5">
              Email Address
            </label>
            <input
              placeholder="name@company.com"
              className={inputStyle}
              style={{ fontFamily: "inherit" }}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1.5">
              Role Assignment
            </label>
            <select
              className={inputStyle}
              style={{ fontFamily: "inherit", background: "#fff" }}
            >
              <option>Mentee</option>
              <option>Mentor</option>
              <option>Admin</option>
            </select>
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
            onClick={onClose}
            className="flex-1 py-3.5 border-0 rounded-xl font-bold text-sm text-white cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
              boxShadow: "0 4px 16px rgba(59,130,246,0.3)",
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
