import { recentFeedback, notificationsList } from "../../data/menteeData";

export function RecentFeedbackCard() {
  return (
    <div
      className="bg-white rounded-2xl p-4 md:p-5 lg:p-7 border border-slate-100"
      style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.02)" }}
    >
      <h2 className="m-0 mb-4 md:mb-5 text-base md:text-lg lg:text-xl font-black text-slate-800">
        Recent Feedback
      </h2>

      <div className="flex flex-col gap-3 md:gap-4">
        {recentFeedback.map((fb) => (
          <div
            key={fb.id}
            className="p-3 md:p-4 bg-slate-50 rounded-xl md:rounded-2xl border border-slate-100"
          >
            {/* Task + Date */}
            <div className="flex justify-between mb-1.5 md:mb-2">
              <span className="text-[11px] md:text-xs lg:text-sm font-bold text-indigo-500">
                {fb.task}
              </span>
              <span className="text-[11px] md:text-xs text-slate-400 font-semibold">
                {fb.date}
              </span>
            </div>

            {/* Feedback text */}
            <p className="m-0 text-[11px] md:text-xs lg:text-sm text-slate-600 leading-relaxed mb-2 md:mb-2.5">
              "{fb.text}"
            </p>

            {/* Mentor */}
            <div className="text-[11px] md:text-xs lg:text-sm text-slate-500 font-medium">
              — {fb.mentor}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function NotificationsCard() {
  const unreadCount = notificationsList.filter((n) => n.unread).length;

  return (
    <div
      className="bg-white rounded-2xl p-4 md:p-5 lg:p-7 border border-slate-100"
      style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.02)" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4 md:mb-5">
        <h2 className="m-0 text-base md:text-lg lg:text-xl font-black text-slate-800">
          Notifications
        </h2>
        {unreadCount > 0 && (
          <span className="bg-red-50 text-red-500 px-2 py-0.5 rounded-full text-[10px] md:text-xs lg:text-sm font-black">
            {unreadCount} New
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 md:gap-3">
        {notificationsList.map((n) => (
          <div
            key={n.id}
            className="flex gap-2.5 md:gap-3 py-2.5 md:py-3 border-b border-slate-50"
          >
            {/* Dot */}
            <div
              className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mt-1.5 shrink-0"
              style={{ background: n.unread ? "#6366f1" : "#cbd5e1" }}
            />

            <div>
              {/* Notification text */}
              <div
                className="text-[11px] md:text-xs lg:text-sm leading-snug mb-0.5 md:mb-1"
                style={{
                  color: n.unread ? "#1e293b" : "#64748b",
                  fontWeight: n.unread ? 600 : 500,
                }}
              >
                {n.text}
              </div>

              {/* Time */}
              <div className="text-[10px] md:text-xs text-slate-400 font-medium">
                {n.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
