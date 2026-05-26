import Avatar from "./Avatar";

const badgeStyles = {
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
};

export default function MentorStatCard({
  icon,
  label,
  value,
  badge,
  badgeColor,
  avatars,
}) {
  return (
    <div
      className="bg-white rounded-2xl p-6 flex-1 min-w-44 border border-slate-100 relative overflow-hidden"
      style={{ boxShadow: "0 2px 16px rgba(99,102,241,0.07)" }}
    >
      <div className="flex justify-between items-start">
        <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center text-xl">
          {icon}
        </div>
        <span
          className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${badgeStyles[badgeColor] || badgeStyles.blue}`}
        >
          {badge}
        </span>
      </div>
      <div className="mt-4">
        <div className="text-xs text-slate-400 font-medium">{label}</div>
        <div className="text-3xl font-black text-slate-800 leading-tight mt-0.5">
          {value}
        </div>
      </div>
      {avatars && (
        <div className="flex mt-2.5">
          {avatars.map((a, i) => (
            <div
              key={i}
              style={{
                marginLeft: i === 0 ? 0 : -8,
                zIndex: avatars.length - i,
              }}
            >
              <Avatar initials={a.initials} color={a.color} size={28} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
