export default function ReviewActions() {
  const actions = [
    {
      icon: "✓",
      iconBg: "#dcfce7",
      iconColor: "#16a34a",
      shadowColor: "rgba(22,163,74,0.2)",
      hoverBorder: "#16a34a",
      title: "Approve",
      desc: "Approve the submission and notify the mentee of successful completion.",
    },
    {
      icon: "!",
      iconBg: "#fef3c7",
      iconColor: "#d97706",
      shadowColor: "rgba(217,119,6,0.2)",
      hoverBorder: "#d97706",
      title: "Request Changes",
      desc: "Provide specific feedback and return the task to the mentee for revisions.",
    },
  ];

  return (
    <div
      className="ml-8 bg-white rounded-2xl p-8 border border-slate-100 mb-8"
      style={{ boxShadow: "0 2px 16px rgba(99,102,241,0.07)" }}
    >
      <h2 className="m-0 mb-6 text-xl font-black text-slate-800">
        Review Actions
      </h2>
      <div className="flex gap-5">
        {actions.map((a) => (
          <div
            key={a.title}
            className="flex-1 border border-slate-200 rounded-2xl p-8 text-center cursor-pointer transition-colors"
            onMouseOver={(e) =>
              (e.currentTarget.style.borderColor = a.hoverBorder)
            }
            onMouseOut={(e) => (e.currentTarget.style.borderColor = "#e2e8f0")}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black"
              style={{
                background: a.iconBg,
                color: a.iconColor,
                boxShadow: `0 4px 14px ${a.shadowColor}`,
              }}
            >
              {a.icon}
            </div>
            <h3 className="m-0 mb-2 text-lg font-bold text-slate-800">
              {a.title}
            </h3>
            <p className="m-0 text-xs text-slate-500 leading-relaxed">
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
