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

// Hamburger toggle — mobile only, hidden when sidebar open
export function MenteeSidebarToggle({ onClick, mobileOpen }) {
  if (mobileOpen) return null;
  return (
    <button
      onClick={onClick}
      className="md:hidden fixed top-4 left-4 z-200 w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center cursor-pointer"
      style={{ boxShadow: "0 2px 12px rgba(99,102,241,0.1)" }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1e293b"
        strokeWidth="2.5"
      >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>
  );
}

export default function MenteeSidebar({
  activeNav,
  setActiveNav,
  mobileOpen,
  setMobileOpen,
}) {
  const currentUser = JSON.parse(localStorage.getItem("mentorFlow_currentUser")) || {
    name: "Emily Davies",
    role: "MENTEE",
    avatar: "ED",
    color: "#f472b6"
  };

  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleNavClick = (item) => {
    setActiveNav(item);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 z-90 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={[
          "bg-white border-r border-slate-100 flex flex-col fixed top-0 left-0 bottom-0 z-100 transition-all duration-300",
          "w-65",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:w-55",
          "lg:w-64",
        ].join(" ")}
        style={{ boxShadow: "2px 0 20px rgba(99,102,241,0.05)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 md:px-4 lg:px-6 pb-7 pt-7">
          <div
            className="w-9 h-9 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center text-white font-black text-[16px] lg:text-lg shrink-0"
            style={{ background: "linear-gradient(135deg, #6366f1, #818cf8)" }}
          >
            M
          </div>
          <span className="font-black text-[17px] md:text-[16px] lg:text-xl text-slate-800 tracking-tight truncate">
            MenteeHub
          </span>
          {/* Close button — mobile only */}
          <button
            onClick={() => setMobileOpen(false)}
            className="md:hidden ml-auto shrink-0 w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav */}
        <div className="px-3 md:px-3 lg:px-4 flex-1 overflow-y-auto">
          <div className="text-[11px] font-bold text-slate-400 tracking-[1.2px] mb-2 pl-2">
            MENU
          </div>

          {/* Dashboard */}
          <div className="mb-1">
            <button
              onClick={() => {
                handleNavClick("Dashboard");
                setExpandedMenu(null);
              }}
              className="flex items-center gap-3 w-full px-3 md:px-2.5 lg:px-3.5 py-2.5 md:py-2.25 lg:py-2.75 border-none rounded-xl cursor-pointer text-[13px] md:text-[12px] lg:text-sm font-bold transition-all duration-200"
              style={
                activeNav === "Dashboard"
                  ? { ...activeStyle, fontFamily: "inherit" }
                  : {
                      background: "transparent",
                      color: "#64748b",
                      fontFamily: "inherit",
                    }
              }
            >
              <svg
                width="16"
                height="16"
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
                className="flex items-center justify-between w-full px-3 md:px-2.5 lg:px-3.5 py-2.5 md:py-2.25 lg:py-2.75 border-none rounded-xl cursor-pointer text-[13px] md:text-[12px] lg:text-sm font-bold transition-all duration-200"
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
                  width="14"
                  height="14"
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
                <div className="pl-7 flex flex-col gap-1 py-1">
                  {items.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleNavClick(item)}
                      className="text-left px-3 py-2 rounded-lg border-none cursor-pointer text-[12px] md:text-[11px] lg:text-xs transition-all duration-200"
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
        <div className="mx-3 lg:mx-4 pt-3.5 border-t border-slate-100 flex items-center gap-3">
          <Avatar initials={currentUser.avatar} color={currentUser.color} size={36} />
          <div className="min-w-0">
            <div className="text-[13px] lg:text-sm font-bold text-slate-800 truncate">
              {currentUser.name}
            </div>
            <div className="text-[11px] lg:text-xs text-slate-400">
              {currentUser.role === "MENTEE" ? "Mentee" : "Mentor"}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
