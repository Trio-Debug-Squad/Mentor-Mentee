import { useState } from "react";
import Avatar from "../ui/Avatar";
import { menteeMenuData } from "../../data/menteeData";

function MenuIcon({ iconKey }) {
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

const activeStyle = {
  background: "linear-gradient(135deg, #6366f1, #818cf8)",
  color: "#fff",
  boxShadow: "0 4px 14px rgba(99,102,241,0.25)",
};

export default function MenteeSidebar({ activeNav, setActiveNav }) {
  const [expandedMenu, setExpandedMenu] = useState(null);

  return (
    <aside
      className="w-64 bg-white border-r border-slate-100 flex flex-col py-7 fixed top-0 left-0 bottom-0 z-50"
      style={{ boxShadow: "2px 0 20px rgba(99,102,241,0.05)" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 pb-7">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg"
          style={{ background: "linear-gradient(135deg, #6366f1, #818cf8)" }}
        >
          M
        </div>
        <span className="font-black text-xl text-slate-800 tracking-tight">
          MenteeHub
        </span>
      </div>

      {/* Nav */}
      <div className="px-4 flex-1 overflow-y-auto">
        <div className="text-xs font-bold text-slate-400 tracking-widest mb-2 pl-2">
          MENU
        </div>

        {/* Dashboard */}
        <div className="mb-1">
          <button
            onClick={() => {
              setActiveNav("Dashboard");
              setExpandedMenu(null);
            }}
            className="flex items-center gap-3 w-full px-3.5 py-2.5 rounded-xl border-0 cursor-pointer text-sm font-bold transition-all duration-200"
            style={
              activeNav === "Dashboard"
                ? activeStyle
                : { background: "transparent", color: "#64748b" }
            }
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            Dashboard
          </button>
        </div>

        {/* Grouped menus */}
        {menteeMenuData.map(({ category, iconKey, items }) => (
          <div key={category} className="mb-1">
            <button
              onClick={() =>
                setExpandedMenu(expandedMenu === category ? null : category)
              }
              className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl border-0 cursor-pointer text-sm font-bold transition-all duration-200"
              style={{
                background:
                  expandedMenu === category ? "#eef2ff" : "transparent",
                fontFamily: "inherit",
              }}
            >
              <div
                className="flex items-center gap-3"
                style={{
                  color: expandedMenu === category ? "#6366f1" : "#64748b",
                }}
              >
                <MenuIcon iconKey={iconKey} />
                <span
                  style={{
                    color: expandedMenu === category ? "#6366f1" : "#475569",
                  }}
                >
                  {category}
                </span>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={expandedMenu === category ? "#6366f1" : "#94a3b8"}
                strokeWidth="2"
                style={{
                  transform:
                    expandedMenu === category
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  transition: "transform 0.2s",
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {expandedMenu === category && (
              <div className="pl-8 flex flex-col gap-1 py-1">
                {items.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveNav(item)}
                    className="text-left px-3 py-2 rounded-lg border-0 cursor-pointer text-xs transition-all duration-200"
                    style={
                      activeNav === item
                        ? {
                            ...activeStyle,
                            fontWeight: 700,
                            fontFamily: "inherit",
                          }
                        : {
                            background: "transparent",
                            color: "#64748b",
                            fontWeight: 500,
                            fontFamily: "inherit",
                          }
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom user */}
      <div className="mx-4 pt-4 border-t border-slate-100 flex items-center gap-3">
        <Avatar initials="ED" color="#f472b6" size={40} />
        <div>
          <div className="text-sm font-bold text-slate-800">Emily Davies</div>
          <div className="text-xs text-slate-400">Mentee</div>
        </div>
      </div>
    </aside>
  );
}
