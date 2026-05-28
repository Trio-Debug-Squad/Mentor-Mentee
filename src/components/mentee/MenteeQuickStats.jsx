import { quickStats } from "../../data/menteeData";

export default function MenteeQuickStats() {
  return (
    <div className="grid grid-cols-2 lg:flex gap-3 md:gap-4 lg:gap-5 mb-5 md:mb-6 lg:mb-7">
      {quickStats.map((s) => (
        <div
          key={s.label}
          className="bg-white
            p-4 md:p-5 lg:p-6
            rounded-xl md:rounded-2xl
            border border-slate-100
            lg:flex-1 lg:min-w-48"
          style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.02)" }}
        >
          <div className="text-[10px] md:text-[11px] lg:text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1.5 md:mb-2">
            {s.label}
          </div>
          <div className="flex items-baseline gap-1.5 md:gap-2">
            <span className="text-[26px] md:text-[32px] lg:text-4xl font-black text-slate-800 leading-none">
              {s.value}
            </span>
            <span
              className="text-xs md:text-sm font-semibold"
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
