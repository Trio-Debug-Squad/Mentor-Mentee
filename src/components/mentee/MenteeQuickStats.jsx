import { quickStats } from "../../data/menteeData";

export default function MenteeQuickStats() {
  return (
    <div className="flex gap-5 mb-7 flex-wrap">
      {quickStats.map((s) => (
        <div
          key={s.label}
          className="flex-1 min-w-48 bg-white p-6 rounded-2xl border border-slate-100"
          style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.02)" }}
        >
          <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-2">
            {s.label}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black text-slate-800 leading-none">
              {s.value}
            </span>
            <span
              className="text-sm font-semibold"
              style={{ color: s.suffixColor }}
            >
              {s.suffix}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
