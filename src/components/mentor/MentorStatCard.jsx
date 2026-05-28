import Avatar from "../ui/Avatar";

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
      className="bg-white
        rounded-[14px] md:rounded-2xl lg:rounded-2xl
        p-4 md:p-5 lg:p-6
        flex-1 min-w-35 md:min-w-40 lg:min-w-44
        border border-slate-100 relative overflow-hidden"
      style={{ boxShadow: "0 2px 16px rgba(99,102,241,0.07)" }}
    >
      <div className="flex justify-between items-start">
        {/* Icon */}
        <div className="w-8 h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 bg-indigo-50 rounded-lg md:rounded-xl flex items-center justify-center text-base md:text-lg lg:text-xl">
          {icon}
        </div>

        {/* Badge */}
        <span
          className={`px-2 py-0.5 md:px-2.5 md:py-0.5 rounded-full text-[10px] md:text-[11px] lg:text-xs font-semibold ${badgeStyles[badgeColor] || badgeStyles.blue}`}
        >
          {badge}
        </span>
      </div>

      <div className="mt-3 md:mt-3.5 lg:mt-4">
        <div className="text-[11px] md:text-xs lg:text-xs text-slate-400 font-medium">
          {label}
        </div>
        <div className="text-[22px] md:text-[26px] lg:text-3xl font-black text-slate-800 leading-tight mt-0.5">
          {value}
        </div>
      </div>

      {avatars && (
        <div className="flex mt-2 md:mt-2.5">
          {avatars.map((a, i) => (
            <div
              key={i}
              style={{
                marginLeft: i === 0 ? 0 : -6,
                zIndex: avatars.length - i,
              }}
            >
              <Avatar
                initials={a.initials}
                color={a.color}
                size={i === 0 ? 22 : 22}
                className="md:w-6 md:h-6 lg:w-7 lg:h-7"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
