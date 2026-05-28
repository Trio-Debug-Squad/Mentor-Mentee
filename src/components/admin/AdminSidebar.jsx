// AdminSidebar.jsx
// Main sidebar — logo, nav, user strip
// Broken into: SidebarToggle (exported), SidebarNavItem (per menu group)
// Everything else stays here since it's simple enough not to split further

import { useState } from "react";
import Avatar from "../ui/Avatar";
import SidebarNavItem from "./SidebarNavItem";
import { menuData } from "../../data/adminData";

export { default as SidebarToggle } from "./SidebarToggle";

export default function AdminSidebar({
  activeNav,
  setActiveNav,
  mobileOpen,
  setMobileOpen,
}) {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleNavClick = (item) => {
    setActiveNav(item);
    setMobileOpen(false);
  };

  const handleExpand = (category) => {
    setExpandedMenu(expandedMenu === category ? null : category);
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
          "bg-white border-r border-[#f1f5f9] flex flex-col fixed top-0 left-0 bottom-0 z-100 transition-all duration-300",
          "w-65",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:w-55",
          "lg:w-65",
        ].join(" ")}
        style={{ boxShadow: "2px 0 20px rgba(59,130,246,0.05)" }}
      >
        {/* ── Logo ── */}
        <div className="flex items-center gap-3 px-5 md:px-4 lg:px-6 pb-7 pt-7">
          <div
            className="w-9 h-9 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center text-white font-black text-[16px] lg:text-[18px] shrink-0"
            style={{ background: "linear-gradient(135deg, #1e293b, #334155)" }}
          >
            A
          </div>
          <span className="font-black text-[17px] md:text-[16px] lg:text-[20px] text-[#1e293b] tracking-[-0.5px] truncate">
            AdminConsole
          </span>
          {/* Close button — mobile only */}
          <button
            onClick={() => setMobileOpen(false)}
            className="md:hidden ml-auto shrink-0 w-7 h-7 flex items-center justify-center rounded-lg text-[#94a3b8] hover:text-[#1e293b] hover:bg-slate-100 transition-colors"
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
          <div className="text-[11px] font-bold text-[#94a3b8] tracking-[1.2px] mb-2 pl-2">
            ADMIN PANEL
          </div>

          {/* Dashboard */}
          <div className="mb-1">
            <button
              onClick={() => {
                handleNavClick("Dashboard");
                setExpandedMenu(null);
              }}
              className="flex items-center gap-3 w-full px-3 md:px-2.5 lg:px-3.5 py-2.5 md:py-2.25 lg:py-2.75 border-none rounded-xl cursor-pointer text-[13px] md:text-[12px] lg:text-[14px] font-bold transition-all duration-200"
              style={{
                background:
                  activeNav === "Dashboard"
                    ? "linear-gradient(135deg, #3b82f6, #60a5fa)"
                    : "transparent",
                color: activeNav === "Dashboard" ? "#fff" : "#64748b",
                boxShadow:
                  activeNav === "Dashboard"
                    ? "0 4px 14px rgba(59,130,246,0.25)"
                    : "none",
                fontFamily: "inherit",
              }}
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

          {/* Grouped menus — each is a SidebarNavItem */}
          {menuData.map(({ category, iconKey, items }) => (
            <SidebarNavItem
              key={category}
              category={category}
              iconKey={iconKey}
              items={items}
              activeNav={activeNav}
              expandedMenu={expandedMenu}
              onExpand={handleExpand}
              onNavClick={handleNavClick}
            />
          ))}
        </div>

        {/* ── User strip ── */}
        <div className="mx-3 lg:mx-4 pt-3.5 border-t border-[#f1f5f9] flex items-center gap-3">
          <Avatar initials="AD" color="#1e293b" size={36} />
          <div className="min-w-0">
            <div className="text-[13px] lg:text-[14px] font-bold text-[#1e293b] truncate">
              System Admin
            </div>
            <div className="text-[11px] lg:text-[12px] text-[#94a3b8]">
              Master Access
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
