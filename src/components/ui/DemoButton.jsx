import { useState } from "react";

export default function DemoButton({ label, sub, active, disabled, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col gap-0.5 px-4 py-3 rounded-xl text-left border transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      style={{
        background: active ? "#E8F7EE" : hovered ? "#000" : "#fff",
        color: hovered ? "#fff" : "#1A1714",
        borderColor: active ? "#86EFAC" : "#E2DDD8",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      <span className="text-sm font-medium">
        {active ? "Signed in ✓" : label}
      </span>
      <span className="text-xs opacity-50 font-normal tracking-wide">
        {active ? "Redirecting…" : sub}
      </span>
    </button>
  );
}
