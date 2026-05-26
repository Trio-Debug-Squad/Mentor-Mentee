export default function MentorHeader({ onNewUser }) {
  return (
    <div className="flex justify-between items-start mb-7 pl-8">
      <h1 className="text-2xl font-black text-slate-800 tracking-tight m-0">
        MENTOR DASHBOARD
      </h1>
      <button
        onClick={onNewUser}
        className="flex items-center gap-2 text-white border-0 rounded-xl px-5 py-3 font-bold text-sm cursor-pointer transition-transform duration-150 hover:-translate-y-px"
        style={{
          background: "linear-gradient(135deg, #6366f1, #818cf8)",
          boxShadow: "0 4px 16px rgba(99,102,241,0.35)",
          fontFamily: "inherit",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
        NEW USER
      </button>
    </div>
  );
}
