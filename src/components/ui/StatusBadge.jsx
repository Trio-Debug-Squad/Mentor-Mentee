import { menteeStatusColors } from "../../data/mentorData";

export default function StatusBadge({ status }) {
  const s = menteeStatusColors[status] || { bg: "#f1f5f9", text: "#64748b" };
  return (
    <span
      className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
      style={{ background: s.bg, color: s.text }}
    >
      {status}
    </span>
  );
}
