// SidebarToggle.jsx
// Hamburger button — only on mobile, only when sidebar is closed

export default function SidebarToggle({ onClick, mobileOpen }) {
  if (mobileOpen) return null;

  return (
    <button
      onClick={onClick}
      className="md:hidden fixed top-4 left-4 z-200 w-10 h-10 bg-white border border-[#f1f5f9] rounded-xl flex items-center justify-center cursor-pointer"
      style={{ boxShadow: "0 2px 12px rgba(59,130,246,0.1)" }}
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
