import { recentFeedback, notificationsList } from "../../data/menteeData";

export function RecentFeedbackCard() {
  return (
    <div
      className="bg-white rounded-2xl p-7 border border-slate-100"
      style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.02)" }}
    >
      <h2 className="m-0 mb-5 text-base font-black text-slate-800">
        Recent Feedback
      </h2>
      <div className="flex flex-col gap-4">
        {recentFeedback.map((fb) => (
          <div
            key={fb.id}
            className="p-4 bg-slate-50 rounded-2xl border border-slate-100"
          >
            <div className="flex justify-between mb-2">
              <span className="text-xs font-bold text-indigo-500">
                {fb.task}
              </span>
              <span className="text-xs text-slate-400 font-semibold">
                {fb.date}
              </span>
            </div>
            <p className="m-0 text-xs text-slate-600 leading-relaxed mb-2.5">
              "{fb.text}"
            </p>
            <div className="text-xs text-slate-500 font-medium">
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
      className="bg-white rounded-2xl p-7 border border-slate-100"
      style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.02)" }}
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="m-0 text-base font-black text-slate-800">
          Notifications
        </h2>
        {unreadCount > 0 && (
          <span className="bg-red-50 text-red-500 px-2 py-0.5 rounded-full text-xs font-black">
            {unreadCount} New
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3">
        {notificationsList.map((n) => (
          <div key={n.id} className="flex gap-3 py-3 border-b border-slate-50">
            <div
              className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
              style={{ background: n.unread ? "#6366f1" : "#cbd5e1" }}
            />
            <div>
              <div
                className="text-xs leading-snug mb-1"
                style={{
                  color: n.unread ? "#1e293b" : "#64748b",
                  fontWeight: n.unread ? 600 : 500,
                }}
              >
                {n.text}
              </div>
              <div className="text-xs text-slate-400 font-medium">{n.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
