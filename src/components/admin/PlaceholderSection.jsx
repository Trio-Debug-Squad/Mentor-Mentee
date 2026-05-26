export default function PlaceholderSection({ title }) {
  return (
    <div
      className="bg-white rounded-2xl p-12 text-center border border-slate-100 flex flex-col items-center text-slate-400"
      style={{ boxShadow: "0 2px 16px rgba(59,130,246,0.05)" }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="mb-4 text-slate-300"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <h2 className="m-0 mb-2 text-lg font-bold text-slate-700">{title}</h2>
      <p className="m-0 text-sm">
        The {title} module is currently under development.
      </p>
    </div>
  );
}
