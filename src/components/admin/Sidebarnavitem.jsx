// SidebarNavItem.jsx
// One expandable category with its sub-items
// Reusable — just pass category, items, iconKey, activeNav, state

function MenuIcon({ iconKey }) {
  if (iconKey === "users")
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  if (iconKey === "folder")
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    );
  if (iconKey === "chart")
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    );
  return null;
}

export default function SidebarNavItem({
  category,
  iconKey,
  items,
  activeNav,
  expandedMenu,
  onExpand,
  onNavClick,
}) {
  const isExpanded = expandedMenu === category;

  return (
    <div className="mb-1">
      {/* Category header */}
      <button
        onClick={() => onExpand(category)}
        className="flex items-center justify-between w-full px-[12px] md:px-[10px] lg:px-[14px] py-[10px] md:py-[9px] lg:py-[11px] border-none rounded-xl cursor-pointer text-[13px] md:text-[12px] lg:text-[14px] font-bold transition-all duration-200"
        style={{
          background: isExpanded ? "#f8fafc" : "transparent",
          color: "#1e293b",
          fontFamily: "inherit",
        }}
      >
        <div
          className="flex items-center gap-3"
          style={{ color: isExpanded ? "#3b82f6" : "#64748b" }}
        >
          <MenuIcon iconKey={iconKey} />
          <span style={{ color: isExpanded ? "#3b82f6" : "#475569" }}>
            {category}
          </span>
        </div>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isExpanded ? "#3b82f6" : "#94a3b8"}
          strokeWidth="2"
          style={{
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Sub-items */}
      {isExpanded && (
        <div className="pl-7 flex flex-col gap-1 py-1">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => onNavClick(item)}
              className="text-left px-3 py-2 rounded-lg border-none cursor-pointer text-[12px] md:text-[11px] lg:text-[13px] transition-all duration-200"
              style={{
                background:
                  activeNav === item
                    ? "linear-gradient(135deg, #3b82f6, #60a5fa)"
                    : "transparent",
                color: activeNav === item ? "#fff" : "#64748b",
                fontWeight: activeNav === item ? 700 : 500,
                boxShadow:
                  activeNav === item
                    ? "0 4px 14px rgba(59,130,246,0.25)"
                    : "none",
                fontFamily: "inherit",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
