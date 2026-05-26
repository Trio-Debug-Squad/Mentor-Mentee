import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { StarIcon, ArrowRight } from "../ui/Icons";
import { navLinks } from "../../data/landingData";

export default function Header({ onLogin, onSignup }) {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between flex-wrap gap-4 py-5 border-b border-stone-200">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: "#E8B86D" }}
        >
          <StarIcon />
        </div>
        <p className="text-xs text-stone-500 tracking-wide">
          Mentorship platform
        </p>
      </div>

      {/* Nav */}

      <nav className="flex items-center gap-1 flex-wrap">
        {navLinks.map((item) => (
          <button
            key={item}
            className="text-[14px] text-[#6B6560] no-underline px-4 py-2 rounded-full transition-[background,color] duration-150 cursor-pointer bg-transparent border-none font-['DM_Sans',sans-serif] hover:bg-[rgba(26,23,20,0.06)] hover:text-[#1A1714]"
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Actions */}
      {/* <div className="flex items-center gap-2.5 flex-wrap">
        <Button
          variant="secondary"
          className="border-amber/60 bg-amber/10"
          onClick={() => navigate("/admin-dashboard")}
        >
          Demo Admin
        </Button>
        <Button variant="secondary" onClick={onLogin}>
          Sign in
        </Button>
        <Button variant="primary" onClick={onSignup}>
          Get Started <ArrowRight />
        </Button>
      </div> */}

      <div className="flex items-center gap-2.5 flex-wrap">
        <button
          className="inline-flex items-center gap-2 px-7 py-3.25 bg-[rgba(232,184,109,0.1)] text-[#1A1714] rounded-full text-[14px] font-medium no-underline border border-[#E8B86D] cursor-pointer transition-[border-color,background] duration-150 font-['DM_Sans',sans-serif] hover:border-[#C5BEB8] hover:bg-[#FDFCFB]"
          onClick={() => navigate("/admin-dashboard")}
        >
          Demo Admin
        </button>

        <button
          className="inline-flex items-center gap-2 px-7 py-3.25 bg-white text-[#1A1714] rounded-full text-[14px] font-medium no-underline border border-[#E2DDD8] cursor-pointer transition-[border-color,background] duration-150 font-['DM_Sans',sans-serif] hover:border-[#C5BEB8] hover:bg-[#FDFCFB]"
          onClick={() => navigate("/login")}
        >
          Sign in
        </button>

        <button
          className="inline-flex items-center gap-2 px-7 py-3.25 bg-[#1A1714] text-[#F7F4EF] rounded-full text-[14px] font-medium no-underline border-none cursor-pointer transition-[background] duration-150 font-['DM_Sans',sans-serif] hover:bg-[#2E2A26]"
          onClick={() => navigate("/signup")}
        >
          Get Started <ArrowRight />
        </button>
      </div>
    </header>
  );
}
