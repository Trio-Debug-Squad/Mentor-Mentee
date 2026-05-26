export default function MenteeHeader({ activeNav, onMessageMentor }) {
  return (
    <div className="flex justify-between items-start mb-8">
      <div>
        <h1 className="text-2xl font-black text-slate-800 tracking-tight uppercase m-0">
          {activeNav === "Dashboard" ? "My Dashboard" : activeNav}
        </h1>
        <p className="text-slate-500 mt-1.5 text-sm">
          Track your progress, manage tasks, and connect with your mentors.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onMessageMentor}
          className="flex items-center gap-2 bg-white text-slate-800 border border-slate-200 rounded-xl px-4 py-2.5 font-bold text-sm cursor-pointer hover:border-slate-300 transition-colors"
          style={{ fontFamily: "inherit" }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Message Mentor
        </button>
        <button
          className="flex items-center gap-2 text-white border-0 rounded-xl px-4 py-2.5 font-bold text-sm cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #6366f1, #818cf8)",
            boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
            fontFamily: "inherit",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Request Meeting
        </button>
      </div>
    </div>
  );
}
