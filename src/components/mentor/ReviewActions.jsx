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
      className="ml-0 md:ml-4 lg:ml-8 bg-white rounded-2xl p-4 md:p-6 lg:p-8 border border-slate-100 mb-5 md:mb-6 lg:mb-8"
      style={{ boxShadow: "0 2px 16px rgba(99,102,241,0.07)" }}
    >
      <h2 className="m-0 mb-4 md:mb-5 lg:mb-6 text-base md:text-lg lg:text-xl font-black text-slate-800">
        Review Actions
      </h2>

      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-5">
        {actions.map((a) => (
          <div
            key={a.title}
            className="flex-1 border border-slate-200 rounded-xl md:rounded-2xl
              p-5 md:p-6 lg:p-8
              text-center cursor-pointer transition-colors"
            onMouseOver={(e) =>
              (e.currentTarget.style.borderColor = a.hoverBorder)
            }
            onMouseOut={(e) => (e.currentTarget.style.borderColor = "#e2e8f0")}
          >
            {/* Icon */}
            <div
              className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4
                text-xl md:text-2xl lg:text-3xl font-black"
              style={{
                background: a.iconBg,
                color: a.iconColor,
                boxShadow: `0 4px 14px ${a.shadowColor}`,
              }}
            >
              {a.icon}
            </div>

            {/* Title */}
            <h3 className="m-0 mb-1.5 md:mb-2 text-sm md:text-base lg:text-lg font-bold text-slate-800">
              {a.title}
            </h3>

            {/* Description */}
            <p className="m-0 text-[11px] md:text-xs lg:text-sm text-slate-500 leading-relaxed">
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
