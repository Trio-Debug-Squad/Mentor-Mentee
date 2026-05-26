export default function ProgressBar({ value }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${value}%`,
            background:
              value === 100
                ? "#10b981"
                : "linear-gradient(90deg, #3b82f6, #60a5fa)",
          }}
        />
      </div>
      <span className="text-xs font-semibold text-slate-500">{value}%</span>
    </div>
  );
}
