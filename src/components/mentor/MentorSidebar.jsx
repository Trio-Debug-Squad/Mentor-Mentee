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

export default function MentorSidebar({
  activeNav,
  setActiveNav,
  expandedMenu,
  setExpandedMenu,
}) {
  return (
    <aside
      className="w-64 bg-white border-r border-slate-100 flex flex-col py-7 fixed top-0 left-0 bottom-0 z-50"
      style={{ boxShadow: "2px 0 20px rgba(99,102,241,0.06)" }}
    >
      <div className="flex items-center gap-3 px-6 pb-7">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg"
          style={{ background: "linear-gradient(135deg, #6366f1, #818cf8)" }}
        >
          M
        </div>
        <span className="font-black text-xl text-slate-800 tracking-tight">
          MentorFlow
        </span>
      </div>

      <div className="px-4 flex-1 overflow-y-auto">
        <div className="text-xs font-bold text-slate-400 tracking-widest mb-2 pl-2">
          MAIN MENU
        </div>

        {mentorMenuData.map(({ category, iconKey, items }) => (
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

      <div className="mx-4 pt-4 border-t border-slate-100 flex items-center gap-3">
        <Avatar initials="SC" color="#6366f1" size={40} />
        <div>
          <div className="text-sm font-bold text-slate-800">Sarah Connor</div>
          <div className="text-xs text-slate-400">Senior Mentor</div>
        </div>
        <span className="ml-auto bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-bold">
          Active
        </span>
      </div>
    </aside>
  );
}
