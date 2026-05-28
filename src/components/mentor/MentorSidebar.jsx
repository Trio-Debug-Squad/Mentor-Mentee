import Avatar from "../ui/Avatar";
import { mentorMenuData } from "../../data/mentorData";

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
  if (iconKey === "file")
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    );
  if (iconKey === "search")
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    );
  if (iconKey === "activity")
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    );
  if (iconKey === "message")
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    );
  return null;
}

const activeItemStyle = {
  background: "linear-gradient(135deg, #6366f1, #818cf8)",
  color: "#fff",
  boxShadow: "0 4px 14px rgba(99,102,241,0.3)",
};

// ── Hamburger toggle — mobile only, hidden when sidebar is open ──
export function MentorSidebarToggle({ onClick, mobileOpen }) {
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

export default function MentorSidebar({
  activeNav,
  setActiveNav,
  expandedMenu,
  setExpandedMenu,
  mobileOpen,
  setMobileOpen,
}) {
  const handleNavClick = (item) => {
    setActiveNav(item);
    setMobileOpen(false); // close drawer on mobile after selection
  };

  const currentUser = JSON.parse(localStorage.getItem("mentorFlow_currentUser")) || {
    name: "Sarah Connor",
    role: "MENTOR",
    avatar: "SC",
    color: "#6366f1"
  };

  return (
    <>
      {/* Mobile backdrop — tap to close */}
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
          // mobile: slide in/out
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          // tablet: always visible, narrower
          "md:translate-x-0 md:w-55",
          // desktop: full size
          "lg:w-64",
        ].join(" ")}
        style={{ boxShadow: "2px 0 20px rgba(99,102,241,0.06)" }}
      >
        {/* ── Logo ── */}
        <div className="flex items-center gap-3 px-5 md:px-4 lg:px-6 pb-7 pt-7">
          <div
            className="w-9 h-9 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center text-white font-black text-[16px] lg:text-lg shrink-0"
            style={{ background: "linear-gradient(135deg, #6366f1, #818cf8)" }}
          >
            M
          </div>
          <span className="font-black text-[17px] md:text-[16px] lg:text-xl text-slate-800 tracking-tight truncate">
            MentorFlow
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

        {/* ── Nav ── */}
        <div className="px-3 md:px-3 lg:px-4 flex-1 overflow-y-auto">
          <div className="text-[11px] font-bold text-slate-400 tracking-[1.2px] mb-2 pl-2">
            MAIN MENU
          </div>

          {mentorMenuData.map(({ category, iconKey, items }) => (
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
                              ...activeItemStyle,
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

        {/* ── Bottom user ── */}
        <div className="mx-3 lg:mx-4 pt-3.5 border-t border-slate-100 flex items-center gap-3">
          <Avatar initials={currentUser.avatar} color={currentUser.color} size={36} />
          <div className="min-w-0">
            <div className="text-[13px] lg:text-sm font-bold text-slate-800 truncate">
              {currentUser.name}
            </div>
            <div className="text-[11px] lg:text-xs text-slate-400">
              {currentUser.role === "MENTOR" ? "Mentor" : "Admin"}
            </div>
          </div>
          <span className="ml-auto bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] lg:text-xs font-bold shrink-0">
            Active
          </span>
        </div>
      </aside>
    </>
  );
}
