const badgeStyles = {
  green: "bg-[#dcfce7] text-[#16a34a]",
  blue: "bg-[#dbeafe] text-[#2563eb]",
};

export default function StatCard({ icon, label, value, badge, badgeColor }) {
  return (
    <div
      className="bg-white rounded-[14px] md:rounded-[16px] lg:rounded-[18px]
        px-4 py-4 md:px-5 md:py-5 lg:px-7 lg:py-6
        flex-1 min-w-[140px] md:min-w-[160px] lg:min-w-[180px]
        border border-[#f1f5f9] relative overflow-hidden"
      style={{ boxShadow: "0 2px 16px rgba(59,130,246,0.06)" }}
    >
      <div className="flex justify-between items-start">
        {/* Icon */}
        <div className="w-8 h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 bg-[#eff6ff] rounded-lg md:rounded-xl text-[#3b82f6] flex items-center justify-center text-[16px] md:text-[18px] lg:text-[22px]">
          {icon}
        </div>

        {/* Badge */}
        <span
          className={`px-2 py-[2px] md:px-2.5 md:py-[3px] rounded-full text-[10px] md:text-[11px] lg:text-[12px] font-semibold ${badgeStyles[badgeColor] || badgeStyles.blue}`}
        >
          {badge}
        </span>
      </div>

      <div className="mt-3 md:mt-3.5 lg:mt-4">
        <div className="text-[11px] md:text-[12px] lg:text-[13px] text-[#94a3b8] font-medium">
          {label}
        </div>
        <div className="text-[22px] md:text-[26px] lg:text-[32px] font-black text-[#1e293b] leading-[1.2] mt-0.5">
          {value}
        </div>
      </div>
    </div>
  );
}
